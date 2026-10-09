import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StarburstIcon } from './StarburstIcon';
import { PixelLogoHeader } from './PixelLogoHeader';
import { HaikeiContourBackground } from './HaikeiDecorations';
import { Terminal, Zap, ChevronLeft, ChevronRight, Copy, Check, ArrowRight, Stethoscope, Lock, Globe, Sparkles } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

interface HorizontalShowcaseRunwayProps {
  onOpenDocs: () => void;
  onOpenSecurity: () => void;
}

export const HorizontalShowcaseRunway: React.FC<HorizontalShowcaseRunwayProps> = ({
  onOpenDocs,
  onOpenSecurity
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState<number>(1500);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Dynamic exact measurement: 0ms lag, zero dead space, responsive to dynamic layout
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Exact horizontal travel to bring last card 05 right into view with zero trailing dead space
        const distance = Math.max(0, trackWidth - windowWidth + 64);
        setMaxScroll(distance);
      }
    };

    calculateDistance();
    const ro = new ResizeObserver(calculateDistance);
    if (trackRef.current) {
      ro.observe(trackRef.current);
    }
    window.addEventListener('resize', calculateDistance);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', calculateDistance);
    };
  }, []);

  // Native 1:1 scroll driver: ultra-responsive 1000Hz GPU transform with ZERO rubber-banding lag
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Direct 1:1 pixel translation: perfectly aligns Card 01 to Card 05
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  // Update card indicator cleanly
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.min(4, Math.max(0, Math.round(v * 4)));
      setActiveCardIndex(idx);
    });
  }, [scrollYProgress]);

  const handleCopy = (cmd: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const scrollToCard = (index: number) => {
    playClickSound();
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const step = maxScroll / 4;
    const targetY = containerTop + step * index;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const cards = [
    {
      id: '01',
      tag: 'FRAME 01 // ARCHITECTURE',
      badge: 'ZERO SERVER COST',
      badgeIcon: Zap,
      badgeBg: 'bg-[#D5380C]',
      badgeColor: 'text-[#FAF6EE]',
      title: 'SOVEREIGN AUTONOMOUS RUNTIME',
      desc: 'Deploy MCP bridges your local IDE directly to Vercel. Code with Cursor, Claude 3.7, or Antigravity and deploy with zero credential leakage and zero cloud management overhead.',
      actionLabel: 'COPY SETUP',
      cmd: 'npx deploymcp setup',
      colorBorder: 'border-[#D5380C]',
      starburst: true,
      specs: ['Local stdio Transport', 'Deterministic AST Analysis', '0 API Keys to LLM']
    },
    {
      id: '02',
      tag: 'FRAME 02 // PRE-FLIGHT COMPILER',
      badge: 'SUB-2S DRY RUNS',
      badgeIcon: Terminal,
      badgeBg: 'bg-[#101010]',
      badgeColor: 'text-[#FAF6EE]',
      title: 'DETERMINISTIC PRE-FLIGHT VERIFICATION',
      desc: 'Local pre-flight dry runs test Next.js 14 App Router, Vite React, and Astro codebases before any cloud transmission. Catches syntax bugs, type errors, and missing dependencies in < 2 seconds.',
      actionLabel: 'RUN PRE-FLIGHT',
      cmd: 'npx deploymcp check',
      colorBorder: 'border-[#FAF6EE]/30',
      pixel: true,
      specs: ['Webpack / Turbopack Emulation', 'TypeScript AST Checker', 'Zero Cloud Overhead']
    },
    {
      id: '03',
      tag: 'FRAME 03 // SELF-HEALING',
      badge: 'AUTO REPAIR SYSTEM',
      badgeIcon: Stethoscope,
      badgeBg: 'bg-[#D5380C]',
      badgeColor: 'text-[#FAF6EE]',
      title: 'AUTONOMOUS LOG DIAGNOSTICS & FIXES',
      desc: 'When remote builds fail, Deploy MCP intercepts build logs, isolates failing stack traces, categorizes root causes, and feeds actionable diff patches directly back into your AI pair programmer.',
      actionLabel: 'INSPECT DOCTOR',
      cmd: 'npx deploymcp doctor',
      colorBorder: 'border-[#D5380C]',
      specs: ['Automated Error Parsing', 'AST Diff Formulation', 'Autonomous Fix Execution']
    },
    {
      id: '04',
      tag: 'FRAME 04 // ZERO-TRUST ENCLAVE',
      badge: 'ENCLAVE ISOLATION',
      badgeIcon: Lock,
      badgeBg: 'bg-[#101010]',
      badgeColor: 'text-[#F1B333]',
      title: 'HARDWARE-ENCLOSED SECRET FENCE',
      desc: 'Environment variables and auth tokens remain sealed inside local machine memory. AI models only inspect variable keys—never plaintext values. Eliminates LLM credential exfiltration entirely.',
      actionLabel: 'VIEW SECURITY MODEL',
      actionFn: onOpenSecurity,
      colorBorder: 'border-[#F1B333]',
      specs: ['Local Memory Storage', 'Redacted Secret Signatures', 'TLS 1.3 Transport']
    },
    {
      id: '05',
      tag: 'FRAME 05 // GLOBAL EDGE',
      badge: '300+ GLOBAL POPS',
      badgeIcon: Globe,
      badgeBg: 'bg-[#101010]',
      badgeColor: 'text-[#FAF6EE]',
      title: 'SUB-SECOND ANYCAST DISTRIBUTION',
      desc: 'Deploy instantly to Vercel global edge regions (sfo1, iad1, fra1, cdg1, hnd1). Atomic rollbacks ensure 100% production uptime even during experimental AI autonomous deployments.',
      actionLabel: 'EXPLORE DOCS',
      actionFn: onOpenDocs,
      colorBorder: 'border-[#FAF6EE]/30',
      specs: ['0ms Cold Start', 'Anycast Edge DNS', 'Instant 1-Click Rollback']
    },
  ];

  return (
    <section
      id="showcase-runway"
      ref={containerRef}
      style={{
        // Height equals viewport height + exact scroll distance needed
        // The instant the last card completes, page smoothly continues downward with 0 dead space
        height: `calc(100vh + ${maxScroll}px)`
      }}
      className="relative bg-[#101010] border-t border-white/10"
    >
      {/* Sticky Viewport Container: Perfectly Centered in Viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-4 sm:py-6">
        
        {/* Subtle Background Contours */}
        <HaikeiContourBackground strokeColor="rgba(230, 213, 176, 0.04)" />

        {/* Section Top Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-20 pt-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-white/10 text-xs font-mono font-bold text-[#FAF6EE] mb-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
              <span>PINNED RUNWAY // SCROLL TO ADVANCE</span>
            </div>
            <h2 className="font-syne font-black text-2xl sm:text-4xl text-[#FAF6EE] uppercase tracking-tight">
              SCROLL THROUGH THE RUNWAY.
            </h2>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/75 font-sans">
              Vertical scroll drives this showcase horizontally until complete.
            </p>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-xs bg-[#141414] px-3.5 py-1.5 rounded-full border border-white/10 text-[#FAF6EE]">
              <span className="text-[#D5380C] font-bold">FRAME {String(activeCardIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">05</span>
            </div>

            {/* Quick Step Indicator Pills */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#141414] p-1 rounded-full border border-white/10">
              {[0, 1, 2, 3, 4].map(idx => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCardIndex === idx
                      ? 'w-6 bg-[#D5380C]'
                      : 'w-2 bg-white/20 hover:bg-white/50'
                  }`}
                  title={`Jump to Card 0${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToCard(Math.max(0, activeCardIndex - 1))}
                disabled={activeCardIndex === 0}
                className="p-2 rounded-full bg-[#161616] border border-white/10 text-[#FAF6EE] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#D5380C] transition-colors cursor-pointer"
                title="Previous card"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(cards.length - 1, activeCardIndex + 1))}
                disabled={activeCardIndex === cards.length - 1}
                className="p-2 rounded-full bg-[#161616] border border-white/10 text-[#FAF6EE] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#D5380C] transition-colors cursor-pointer"
                title="Next card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track: Centered with Substantial Height (NO Empty Space Below!) */}
        <div className="w-full overflow-hidden flex-1 flex items-center my-auto py-2 z-10">
          <motion.div
            ref={trackRef}
            style={{ x, willChange: 'transform' }}
            className="flex gap-6 items-stretch pl-4 sm:pl-12 pr-12 w-max"
          >
            {cards.map((card, idx) => {
              const BadgeIconComp = card.badgeIcon;
              const isActive = activeCardIndex === idx;

              return (
                <div
                  key={card.id}
                  className={`w-[85vw] sm:w-[500px] lg:w-[540px] h-[500px] sm:h-[530px] shrink-0 rounded-3xl bg-[#141414] border-2 ${card.colorBorder} p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300 ${
                    isActive ? 'scale-100 ring-1 ring-white/15' : 'scale-[0.98] opacity-90'
                  }`}
                >
                  {/* Subtle Background Watermark */}
                  <div className="absolute right-4 -bottom-6 font-black font-syne text-[110px] text-white/[0.03] select-none pointer-events-none leading-none">
                    {card.id}
                  </div>

                  <div>
                    {/* Top Metadata Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <span className="font-mono text-xs font-bold text-[#E6D5B0]/70">
                        {card.tag}
                      </span>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold ${card.badgeBg} ${card.badgeColor} border border-white/20`}>
                        <BadgeIconComp className="w-3.5 h-3.5" />
                        <span>{card.badge}</span>
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="font-syne font-black text-xl sm:text-2xl text-[#FAF6EE] mb-2.5 uppercase tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[#E6D5BD]/80 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                      {card.desc}
                    </p>

                    {/* Frame 02 Pixel Logo Banner */}
                    {card.pixel && (
                      <div className="mb-3 p-3 rounded-2xl bg-[#101010] border border-white/10">
                        <PixelLogoHeader showTerminalBar={false} />
                      </div>
                    )}

                    {/* Key Technical Specifications Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {card.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-[#181818] border border-white/10 text-[10px] font-mono text-[#E6D5B0]/80 flex items-center gap-1"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-[#D5380C]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Action Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 font-mono text-xs mt-2">
                    {card.cmd ? (
                      <div className="flex items-center gap-2 bg-[#181818] px-3.5 py-2.5 rounded-xl border border-white/10 text-[#FAF6EE] overflow-hidden">
                        <span className="text-[#D5380C] font-bold select-none">$</span>
                        <span className="truncate text-xs">{card.cmd}</span>
                        <button
                          onClick={() => handleCopy(card.cmd!)}
                          className="p-1 hover:text-[#D5380C] ml-1 text-white/50 cursor-pointer"
                          title="Copy command"
                        >
                          {copiedCmd === card.cmd ? (
                            <Check className="w-3.5 h-3.5 text-[#D5380C]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-white/50 text-xs">
                        <span className="w-2 h-2 rounded-full bg-[#D5380C]" />
                        <span>ZERO-TRUST ENCLAVE</span>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        playClickSound();
                        if (card.actionFn) card.actionFn();
                        else if (card.cmd) handleCopy(card.cmd);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#FAF6EE] text-[#101010] hover:bg-[#D5380C] hover:text-[#FAF6EE] transition-all font-syne font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <span>{card.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Runway Status & Navigation Hint */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-[11px] font-mono text-white/40 z-20 pb-2">
          <span>FRAME 01 - 05</span>
          <span className="text-right">SCROLL VERTICALLY TO ADVANCE RUNWAY & CONTINUE ↓</span>
        </div>

      </div>
    </section>
  );
};
