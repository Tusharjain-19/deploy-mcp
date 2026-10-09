import React, { useState } from 'react';
import { PixelLogoHeader } from '../PixelLogoHeader';
import { StarburstIcon } from '../StarburstIcon';
import { Copy, Check, ArrowRight, ShieldCheck, Zap, Terminal, Sparkles, Github, Globe } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../../utils/soundEffects';

interface Frame01Props {
  onNextFrame: () => void;
  onOpenDocs: () => void;
}

export const Frame01HeroPoster: React.FC<Frame01Props> = ({ onNextFrame, onOpenDocs }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    playSuccessSound();
    navigator.clipboard.writeText('npx deploymcp setup');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-y-auto overflow-x-hidden bg-[#101010] text-[#E6D5B0]">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* TOP BAR / EDITORIAL HEADER */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#E6D5B0]/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#D5380C] text-[#FAF6EE] border-2 border-[#FAF6EE] flex items-center justify-center font-black font-syne text-lg shadow-[3px_3px_0px_#101010]">
            D
          </div>
          <div>
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">DEPLOY MCP</span>
            <span className="text-[10px] font-mono text-[#D5380C] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#161616] border border-[#D5380C]/40">
              v1.0.0 RUNTIME
            </span>
          </div>
        </div>

        {/* Floating Angled Brutalist Badges (Inspired by allthingswtf.com) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="brutal-badge brutal-badge-orange rotate-[4deg] text-[11px]">
            ⚡ ZERO SERVER COSTS
          </div>
          <div className="brutal-badge bg-[#E6D5B0] text-[#101010] -rotate-[3deg] text-[11px]">
            🛡️ ZERO-LEAKAGE
          </div>
          <div className="brutal-badge bg-[#101010] text-[#F1B333] border-[#F1B333] rotate-[2deg] text-[11px] shadow-[4px_4px_0px_#F1B333]">
            ✦ VERCEL NATIVE
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Tusharjain-19/deploy-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#E6D5B0]/30 hover:border-[#D5380C] text-xs font-mono font-bold text-[#FAF6EE] transition-all"
            onClick={playClickSound}
          >
            <Github className="w-3.5 h-3.5 text-[#FAF6EE]" />
            <span>GITHUB</span>
          </a>
          <button
            onClick={() => { playClickSound(); onOpenDocs(); }}
            className="px-3.5 py-1.5 rounded-full bg-[#D5380C] text-[#FAF6EE] border border-[#FAF6EE]/40 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#B82D09] transition-all"
          >
            DOCS
          </button>
        </div>
      </div>

      {/* MAIN POSTER CANVAS (Directly inspired by Image 3 "THE CREATIVE JOURNAL" & Brand Banner) */}
      <div className="relative z-10 my-auto py-6 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl bg-[#D5380C] border-4 border-[#FAF6EE] p-6 sm:p-10 lg:p-12 text-left shadow-[12px_12px_0px_#101010] overflow-hidden">
          
          {/* Retro Starburst Decal from Image 3 */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 pointer-events-none">
            <StarburstIcon
              points={8}
              fill="#101010"
              stroke="#FAF6EE"
              strokeWidth={2}
              className="w-16 h-16 sm:w-24 sm:h-24 animate-spin-slow drop-shadow-xl"
            />
          </div>

          {/* Background Typography Watermark */}
          <div className="absolute -left-8 -bottom-14 font-black font-syne text-[140px] sm:text-[220px] text-[#9E2505] opacity-35 select-none pointer-events-none tracking-tighter leading-none">
            MCP
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Big Editorial Retro Poster Typography */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101010] text-[#FAF6EE] font-mono text-xs font-black uppercase tracking-widest border border-[#FAF6EE]/30">
                <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-ping" />
                <span>GOVERNED AUTONOMOUS RUNTIME</span>
              </div>

              {/* Bold Groovy Editorial Title */}
              <h1 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl text-[#FAF6EE] tracking-tight leading-[0.98] uppercase">
                DEPLOY <br />
                <span className="text-[#101010] drop-shadow-[2px_2px_0px_#FAF6EE]">WITHOUT</span> LIMITS.
              </h1>

              <p className="text-[#FAF6EE] text-sm sm:text-base lg:text-lg font-medium opacity-95 max-w-xl leading-relaxed">
                Empower <strong className="text-[#101010] bg-[#FAF6EE] px-1.5 py-0.5 rounded font-mono font-bold">Cursor</strong>,{' '}
                <strong className="text-[#101010] bg-[#FAF6EE] px-1.5 py-0.5 rounded font-mono font-bold">Claude</strong>, and{' '}
                <strong className="text-[#101010] bg-[#FAF6EE] px-1.5 py-0.5 rounded font-mono font-bold">Antigravity</strong> with 20 autonomous tools to build-check, sync secrets, and ship to Vercel with zero-trust security.
              </p>

              {/* Angled Badges in Mobile / Small Screens */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-[#101010] text-[#FAF6EE] px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-[#FAF6EE]/30">
                  ✓ 0 Server Costs
                </span>
                <span className="bg-[#101010] text-[#FAF6EE] px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-[#FAF6EE]/30">
                  ✓ TLS Secret Isolation
                </span>
                <span className="bg-[#101010] text-[#FAF6EE] px-3 py-1 text-xs font-mono font-bold uppercase rounded border border-[#FAF6EE]/30">
                  ✓ Self-Healing Fixes
                </span>
              </div>
            </div>

            {/* Right Column: Quick Start Action Box with Terminal Art & Copy Button */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-[#101010] rounded-2xl border-2 border-[#FAF6EE] p-5 sm:p-6 shadow-[8px_8px_0px_#101010] space-y-4">
                
                {/* Image 1 Terminal Badge Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E6D5B0]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#D5380C]" />
                    <span className="w-3 h-3 rounded-full bg-[#F1B333]" />
                    <span className="w-3 h-3 rounded-full bg-[#FAF6EE]" />
                    <span className="font-mono text-xs text-[#E6D5B0] font-bold ml-1">TERMINAL QUICK START</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FAF6EE] bg-[#161616] px-2 py-0.5 rounded border border-[#FAF6EE]/30">
                    ZERO CONFIG
                  </span>
                </div>

                {/* Command Box */}
                <div className="bg-[#181818] rounded-xl p-4 border border-[#E6D5B0]/20 font-mono text-xs sm:text-sm text-[#FAF6EE] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-2 overflow-x-auto">
                    <span className="text-[#D5380C] font-black select-none">$</span>
                    <span className="font-bold tracking-wide">npx deploymcp setup</span>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-syne font-black text-xs uppercase tracking-wider transition-all duration-200 border-2 border-[#FAF6EE] shadow-[4px_4px_0px_#FAF6EE] active:translate-y-0.5 active:shadow-[2px_2px_0px_#FAF6EE] flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#FAF6EE]" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY SETUP COMMAND</span>
                    </>
                  )}
                </button>

                {/* Terminal Subtitle from Image 1 */}
                <p className="text-[11px] font-mono text-[#E6D5B0]/70 text-center pt-1 leading-snug">
                  Vercel – zero server costs, environment syncing, and auto-diagnostics handled.
                </p>
              </div>

              {/* Next Frame Trigger Pill */}
              <button
                onClick={() => { playClickSound(); onNextFrame(); }}
                className="w-full py-3 px-5 rounded-2xl bg-[#FAF6EE] text-[#101010] hover:bg-white font-syne font-black text-xs uppercase tracking-wider transition-all flex items-center justify-between shadow-[6px_6px_0px_#101010] group"
              >
                <span>ENTER TERMINAL SIMULATOR</span>
                <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span className="font-mono text-[10px] text-[#D5380C]">FRAME 02</span>
                  <ArrowRight className="w-4 h-4 text-[#D5380C]" />
                </div>
              </button>

            </div>

          </div>

          {/* Bottom Bar in Poster */}
          <div className="mt-8 pt-4 border-t-2 border-[#FAF6EE]/30 flex flex-wrap items-center justify-between text-xs font-mono text-[#FAF6EE] gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF6EE]" />
              <span className="font-bold">100% Free & Open Source MIT</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] opacity-90">
              <span>Next.js 14+</span>
              <span>•</span>
              <span>React Vite</span>
              <span>•</span>
              <span>Astro</span>
              <span>•</span>
              <span>Custom Scripts</span>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER BAR OF FRAME 01 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <div className="flex items-center gap-2">
          <span className="text-[#D5380C]">●</span>
          <span>FRAME 01 // THE MANIFESTO</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span>SCROLL RIGHT OR USE ARROW KEYS →</span>
        </div>
      </div>
    </div>
  );
};
