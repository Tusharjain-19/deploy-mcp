import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { playClickSound } from '../utils/soundEffects';
import { MapPin, Zap, Globe, Activity, CheckCircle2 } from 'lucide-react';

export interface VercelServer {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  latency: string;
  edgeType: string;
}

export const VERCEL_SERVERS: VercelServer[] = [
  { id: 'sfo1', name: 'San Francisco', country: 'United States', lat: 37.7749, lon: -122.4194, latency: '2ms', edgeType: 'Tier 1 Anycast Edge' },
  { id: 'iad1', name: 'Washington D.C.', country: 'United States', lat: 38.9072, lon: -77.0369, latency: '1ms', edgeType: 'Primary US-East Core' },
  { id: 'lhr1', name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278, latency: '2ms', edgeType: 'Europe-West Hub' },
  { id: 'fra1', name: 'Frankfurt', country: 'Germany', lat: 50.1109, lon: 8.6821, latency: '3ms', edgeType: 'EU Central Core' },
  { id: 'cdg1', name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522, latency: '3ms', edgeType: 'EU West Gateway' },
  { id: 'hnd1', name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503, latency: '5ms', edgeType: 'Asia-Pacific Core' },
  { id: 'sin1', name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198, latency: '4ms', edgeType: 'South Asia Hub' },
  { id: 'bom1', name: 'Mumbai', country: 'India', lat: 19.0760, lon: 72.8777, latency: '6ms', edgeType: 'India Regional Hub' },
  { id: 'syd1', name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093, latency: '8ms', edgeType: 'Oceania Edge' },
  { id: 'gru1', name: 'São Paulo', country: 'Brazil', lat: -23.5505, lon: -46.6333, latency: '12ms', edgeType: 'Latin America Gateway' },
  { id: 'arn1', name: 'Stockholm', country: 'Sweden', lat: 59.3293, lon: 18.0686, latency: '4ms', edgeType: 'Nordics Edge' },
  { id: 'cpt1', name: 'Cape Town', country: 'South Africa', lat: -33.9249, lon: 18.4241, latency: '14ms', edgeType: 'Africa South Node' },
];

function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function createCurveArc(v1: THREE.Vector3, v2: THREE.Vector3, radius: number): THREE.BufferGeometry {
  const distance = v1.distanceTo(v2);
  const mid = v1.clone().add(v2).multiplyScalar(0.5);
  const altitude = radius + distance * 0.2;
  mid.normalize().multiplyScalar(altitude);

  const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
  return new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
}

interface ThreeGlobe3DProps {
  className?: string;
  size?: number;
  onSelectServer?: (server: VercelServer) => void;
}

