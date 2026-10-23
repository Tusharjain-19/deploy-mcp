import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollTextMarqueeProps {
  className?: string;
}

export const ScrollTextMarquee: React.FC<ScrollTextMarqueeProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Dual directional scroll-driven parallax translations
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

  const row1Words = [
    'DEPLOY MCP',
    'ZERO SERVER COSTS',
    'TLS SECRETS FENCE',
    'AUTONOMOUS REPAIR',
    'VERCEL NATIVE',
    '20 MCP TOOLS',
  ];

  const row2Words = [
    'SUB-SECOND LATENCY',
    'PRE-FLIGHT COMPILATION',
    'CURSOR + CLAUDE READY',
    'EDGE RUNTIME VERIFIED',
    'SELF-HEALING DIAGNOSTICS',
    'OPEN SOURCE MIT',
  ];

  const repeated1 = [...row1Words, ...row1Words, ...row1Words];
  const repeated2 = [...row2Words, ...row2Words, ...row2Words];

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap select-none py-3.5 my-2 border-y border-[#F6E3B8]/15 bg-[#000000]/95 backdrop-blur-md relative ${className}`}
    >
      {/* Dynamic Background Mesh Tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E7BA05]/10 via-transparent to-[#F6E3B8]/10 pointer-events-none" />

      {/* Row 1: Moves Left on Scroll */}
      <motion.div
        style={{ x: x1, willChange: 'transform' }}
        className="flex items-center gap-8 font-syne font-black text-xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#F6E3B8] mb-1.5"
      >
        {repeated1.map((item, idx) => (
          <div key={`r1-${idx}`} className="flex items-center gap-8 shrink-0">
            <span
              className={
                idx % 2 === 0
                  ? 'text-[#F6E3B8] drop-shadow-[0_2px_10px_rgba(231,186,5,0.3)]'
                  : 'text-transparent stroke-text'
              }
            >
              {item}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E7BA05] shadow-[0_0_8px_#E7BA05]" />
          </div>
        ))}
      </motion.div>

      {/* Row 2: Moves Right on Scroll */}
      <motion.div
        style={{ x: x2, willChange: 'transform' }}
        className="flex items-center gap-8 font-mono font-bold text-xs sm:text-sm lg:text-base uppercase tracking-widest text-[#F6E3B8]"
      >
        {repeated2.map((item, idx) => (
          <div key={`r2-${idx}`} className="flex items-center gap-8 shrink-0">
            <span className={idx % 2 === 0 ? 'text-[#F6E3B8]' : 'text-[#F6E3B8]/60'}>
              {item}
            </span>
            <span className="text-[#E7BA05] font-black">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
