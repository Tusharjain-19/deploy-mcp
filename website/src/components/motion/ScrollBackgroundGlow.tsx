import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollBackgroundGlow: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-linked dynamic ambient background tone (deep sleek neutrals)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      '#0e0e11', // Top Hero: deep obsidian
      '#111114', // Runway: clean dark obsidian
      '#0d1114', // Terminal: cyber slate dark
      '#121113', // Security: neutral dark
      '#0a0a0c', // Footer: pure dark
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
