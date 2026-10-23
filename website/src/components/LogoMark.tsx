import React from 'react';

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  className?: string;
}

export const LogoMark: React.FC<LogoMarkProps> = ({ size = 'md', className = '' }) => {
  const iconBoxSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Bespoke Geometric Deployment Prism Mark */}
      <div
        className={`relative ${iconBoxSizes[size]} shrink-0 rounded-lg bg-[#000000] border border-[#F6E3B8]/25 flex items-center justify-center p-1 transition-all duration-200 group-hover:border-[#E7BA05]/80 group-hover:bg-[#050505] shadow-sm`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top Facet - Brand Yellow (#E7BA05) */}
          <polygon
            points="12,3 20,7.5 12,12 4,7.5"
            fill="#E7BA05"
            stroke="#000000"
            strokeWidth="0.8"
          />
          {/* Right Facet - Brand Butter (#F6E3B8) */}
          <polygon
            points="12,12 20,7.5 20,16.5 12,21"
            fill="#F6E3B8"
            stroke="#000000"
            strokeWidth="0.8"
          />
          {/* Left Facet - Brand Leaf (#6B9E5A) */}
          <polygon
            points="4,7.5 12,12 12,21 4,16.5"
            fill="#6B9E5A"
            stroke="#000000"
            strokeWidth="0.8"
          />
          {/* Central Core Telemetry Node */}
          <circle
            cx="12"
            cy="12"
            r="1.2"
            fill="#000000"
          />
        </svg>
      </div>

      {/* Brand Name: Pure Single-Line Editorial Typography */}
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <span className={`font-syne font-black ${textSizes[size]} text-[#F6E3B8] tracking-tight`}>
          DEPLOY
        </span>
        <span className={`font-mono font-bold ${textSizes[size]} text-[#E7BA05]`}>
          MCP
        </span>
      </div>
    </div>
  );
};
