import React from 'react';

interface LogoMarkProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  className?: string;
}

export const LogoMark: React.FC<LogoMarkProps> = ({ size = 'md', showBadge = false, className = '' }) => {
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
      {/* Ultra-Minimalist Geometric Deploy Prism Mark */}
      <div
        className={`relative ${iconBoxSizes[size]} shrink-0 rounded-lg bg-[#171717] border border-white/10 flex items-center justify-center p-1.5 transition-all duration-200 group-hover:border-[#D5380C]/60 group-hover:bg-[#1c1c1c] shadow-sm`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Left Wing - Brand Burnt Orange (#D5380C) */}
          <path
            d="M11 4.2L3.5 18.5H11V4.2Z"
            fill="#D5380C"
          />
          {/* Right Wing - Warm Ivory (#FAF6EE) */}
          <path
            d="M13 4.2V18.5H20.5L13 4.2Z"
            fill="#FAF6EE"
          />
          {/* Minimal Central Accent Dot / Pulse */}
          <circle
            cx="12"
            cy="18.5"
            r="1"
            fill="#FAF6EE"
          />
        </svg>
      </div>

      {/* Brand Name: Pure Single-Line Typography */}
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <span className={`font-syne font-black ${textSizes[size]} text-[#FAF6EE] tracking-tight`}>
          DEPLOY
        </span>
        <span className={`font-mono font-bold ${textSizes[size]} text-[#D5380C]`}>
          MCP
        </span>
        {showBadge && (
          <span className="text-[9px] font-mono font-bold text-[#FAF6EE] bg-[#161616] px-1.5 py-0.5 rounded border border-[#D5380C]/40 ml-1">
            v1.0
          </span>
        )}
      </div>
    </div>
  );
};
