import React from 'react';
import { TerminalSimulator } from '../components/TerminalSimulator';
import { PixelLogoHeader } from '../components/PixelLogoHeader';
import { HaikeiContourBackground } from '../components/HaikeiDecorations';
import { FadeIn } from '../components/motion/MotionPrimitives';
import { VercelLogo } from '../components/SvgLogos';
import { Terminal, Cpu, Check, Copy, ArrowLeft, ArrowRight } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

interface TerminalPageProps {
  onBackToHome: () => void;
}

export const TerminalPage: React.FC<TerminalPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#101010] text-[#E6D5BD] pt-8 pb-20 relative overflow-hidden">
      <HaikeiContourBackground strokeColor="rgba(0, 240, 255, 0.05)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Breadcrumb / Navigation */}
        <FadeIn direction="down">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E6D5BD]/15 text-xs font-mono">
            <button
              onClick={() => { playClickSound(); onBackToHome(); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] border border-[#E6D5BD]/20 hover:border-[#D5380C] text-[#FAF6EE] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OVERVIEW</span>
            </button>
            <div className="flex items-center gap-2 text-[#D5380C]">
              <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
              <span>TERMINAL STUDIO // LIVE MCP REPL</span>
            </div>
          </div>
        </FadeIn>

        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] text-[#FAF6EE] text-xs font-bold border border-white/10">
              <Terminal className="w-3.5 h-3.5 text-[#D5380C]" />
              <span className="font-mono text-[11px] uppercase tracking-wider">LIVE EXECUTION ENVIRONMENT</span>
            </div>
            <h1 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] uppercase tracking-tight">
              INTERACTIVE TERMINAL CONSOLE.
            </h1>
            <p className="text-sm sm:text-base text-[#E6D5BD]/80 font-sans">
              Test pre-flight compilations, secret isolation, and live deployment generation across Next.js 14, React Vite, Astro, and HTML.
            </p>
          </div>
        </FadeIn>

        {/* Pixel Art Header */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-10 max-w-3xl mx-auto p-5 rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/20 shadow-[6px_6px_0px_#101010]">
            <PixelLogoHeader />
          </div>
        </FadeIn>

        {/* Terminal Simulator Component */}
        <FadeIn direction="up" delay={0.15}>
          <TerminalSimulator />
        </FadeIn>

      </div>
    </div>
  );
};
