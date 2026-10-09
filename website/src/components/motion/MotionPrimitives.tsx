import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Fade In Entrance Primitive
export const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll Parallax Text Primitive: text smoothly floats and shifts on scroll
export const ScrollParallaxText: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number;
}> = ({ children, className = '', speed = 14 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.75, 1, 1, 0.85]);

  return (
    <motion.div ref={ref} style={{ y, opacity, willChange: 'transform, opacity' }} className={className}>
      {children}
    </motion.div>
  );
};

// Scroll Parallax Card: subtle vertical depth offset across scrolling sections
export const ScrollParallaxCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  offsetY?: number;
}> = ({ children, className = '', offsetY = 18 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offsetY, -offsetY]);

  return (
    <motion.div ref={ref} style={{ y, willChange: 'transform' }} className={className}>
      {children}
    </motion.div>
  );
};

// Animated Border Beam Primitive
export const BorderBeam: React.FC<{
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}> = ({
  size = 200,
  duration = 10,
  colorFrom = '#D5380C',
  colorTo = '#F1B333',
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
      <motion.div
        className="absolute aspect-square"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round 1.5rem)`,
          background: `radial-gradient(circle, ${colorFrom} 0%, ${colorTo} 50%, transparent 100%)`,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
        }}
      />
    </div>
  );
};

// Stagger Container Primitive
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
