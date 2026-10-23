import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { DeploymentGlyph } from './DeploymentGlyph';
import { PixelLogoHeader } from './PixelLogoHeader';
import { HaikeiContourBackground } from './HaikeiDecorations';
import {
  IconTerminal,
  IconBolt,
  IconChevronLeft,
  IconChevronRight,
  IconCopy,
  IconCheck,
  IconArrowRight,
  IconStethoscope,
  IconLock,
  IconGlobe,
} from './CustomIcons';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { triggerToast } from './ToastNotification';

interface HorizontalShowcaseRunwayProps {
  onOpenDocs: () => void;
  onOpenSecurity: () => void;
}

export const HorizontalShowcaseRunway: React.FC<HorizontalShowcaseRunwayProps> = ({
  onOpenDocs,
  onOpenSecurity
}) => {
  const cards = [
    {
      id: '01',
      tag: 'FRAME 01 // OVERVIEW',
      badge: 'ZERO SERVER COST',
      badgeIcon: IconBolt,
      badgeBg: 'bg-[#E7BA05]',
      badgeColor: 'text-[#000000]',
      title: 'ONE-CLICK AI DEPLOYMENT',
      desc: 'Deploy MCP connects your AI editor directly to Vercel. Code with Cursor, Claude, or VS Code and deploy safely without copy-pasting API keys or tokens.',
      actionLabel: 'COPY SETUP',
      cmd: 'npx deploymcp setup',
      colorBorder: 'border-[#E7BA05]',
      hasGlyph: true,
      specs: ['Fast Stdio Channel', 'Automatic Build Check', '0 API Keys Sent to AI']
    },
    {
      id: '02',
      tag: 'FRAME 02 // BUILD CHECK',
      badge: 'UNDER 2 SECONDS',
      badgeIcon: IconTerminal,
      badgeBg: 'bg-[#000000]',
      badgeColor: 'text-[#F6E3B8]',
      title: 'AUTOMATIC LOCAL BUILD CHECKS',
      desc: 'Tests your Next.js, Vite, or React project on your computer before uploading. Catches syntax errors, broken imports, and missing packages in under 2 seconds.',
      actionLabel: 'CHECK PROJECT',
      cmd: 'npx deploymcp check',
      colorBorder: 'border-[#F6E3B8]/30',
      pixel: true,
      specs: ['Runs on Your Device', 'Instant Syntax Checks', 'Zero Cloud Overhead']
    },
    {
      id: '03',
      tag: 'FRAME 03 // SELF-HEALING',
      badge: 'AUTO REPAIR',
      badgeIcon: IconStethoscope,
      badgeBg: 'bg-[#906342]',
      badgeColor: 'text-[#F6E3B8]',
      title: 'SELF-HEALING BUILD REPAIR',
      desc: 'When a cloud build fails, Deploy MCP reads the error logs, finds the exact problem, and gives your AI assistant clear instructions to fix the code automatically.',
      actionLabel: 'TEST REPAIR',
      cmd: 'npx deploymcp doctor',
      colorBorder: 'border-[#906342]',
      specs: ['Automatic Error Analysis', 'Clear Fix Instructions', 'One-Click Redeploy']
    },
    {
      id: '04',
      tag: 'FRAME 04 // PRIVACY & SECURITY',
      badge: '100% PRIVATE',
      badgeIcon: IconLock,
      badgeBg: 'bg-[#6B9E5A]',
      badgeColor: 'text-[#000000]',
      title: '100% PRIVATE LOCAL SECRETS',
      desc: 'Your API keys and passwords stay locked on your computer. AI models only see variable names, never your actual secret values. Completely safe.',
      actionLabel: 'VIEW SECURITY',
      actionFn: onOpenSecurity,
      colorBorder: 'border-[#6B9E5A]',
      specs: ['Kept on Your Computer', 'Direct HTTPS to Vercel', 'Zero Secret Leaks']
    },
    {
      id: '05',
      tag: 'FRAME 05 // GLOBAL EDGE',
      badge: '300+ LOCATIONS',
      badgeIcon: IconGlobe,
      badgeBg: 'bg-[#000000]',
      badgeColor: 'text-[#F6E3B8]',
      title: 'INSTANT GLOBAL DEPLOYMENTS',
      desc: 'Deploy instantly to Vercel global edge network across 300+ worldwide locations. Enjoy instant live URLs and easy 1-click rollbacks with zero downtime.',
      actionLabel: 'VIEW DOCS',
      actionFn: onOpenDocs,
      colorBorder: 'border-[#F6E3B8]/30',
      specs: ['Fast Global CDN', 'Live HTTPS Link', 'Easy 1-Click Rollback']
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeCardIndexRef = useRef(0);
  const [scrollDistance, setScrollDistance] = useState<number>(1200);
  const maxTravelRef = useRef<number>(1200);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Exact measurement of the horizontal scrollable flight distance
  const updateDimensions = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const windowWidth = window.innerWidth;
    // Exactly how much the track must translate to display all cards cleanly
    const travel = Math.max(0, track.scrollWidth - windowWidth);
    maxTravelRef.current = travel;
    setScrollDistance(travel);
  }, []);

  // Frame-rate locked scroll sync without React state updates during flight
  const updateScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = containerRef.current.offsetHeight - windowHeight;
    if (totalScrollable <= 0) return;

    const maxTravel = maxTravelRef.current;

    if (rect.top <= 0 && rect.bottom >= windowHeight) {
      // Runway is pinned: vertical scroll glides horizontally
      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      x.set(-progress * maxTravel);

      const frame = Math.min(cards.length - 1, Math.max(0, Math.round(progress * (cards.length - 1))));
      if (frame !== activeCardIndexRef.current) {
        activeCardIndexRef.current = frame;
        setActiveCardIndex(frame);
      }
    } else if (rect.top > 0) {
      x.set(0);
      if (activeCardIndexRef.current !== 0) {
        activeCardIndexRef.current = 0;
        setActiveCardIndex(0);
      }
    } else {
      x.set(-maxTravel);
      if (activeCardIndexRef.current !== cards.length - 1) {
        activeCardIndexRef.current = cards.length - 1;
        setActiveCardIndex(cards.length - 1);
      }
    }
  }, [x]);

  // Synchronous initial measurement before paint
  useLayoutEffect(() => {
    updateDimensions();
  }, [updateDimensions]);

  useEffect(() => {
    updateDimensions();
    updateScroll();

    const handleResize = () => {
      updateDimensions();
      updateScroll();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateScroll, { passive: true });

    let activeLenis = (window as any).__lenis;
    const attachLenis = (instance: any) => {
      if (instance && typeof instance.on === 'function') {
        activeLenis = instance;
        activeLenis.on('scroll', updateScroll);
      }
    };

    if (activeLenis) {
      attachLenis(activeLenis);
    } else {
      const handleLenisInit = (e: any) => attachLenis(e.detail);
      window.addEventListener('lenis-init', handleLenisInit, { once: true });
    }

    const ro = new ResizeObserver(() => {
      updateDimensions();
      updateScroll();
    });
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateScroll);
      if (activeLenis) activeLenis.off('scroll', updateScroll);
      ro.disconnect();
    };
  }, [updateDimensions, updateScroll]);

  // Translate trackpad horizontal gestures and shift+wheel into runway scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 5) {
        const rect = container.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          e.preventDefault();
          const lenis = (window as any).__lenis;
          if (lenis) {
            lenis.scrollTo(window.scrollY + e.deltaX, { immediate: true });
          } else {
            window.scrollBy({ top: e.deltaX });
          }
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToCard(Math.min(cards.length - 1, activeCardIndex + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToCard(Math.max(0, activeCardIndex - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCardIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next card
        scrollToCard(Math.min(cards.length - 1, activeCardIndex + 1));
      } else {
        // Swiped right -> prev card
        scrollToCard(Math.max(0, activeCardIndex - 1));
      }
    }
    touchStartX.current = null;
  };

  const handleCopy = (cmd: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    triggerToast(`Command copied: ${cmd}`, 'success');
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const scrollToCard = (index: number) => {
    playClickSound();
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalScrollable = maxTravelRef.current;
    const targetY = containerTop + (totalScrollable / (cards.length - 1)) * index;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 0.5 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="showcase-runway"
      ref={containerRef}
      style={{
        height: scrollDistance > 0 ? `calc(100vh + ${scrollDistance}px)` : '100vh'
      }}
      className="relative bg-[#000000] border-t border-[#F6E3B8]/15"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-4 sm:py-6">
        
        {/* Subtle Background Contours */}
        <HaikeiContourBackground strokeColor="rgba(246, 227, 184, 0.04)" />

        {/* Section Top Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-20 pt-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] border border-[#F6E3B8]/20 text-xs font-mono font-bold text-[#F6E3B8] mb-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E7BA05] animate-pulse" />
              <span>PINNED RUNWAY // 5 DEPLOYMENT PHASES</span>
            </div>
            <h2 className="font-syne font-black text-2xl sm:text-4xl text-[#F6E3B8] uppercase tracking-tight">
              AUTONOMOUS PIPELINE RUNWAY.
            </h2>
            <p className="text-xs sm:text-sm text-[#F6E3B8]/75 font-sans">
              5 sovereign deployment phases — code in your AI editor and deploy instantly to Vercel.
            </p>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-xs bg-[#000000] px-3.5 py-1.5 rounded-full border border-[#F6E3B8]/20 text-[#F6E3B8]">
              <span className="text-[#E7BA05] font-bold">FRAME {String(activeCardIndex + 1).padStart(2, '0')}</span>
              <span className="text-[#F6E3B8]/30">/</span>
              <span className="text-[#F6E3B8]/60">05</span>
            </div>

            {/* Quick Step Indicator Pills */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#000000] p-1 rounded-full border border-[#F6E3B8]/20">
              {[0, 1, 2, 3, 4].map(idx => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCardIndex === idx
                      ? 'w-6 bg-[#E7BA05]'
                      : 'w-2 bg-[#F6E3B8]/20 hover:bg-[#F6E3B8]/50'
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
                className="p-2 rounded-full bg-[#000000] border border-[#F6E3B8]/20 text-[#F6E3B8] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#E7BA05] transition-colors cursor-pointer"
                title="Previous card"
              >
                <IconChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(cards.length - 1, activeCardIndex + 1))}
                disabled={activeCardIndex === cards.length - 1}
                className="p-2 rounded-full bg-[#000000] border border-[#F6E3B8]/20 text-[#F6E3B8] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#E7BA05] transition-colors cursor-pointer"
                title="Next card"
              >
                <IconChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full overflow-hidden flex-1 flex items-center my-auto py-2 z-10 touch-pan-y"
        >
          <motion.div
            ref={trackRef}
            style={{ x, willChange: 'transform' }}
            className="flex gap-5 sm:gap-6 items-stretch px-4 sm:px-6 lg:px-8 xl:px-[calc((100vw-80rem)/2+2rem)] w-max"
          >
            {cards.map((card, idx) => {
              const BadgeIconComp = card.badgeIcon;
              const isActive = activeCardIndex === idx;

              return (
                <div
                  key={card.id}
                  className={`w-[85vw] sm:w-[480px] lg:w-[520px] xl:w-[540px] h-[480px] sm:h-[510px] lg:h-[530px] max-h-[calc(100vh-170px)] shrink-0 rounded-3xl bg-[#000000] border-2 ${card.colorBorder} p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300 ${
                    isActive ? 'scale-100 ring-1 ring-[#F6E3B8]/20 shadow-[0_0_30px_rgba(231,186,5,0.12)]' : 'scale-[0.98] opacity-85'
                  }`}
                >
                  {/* Subtle Background Watermark */}
                  <div className="absolute right-4 -bottom-6 font-black font-syne text-[110px] text-[#F6E3B8]/[0.03] select-none pointer-events-none leading-none">
                    {card.id}
                  </div>

                  <div>
                    {/* Top Metadata Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F6E3B8]/15">
                      <span className="font-mono text-xs font-bold text-[#F6E3B8]/70">
                        {card.tag}
                      </span>
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold ${card.badgeBg} ${card.badgeColor} border border-[#F6E3B8]/20`}>
                        <BadgeIconComp className="w-3.5 h-3.5" />
                        <span>{card.badge}</span>
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="font-syne font-black text-xl sm:text-2xl text-[#F6E3B8] mb-2.5 uppercase tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[#F6E3B8]/80 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                      {card.desc}
                    </p>

                    {/* Frame 02 Pixel Logo Banner */}
                    {card.pixel && (
                      <div className="mb-3 p-3 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20">
                        <PixelLogoHeader showTerminalBar={false} />
                      </div>
                    )}

                    {/* Key Technical Specifications Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {card.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-[#000000] border border-[#F6E3B8]/20 text-[10px] font-mono text-[#F6E3B8]/80 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E7BA05] shrink-0" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Action Bar */}
                  <div className="pt-4 border-t border-[#F6E3B8]/15 flex items-center justify-between gap-3 font-mono text-xs mt-2">
                    {card.cmd ? (
                      <div className="flex items-center gap-2 bg-[#000000] px-3.5 py-2.5 rounded-xl border border-[#F6E3B8]/20 text-[#F6E3B8] overflow-hidden">
                        <span className="text-[#E7BA05] font-bold select-none">$</span>
                        <span className="truncate text-xs">{card.cmd}</span>
                        <button
                          onClick={() => handleCopy(card.cmd!)}
                          className="p-1 hover:text-[#E7BA05] ml-1 text-[#F6E3B8]/50 cursor-pointer"
                          title="Copy command"
                        >
                          {copiedCmd === card.cmd ? (
                            <IconCheck className="w-3.5 h-3.5 text-[#6B9E5A]" />
                          ) : (
                            <IconCopy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-[#F6E3B8]/50 text-xs">
                        <span className="w-2 h-2 rounded-full bg-[#6B9E5A]" />
                        <span>ZERO-TRUST ENCLAVE</span>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        playClickSound();
                        if (card.actionFn) card.actionFn();
                        else if (card.cmd) handleCopy(card.cmd);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#E7BA05] text-[#000000] hover:bg-[#F6E3B8] hover:text-[#000000] transition-all font-sans font-extrabold text-xs uppercase tracking-wide flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <span>{card.actionLabel}</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Runway Status */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-[11px] font-mono text-[#F6E3B8]/40 z-20 pb-2">
          <span>FRAME 01 - 05</span>
          <span className="text-right">SCROLL VERTICALLY TO ADVANCE RUNWAY & CONTINUE ↓</span>
        </div>

      </div>
    </section>
  );
};
