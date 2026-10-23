import React, { useEffect, useRef } from 'react';

export const CosmicStarfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Canonical Brand Star Colors: Butter #F6E3B8, Yellow #E7BA05, Leaf #6B9E5A
    const colors = [
      'rgba(246, 227, 184, ', // Butter #F6E3B8 (60%)
      'rgba(246, 227, 184, ', // Butter #F6E3B8
      'rgba(246, 227, 184, ', // Butter #F6E3B8
      'rgba(231, 186, 5, ',   // Yellow #E7BA05 (25%)
      'rgba(107, 158, 90, ',  // Leaf #6B9E5A (15%)
    ];

    const starCount = Math.min(420, Math.floor((width * height) / 3400));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.7 + 0.35,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.12 - 0.04,
      baseAlpha: Math.random() * 0.65 + 0.25,
      pulseSpeed: Math.random() * 0.025 + 0.008,
      pulseOffset: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let lastScrollY = window.scrollY;
    let scrollDelta = 0;

    const onScroll = () => {
      scrollDelta = (window.scrollY - lastScrollY) * 0.18;
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let time = 0;
    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll delta dissipation
      scrollDelta *= 0.92;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.speedX;
        s.y += s.speedY - scrollDelta * (s.size / 2);

        // Infinite cosmic wrapping
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Realistic celestial twinkling
        const alpha = Math.max(
          0.08,
          Math.min(1, s.baseAlpha + Math.sin(time * s.pulseSpeed + s.pulseOffset) * 0.35)
        );

        ctx.fillStyle = s.color + alpha + ')';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Ethereal stardust halo for larger celestial nodes
        if (s.size > 1.25) {
          ctx.fillStyle = s.color + (alpha * 0.22) + ')';
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-75"
    />
  );
};
