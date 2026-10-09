import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSolarSystem3DProps {
  className?: string;
  size?: number;
}

export const ThreeSolarSystem3D: React.FC<ThreeSolarSystem3DProps> = ({
  className = '',
  size = 400,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 16, 26);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const systemGroup = new THREE.Group();
    // Tilt the entire orbital plane for perspective view
    systemGroup.rotation.x = 0.45;
    systemGroup.rotation.z = -0.15;
    scene.add(systemGroup);

    // 2. Central Core Sun / Nucleus
    const sunGeo = new THREE.SphereGeometry(1.4, 24, 24);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xfaf6ee });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    systemGroup.add(sun);

    // Core Corona Glow
    const coronaGeo = new THREE.RingGeometry(1.6, 2.5, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xf1b333,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const corona = new THREE.Mesh(coronaGeo, coronaMat);
    corona.rotation.x = Math.PI / 2;
    systemGroup.add(corona);

    // 3. Orbital Paths & Orbiting Nodes
    const orbitsData = [
      { radius: 4.2, speed: 1.8, color: 0xfaf6ee, size: 0.32, incline: 0.05 },
      { radius: 6.8, speed: 1.2, color: 0xd5380c, size: 0.45, incline: -0.08 },
      { radius: 9.6, speed: 0.8, color: 0xe6d5b0, size: 0.38, incline: 0.12 },
      { radius: 12.8, speed: 0.5, color: 0xf1b333, size: 0.5, incline: -0.04 },
      { radius: 16.2, speed: 0.3, color: 0xd5380c, size: 0.35, incline: 0.07 },
    ];

    const orbitalObjects: {
      mesh: THREE.Mesh;
      radius: number;
      speed: number;
      incline: number;
    }[] = [];

    orbitsData.forEach(item => {
      // Orbit Ring Line
      const curve = new THREE.EllipseCurve(0, 0, item.radius, item.radius, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, 0, p.y)));
      const orbitMat = new THREE.LineBasicMaterial({
        color: item.color,
        transparent: true,
        opacity: 0.25,
      });
      const orbitLine = new THREE.Line(orbitGeo, orbitMat);
      orbitLine.rotation.x = item.incline;
      systemGroup.add(orbitLine);

      // Orbiting Planet / Celestial Sphere
      const sphereGeo = new THREE.SphereGeometry(item.size, 16, 16);
      const sphereMat = new THREE.MeshBasicMaterial({ color: item.color });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      systemGroup.add(sphereMesh);

      // Orbiting Aura Ring
      const auraGeo = new THREE.RingGeometry(item.size * 1.3, item.size * 1.8, 16);
      const auraMat = new THREE.MeshBasicMaterial({
        color: item.color,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      });
      const auraMesh = new THREE.Mesh(auraGeo, auraMat);
      auraMesh.rotation.x = Math.PI / 2;
      sphereMesh.add(auraMesh);

      orbitalObjects.push({
        mesh: sphereMesh,
        radius: item.radius,
        speed: item.speed,
        incline: item.incline,
      });
    });

    // 4. Subtle Outer Cosmic Dust Field
    const dustCount = 800;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 3 + Math.random() * 16;
      dustPositions[i * 3] = Math.cos(angle) * r;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      dustPositions[i * 3 + 2] = Math.sin(angle) * r;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xe6d5b0,
      transparent: true,
      opacity: 0.35,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    systemGroup.add(dust);

    // 5. Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.5;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous orbital revolution of planets
      orbitalObjects.forEach(obj => {
        const theta = elapsed * obj.speed * 0.4;
        const x = Math.cos(theta) * obj.radius;
        const z = Math.sin(theta) * obj.radius;
        const y = Math.sin(theta * 2) * obj.incline * 2;
        obj.mesh.position.set(x, y, z);
      });

      // Mouse Parallax on system tilt
      systemGroup.rotation.y = elapsed * 0.03;
      systemGroup.rotation.x = 0.45 + mouseY * 0.25;
      systemGroup.rotation.z = -0.15 + mouseX * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      sunGeo.dispose();
      sunMat.dispose();
      coronaGeo.dispose();
      coronaMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    />
  );
};