export const ThreeGlobe3D: React.FC<ThreeGlobe3DProps> = ({
  className = '',
  size = 400,
  onSelectServer,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedServer, setSelectedServer] = useState<VercelServer>(VERCEL_SERVERS[0]);
  const [isPingTesting, setIsPingTesting] = useState(false);

  // Ref to trigger rotation to a specific server from outside Three.js scope
  const targetRotationRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0.25, y: -1.2, active: false });
  const pauseAutoRotateUntilRef = useRef<number>(0);

  // Smoothly rotate globe to face selected server
  const focusOnServer = useCallback((server: VercelServer) => {
    setSelectedServer(server);
    if (onSelectServer) onSelectServer(server);

    // Compute target Euler angles to bring this lat/lon to face camera (positive Z)
    const latRad = (server.lat * Math.PI) / 180;
    const lonRad = (server.lon * Math.PI) / 180;

    targetRotationRef.current = {
      x: latRad * 0.75,
      y: -lonRad - Math.PI / 2,
      active: true,
    };
    // Pause auto-rotation for 5.5s so user can examine it
    pauseAutoRotateUntilRef.current = Date.now() + 5500;
  }, [onSelectServer]);

  const handleServerClick = (server: VercelServer) => {
    playClickSound();
    focusOnServer(server);
  };

  const handleSimulatePing = () => {
    playClickSound();
    setIsPingTesting(true);
    setTimeout(() => {
      setIsPingTesting(false);
    }, 900);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 14.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Root Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    globeGroup.rotation.x = 0.25;
    globeGroup.rotation.y = -1.2;

    const globeRadius = 4.6;

    // 2. Realistic Earth Texture Maps
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load('/textures/earth_atmos.jpg');
    earthMap.colorSpace = THREE.SRGBColorSpace;

    const earthLightsMap = textureLoader.load('/textures/earth_lights.png');
    earthLightsMap.colorSpace = THREE.SRGBColorSpace;

    // Earth Sphere Mesh
    const earthGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      roughness: 0.8,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // Earth Night Lights Layer
    const nightMaterial = new THREE.MeshBasicMaterial({
      map: earthLightsMap,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
    });
    const nightMesh = new THREE.Mesh(new THREE.SphereGeometry(globeRadius + 0.015, 64, 64), nightMaterial);
    globeGroup.add(nightMesh);

    // Warm Atmospheric Glow Shell
    const atmosGeometry = new THREE.SphereGeometry(globeRadius + 0.25, 48, 48);
    const atmosMaterial = new THREE.MeshBasicMaterial({
      color: 0xe6d5b0,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    const atmosMesh = new THREE.Mesh(atmosGeometry, atmosMaterial);
    scene.add(atmosMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff8ee, 2.5);
    sunLight.position.set(12, 6, 10);
    scene.add(sunLight);

    const softFillLight = new THREE.DirectionalLight(0xe6d5b0, 0.4);
    softFillLight.position.set(-10, -6, -8);
    scene.add(softFillLight);

    // 3. Vercel Server Pin Markers & Clickable Hitboxes
    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);

    const pinGeometry = new THREE.CylinderGeometry(0.05, 0.02, 0.65, 8);
    pinGeometry.rotateX(Math.PI / 2);

    const pinMaterialOrange = new THREE.MeshBasicMaterial({ color: 0xd5380c });
    const pinMaterialIvory = new THREE.MeshBasicMaterial({ color: 0xfaf6ee });

    const serverVectors: { [key: string]: THREE.Vector3 } = {};
    const clickableObjects: THREE.Object3D[] = [];

    VERCEL_SERVERS.forEach((server, index) => {
      const surfacePos = latLongToVector3(server.lat, server.lon, globeRadius);
      serverVectors[server.id] = surfacePos;

      const isPrimary = index < 3;

      // Base marker dot
      const baseMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 12, 12),
        isPrimary ? pinMaterialOrange : pinMaterialIvory
      );
      baseMesh.position.copy(surfacePos);
      baseMesh.userData = { serverId: server.id };
      markerGroup.add(baseMesh);
      clickableObjects.push(baseMesh);

      // Radial Beacon Pin
      const pinMesh = new THREE.Mesh(
        pinGeometry,
        isPrimary ? pinMaterialOrange : pinMaterialIvory
      );
      const tipPos = surfacePos.clone().multiplyScalar(1.06);
      pinMesh.position.copy(tipPos);
      pinMesh.lookAt(surfacePos.clone().multiplyScalar(2));
      pinMesh.userData = { serverId: server.id };
      markerGroup.add(pinMesh);
      clickableObjects.push(pinMesh);

      // Surface Ripple Ring
      const ringGeo = new THREE.RingGeometry(0.12, 0.28, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isPrimary ? 0xd5380c : 0xf1b333,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(surfacePos.clone().multiplyScalar(1.002));
      ringMesh.lookAt(surfacePos.clone().multiplyScalar(2));
      ringMesh.userData = { serverId: server.id };
      markerGroup.add(ringMesh);
      clickableObjects.push(ringMesh);

      // Larger invisible sphere hitbox to make clicking on mobile/desktop effortless
      const hitboxGeo = new THREE.SphereGeometry(0.48, 8, 8);
      const hitboxMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitboxMesh = new THREE.Mesh(hitboxGeo, hitboxMat);
      hitboxMesh.position.copy(surfacePos);
      hitboxMesh.userData = { serverId: server.id };
      markerGroup.add(hitboxMesh);
      clickableObjects.push(hitboxMesh);
    });

    // 4. Inter-Region Edge Transit Arcs (Warm Ivory)
    const routes = [
      ['sfo1', 'iad1'],
      ['iad1', 'lhr1'],
      ['lhr1', 'fra1'],
      ['fra1', 'cdg1'],
      ['fra1', 'sin1'],
      ['sin1', 'bom1'],
      ['sin1', 'hnd1'],
      ['hnd1', 'syd1'],
      ['sfo1', 'hnd1'],
      ['iad1', 'gru1'],
    ];

    const arcMaterial = new THREE.LineBasicMaterial({
      color: 0xfaf6ee,
      transparent: true,
      opacity: 0.35,
    });

    routes.forEach(([src, dst]) => {
      if (serverVectors[src] && serverVectors[dst]) {
        const arcGeo = createCurveArc(serverVectors[src], serverVectors[dst], globeRadius);
        const arcLine = new THREE.Line(arcGeo, arcMaterial);
        globeGroup.add(arcLine);
      }
    });

    // 5. Interactive Raycasting + Free Drag in Any Direction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isDragging = false;
    let pointerDownX = 0;
    let pointerDownY = 0;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const onPointerDown = (clientX: number, clientY: number) => {
      isDragging = true;
      targetRotationRef.current.active = false;
      if (resumeTimeout) clearTimeout(resumeTimeout);
      pointerDownX = clientX;
      pointerDownY = clientY;
      prevPointerX = clientX;
      prevPointerY = clientY;
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      const deltaX = clientX - prevPointerX;
      const deltaY = clientY - prevPointerY;
      prevPointerX = clientX;
      prevPointerY = clientY;

      // Free 360-degree rotation in any direction
      globeGroup.rotation.y += deltaX * 0.007;
      globeGroup.rotation.x += deltaY * 0.007;
    };

    const onPointerUp = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      isDragging = false;

      // Detect if this was a click rather than a drag
      const moveDistance = Math.hypot(clientX - pointerDownX, clientY - pointerDownY);
      if (moveDistance < 6) {
        // Perform raycast click detection
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(clickableObjects, true);

        if (intersects.length > 0) {
          const hit = intersects.find(i => i.object.userData?.serverId);
          if (hit) {
            const serverId = hit.object.userData.serverId;
            const target = VERCEL_SERVERS.find(s => s.id === serverId);
            if (target) {
              playClickSound();
              focusOnServer(target);
              return;
            }
          }
        }
      }

      // Resume rotating after 1.5s
      resumeTimeout = setTimeout(() => {
        pauseAutoRotateUntilRef.current = 0;
      }, 1500);
    };

    const domElement = renderer.domElement;
    domElement.style.cursor = 'grab';

    const handleMouseDown = (e: MouseEvent) => {
      domElement.style.cursor = 'grabbing';
      onPointerDown(e.clientX, e.clientY);
    };
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = (e: MouseEvent) => {
      domElement.style.cursor = 'grab';
      onPointerUp(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 1) {
        onPointerUp(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    };

    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 6. Smooth Animation Loop with IntersectionObserver
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();

      // Smooth interpolation to target server if clicked
      if (targetRotationRef.current.active && !isDragging) {
        const targetX = targetRotationRef.current.x;
        const targetY = targetRotationRef.current.y;
        globeGroup.rotation.x += (targetX - globeGroup.rotation.x) * 0.08;
        globeGroup.rotation.y += (targetY - globeGroup.rotation.y) * 0.08;

        if (
          Math.abs(targetX - globeGroup.rotation.x) < 0.005 &&
          Math.abs(targetY - globeGroup.rotation.y) < 0.005
        ) {
          targetRotationRef.current.active = false;
        }
      } else if (!isDragging && Date.now() > pauseAutoRotateUntilRef.current) {
        // Continuous smooth auto-rotation
        globeGroup.rotation.y += 0.22 * delta;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (resumeTimeout) clearTimeout(resumeTimeout);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
      earthGeometry.dispose();
      earthMaterial.dispose();
      earthMap.dispose();
      earthLightsMap.dispose();
    };
  }, [size, focusOnServer]);

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      
      {/* Real 3D Earth Canvas: Fully Visible, Unclipped, Clickable */}
      <div className="relative flex items-center justify-center">
        <div
          ref={mountRef}
          className="relative flex items-center justify-center overflow-visible"
          style={{ width: size, height: size }}
          title="Interactive 3D Earth: Drag to rotate, CLICK any pin to inspect PoP details"
        />

        {/* Hover Hint Overlay Pill */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none bg-[#101010]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-[#FAF6EE] flex items-center gap-1.5 shadow-lg">
          <MapPin className="w-3 h-3 text-[#D5380C]" />
          <span>CLICK ANY PIN TO INSPECT REGION</span>
        </div>
      </div>

      {/* Interactive Server Quick-Select Chip Pills */}
      <div className="mt-3 w-full max-w-md flex flex-wrap items-center justify-center gap-1.5 px-2">
        {VERCEL_SERVERS.map((server) => {
          const isSelected = selectedServer.id === server.id;
          return (
            <button
              key={server.id}
              onClick={() => handleServerClick(server)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all flex items-center gap-1 cursor-pointer ${
                isSelected
                  ? 'bg-[#D5380C] text-[#FAF6EE] border border-[#FAF6EE] shadow-[2px_2px_0px_#FAF6EE] scale-105'
                  : 'bg-[#141414] text-[#E6D5B0]/70 border border-white/10 hover:border-[#D5380C] hover:text-[#FAF6EE]'
              }`}
              title={`Focus on ${server.name} (${server.country})`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#FAF6EE]' : 'bg-[#D5380C]'}`} />
              <span>{server.id}</span>
            </button>
          );
        })}
      </div>

      {/* Comprehensive Server Telemetry Inspector Card */}
      <div className="mt-3 w-full max-w-sm p-4 rounded-2xl bg-[#121212] border-2 border-white/10 shadow-2xl text-left font-mono relative overflow-hidden">
        
        {/* Top Header with Ping Latency Badge */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D5380C] animate-pulse" />
            <span className="font-syne font-black text-sm text-[#FAF6EE] uppercase">{selectedServer.id}</span>
            <span className="text-white/30">/</span>
            <span className="text-xs text-[#FAF6EE] font-bold">{selectedServer.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-[#1a1a1a] text-[#F1B333] px-2.5 py-1 rounded-full border border-[#F1B333]/30 font-bold flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#F1B333]" />
              <span>{isPingTesting ? '< 1ms' : selectedServer.latency}</span>
            </span>
          </div>
        </div>

        {/* Detailed Metadata Grid */}
        <div className="pt-3 space-y-2 text-[11px]">
          <div className="flex items-center justify-between text-[#E6D5B0]/80">
            <span className="text-white/40">Country & Region:</span>
            <span className="font-bold text-[#FAF6EE]">{selectedServer.country}</span>
          </div>

          <div className="flex items-center justify-between text-[#E6D5B0]/80">
            <span className="text-white/40">Geo Coordinates:</span>
            <span className="text-[#FAF6EE]">{selectedServer.lat.toFixed(2)}°N, {selectedServer.lon.toFixed(2)}°E</span>
          </div>

          <div className="flex items-center justify-between text-[#E6D5B0]/80">
            <span className="text-white/40">Node Role:</span>
            <span className="text-[#F1B333] font-bold">{selectedServer.edgeType}</span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px]">
            <span className="text-[#0C9367] flex items-center gap-1 font-bold">
              <CheckCircle2 className="w-3 h-3" />
              <span>STATUS: NOMINAL</span>
            </span>
            <button
              onClick={handleSimulatePing}
              className="text-[#D5380C] hover:text-[#FAF6EE] underline cursor-pointer font-bold flex items-center gap-1"
            >
              <Activity className="w-3 h-3" />
              <span>{isPingTesting ? 'PROBING...' : 'TEST PING'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
