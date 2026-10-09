import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CosmicGalaxy3DProps {
  className?: string;
  interactive?: boolean;
}

export const CosmicGalaxy3D: React.FC<CosmicGalaxy3DProps> = ({
  className = '',
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#101010', 0.002);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 14, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Galaxy Parameters (Inspired by attached spiral galaxy image)
    const parameters = {
      count: 22000,
      size: 0.18,
      radius: 20,
      branches: 4,
      spin: 1.4,
      randomness: 0.5,
      power: 3.5,
      // Brand Colors: Burnt Orange, Warm Ivory, Gold, Deep Ember
      colorCore: new THREE.Color('#FAF6EE'), // Warm bright core
      colorInner: new THREE.Color('#D5380C'), // Burnt Orange
      colorArms: new THREE.Color('#E6D5B0'), // Warm Ivory
      colorOuter: new THREE.Color('#4A2016'), // Deep ember
      colorGold: new THREE.Color('#F1B333'), // Golden stars
    };

    // 3. Create Particle Geometry
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const scales = new Float32Array(parameters.count);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      // Position in galaxy disc
      const r = Math.random() * parameters.radius;
      const spinAngle = r * parameters.spin;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      // Logarithmic / power distribution (more stars near core)
      const randomX = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * r;
      const randomY = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * (parameters.randomness * 0.4) * r;
      const randomZ = Math.pow(Math.random(), parameters.power) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY; // Volumetric thickness
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      // Color mapping from core to outer spiral tips
      const mixedColor = parameters.colorCore.clone();
      const distRatio = r / parameters.radius;

      if (distRatio < 0.15) {
        // Core: warm bright ivory & gold
        mixedColor.lerp(parameters.colorGold, distRatio / 0.15);
      } else if (distRatio < 0.55) {
        // Inner arms: Burnt Orange
        mixedColor.lerp(parameters.colorInner, (distRatio - 0.15) / 0.4);
      } else if (distRatio < 0.82) {
        // Outer arms: Warm Ivory
        mixedColor.lerp(parameters.colorArms, (distRatio - 0.55) / 0.27);
      } else {
        // Rim: Deep cosmic violet
        mixedColor.lerp(parameters.colorOuter, (distRatio - 0.82) / 0.18);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      // Scale variation
      scales[i] = (0.5 + Math.random() * 0.8);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // 4. Circular Soft Glow Texture Generator
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.55, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.9,
    });

    const galaxy = new THREE.Points(geometry, material);
    // Slight initial tilt for dramatic perspective like in the photo
    galaxy.rotation.x = 0.65;
    galaxy.rotation.z = -0.25;
    scene.add(galaxy);

    // 5. Add Background Ambient Starfield
    const bgStarCount = 1800;
    const bgStarPositions = new Float32Array(bgStarCount * 3);
    const bgStarColors = new Float32Array(bgStarCount * 3);

    for (let i = 0; i < bgStarCount; i++) {
      const i3 = i * 3;
      bgStarPositions[i3] = (Math.random() - 0.5) * 120;
      bgStarPositions[i3 + 1] = (Math.random() - 0.5) * 80;
      bgStarPositions[i3 + 2] = (Math.random() - 0.5) * 120;

      const starColor = Math.random() > 0.4 ? parameters.colorCore : parameters.colorArms;
      bgStarColors[i3] = starColor.r;
      bgStarColors[i3 + 1] = starColor.g;
      bgStarColors[i3 + 2] = starColor.b;
    }

    const bgGeometry = new THREE.BufferGeometry();
    bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgStarPositions, 3));
    bgGeometry.setAttribute('color', new THREE.BufferAttribute(bgStarColors, 3));

    const bgMaterial = new THREE.PointsMaterial({
      size: 0.12,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const bgStars = new THREE.Points(bgGeometry, bgMaterial);
    scene.add(bgStars);

    // 6. Interactive Mouse Parallax
    let targetRotationX = 0.65;
    let targetRotationY = 0;
    let targetCameraZ = 28;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      targetRotationY = x * 0.45;
      targetRotationX = 0.65 + y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 8. Intersection Observer to Pause RAF when offscreen (Freeing 100% GPU for 1000Hz Scroll)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 9. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Continuous celestial galaxy rotation
      galaxy.rotation.y = elapsedTime * 0.045 + targetRotationY;

      // Smooth mouse parallax interpolation
      galaxy.rotation.x += (targetRotationX - galaxy.rotation.x) * 0.05;

      // Subtle background starfield counter-drift
      bgStars.rotation.y = -elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};
