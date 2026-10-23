import React, { useState } from 'react';
import { IconCopy, IconCheck } from './CustomIcons';
import { playSuccessSound } from '../utils/soundEffects';
import { triggerToast } from './ToastNotification';

interface PixelLogoHeaderProps {
  className?: string;
  showTerminalBar?: boolean;
}

export const PixelLogoHeader: React.FC<PixelLogoHeaderProps> = ({
  className = '',
  showTerminalBar = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    playSuccessSound();
    navigator.clipboard.writeText('npx deploymcp setup');
    setCopied(true);
    triggerToast('Copied: npx deploymcp setup', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative select-none font-mono ${className}`}>
      {showTerminalBar && (
        <div className="flex items-center justify-between text-xs font-mono text-[#F6E3B8]/80 pb-3 border-b border-[#F6E3B8]/15 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full border border-[#E7BA05] bg-transparent" />
            <span className="text-[#F6E3B8]/50">PS D:\deploy mcp&gt;</span>
            <span className="text-[#E7BA05] font-bold">npx deploymcp setup</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6B9E5A]/15 border border-[#6B9E5A]/40 text-[#6B9E5A] text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B9E5A] animate-pulse" />
              <span>DEPLOY MCP PROTOCOL</span>
            </div>
            <button
              onClick={handleCopyCmd}
              className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#F6E3B8]/20 hover:border-[#E7BA05] text-[10px] text-[#F6E3B8]/70 hover:text-[#E7BA05] transition-colors cursor-pointer"
              title="Copy setup command"
            >
              {copied ? <IconCheck className="w-3 h-3 text-[#6B9E5A]" /> : <IconCopy className="w-3 h-3" />}
              <span>COPY</span>
            </button>
          </div>
        </div>
      )}

      {/* RAZOR-SHARP AUTHENTIC ANSI TERMINAL BANNER */}
      <div className="overflow-x-auto py-2 bg-[#050505]/60 rounded-xl px-2 sm:px-4 border border-[#F6E3B8]/10 my-1">
        <pre className="font-mono font-black text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12.5px] lg:text-[13.5px] text-[#E7BA05] leading-[1.12] tracking-tighter select-none whitespace-pre drop-shadow-[0_0_14px_rgba(231,186,5,0.45)] text-center sm:text-left">
{`  ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗    ███╗   ███╗  ██████╗  ██████╗ 
  ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝    ████╗ ████║ ██╔════╝  ██╔══██╗
  ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝     ██╔████╔██║ ██║       ██████╔╝
  ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝      ██║╚██╔╝██║ ██║       ██╔═══╝ 
  ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║       ██║ ╚═╝ ██║ ╚██████╗  ██║     
  ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═════╝  ╚═╝     `}
        </pre>
      </div>

      {/* Tagline in Pure Brand Colors with Leaf Verification */}
      <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-[#F6E3B8]/90">
        <div className="flex items-center gap-1.5 font-medium">
          <strong className="text-[#F6E3B8] font-extrabold font-mono">Vercel</strong>
          <span className="text-[#E7BA05] font-bold">—</span>
          <span>zero server costs, environment syncing, and auto-diagnostics handled.</span>
        </div>
        <div className="inline-flex items-center gap-1 font-mono text-[10px] text-[#6B9E5A] font-bold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B9E5A]" />
          <span>[OK] ZERO TOKEN LEAKS</span>
        </div>
      </div>
    </div>
  );
};
