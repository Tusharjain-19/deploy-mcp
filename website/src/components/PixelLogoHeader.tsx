import React from 'react';

interface PixelLogoHeaderProps {
  className?: string;
  showTerminalBar?: boolean;
}

export const PixelLogoHeader: React.FC<PixelLogoHeaderProps> = ({
  className = '',
  showTerminalBar = true
}) => {
  return (
    <div className={`relative select-none font-mono ${className}`}>
      {showTerminalBar && (
        <div className="flex items-center justify-between text-xs font-mono text-[#E6D5B0]/80 pb-3 border-b border-white/10 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full border border-[#D5380C] bg-transparent" />
            <span className="text-[#E6D5B0]/50">PS D:\deploy mcp&gt;</span>
            <span className="text-[#F1B333] font-bold">npx deploymcp setup</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-[#FAF6EE]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5380C] animate-pulse" />
            <span>DEPLOY MCP PROTOCOL</span>
          </div>
        </div>
      )}

      {/* PIXEL ART BANNER IN SIGNATURE BRAND BURNT ORANGE & WARM IVORY */}
      <div className="overflow-x-auto py-1">
        <svg
          viewBox="6 8 848 94"
          className="w-full max-w-4xl h-auto drop-shadow-[0_0_20px_rgba(213,56,12,0.65)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="brandOrangeGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#D5380C" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#D5380C" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* D */}
          <g filter="url(#brandOrangeGlow)" fill="#D5380C" stroke="#D5380C" strokeWidth="1">
            <path d="M10 10 H60 V30 H80 V80 H60 V100 H10 Z M30 30 V80 H50 V30 Z" />
            <path d="M14 14 H56 V26 H76 V84 H56 V96 H14 Z M34 34 V76 H46 V34 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* E */}
            <path d="M100 10 H170 V30 H120 V45 H160 V65 H120 V80 H170 V100 H100 Z" />
            <path d="M104 14 H166 V26 H116 V49 H156 V61 H116 V84 H166 V96 H104 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* P */}
            <path d="M190 10 H250 V30 H260 V65 H210 V100 H190 Z M210 30 V50 H240 V30 Z" />
            <path d="M194 14 H246 V26 H256 V61 H206 V96 H194 Z M214 34 V46 H236 V34 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* L */}
            <path d="M280 10 H300 V80 H350 V100 H280 Z" />
            <path d="M284 14 H296 V84 H346 V96 H284 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* O */}
            <path d="M370 10 H430 V30 H440 V80 H430 V100 H370 V80 H360 V30 H370 Z M380 30 V80 H420 V30 Z" />
            <path d="M374 14 H426 V26 H436 V84 H426 V96 H374 V84 H364 V26 H374 Z M384 34 V76 H416 V34 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* Y */}
            <path d="M460 10 H480 V45 H510 V10 H530 V45 L505 75 V100 H485 V75 Z" />
            <path d="M464 14 H476 V47 H514 V14 H526 V47 L501 77 V96 H489 V77 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* GAP / SPACE */}

            {/* M */}
            <path d="M570 10 H590 V40 H610 V10 H630 V40 H650 V10 H670 V100 H650 V55 H630 V85 H610 V55 H590 V100 H570 Z" />
            <path d="M574 14 H586 V44 H614 V14 H626 V44 H654 V14 H666 V96 H654 V51 H626 V81 H614 V51 H586 V96 H574 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* C */}
            <path d="M690 10 H760 V30 H710 V80 H760 V100 H690 Z" />
            <path d="M694 14 H756 V26 H706 V84 H756 V96 H694 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />

            {/* P */}
            <path d="M780 10 H840 V30 H850 V65 H800 V100 H780 Z M800 30 V50 H830 V30 Z" />
            <path d="M784 14 H836 V26 H846 V61 H796 V96 H784 Z M804 34 V46 H826 V34 Z" fill="none" stroke="#FAF6EE" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Tagline in Pure Brand Colors */}
      <div className="mt-2 text-xs sm:text-sm font-sans text-[#E6D5B0]/90 font-medium">
        <strong className="text-[#FAF6EE] font-extrabold">Vercel</strong>
        <span className="text-[#D5380C] mx-2 font-bold">—</span>
        <span>zero server costs, environment syncing, and auto-diagnostics handled.</span>
      </div>
    </div>
  );
};
