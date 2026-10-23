import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollBackgroundGlow: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-linked background tone: Pure OLED Full Black (Zero blue/slate tint)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      '#000000', // Top Hero: Pure Black
      '#000000', // Runway: Pure Black
      '#000000', // Terminal: Pure Black
      '#000000', // Security: Pure Black
      '#000000', // Footer: Pure Black
    ]
  );

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Scroll-Reactive Base Ambient Canvas */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ backgroundColor }}
      />

      {/* Subtle Micro Dot Texture */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
    </div>
  );
};
