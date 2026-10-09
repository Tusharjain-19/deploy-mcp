import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Frame01HeroPoster } from './frames/Frame01HeroPoster';
import { Frame02Terminal } from './frames/Frame02Terminal';
import { Frame03Protocol } from './frames/Frame03Protocol';
import { Frame04SelfHealing } from './frames/Frame04SelfHealing';
import { Frame05IdeWizard } from './frames/Frame05IdeWizard';
import { Frame06ToolMatrix } from './frames/Frame06ToolMatrix';
import { Frame07FaqDispatch } from './frames/Frame07FaqDispatch';
import { InteractiveStickerBoard } from './InteractiveStickerBoard';
import { playClickSound, playSlideSound, toggleSound, isSoundEnabled } from '../utils/soundEffects';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, LayoutGrid, Columns, Sparkles } from 'lucide-react';

interface HorizontalFrameEngineProps {
  onOpenDocs: () => void;
  onOpenSecurity: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const FRAME_TITLES = [
  '01 POSTER',
  '02 TERMINAL',
  '03 PROTOCOL',
  '04 AUTO-FIX',
  '05 IDE SETUP',
  '06 TOOL MATRIX',
  '07 DISPATCH'
];

export const HorizontalFrameEngine: React.FC<HorizontalFrameEngineProps> = ({
  onOpenDocs,
  onOpenSecurity,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [viewMode, setViewMode] = useState<'horizontal' | 'vertical'>('horizontal');
  const totalFrames = FRAME_TITLES.length;

  const lastWheelTime = useRef<number>(0);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const goToFrame = useCallback((index: number) => {
    if (index >= 0 && index < totalFrames) {
      playSlideSound();
      setActiveFrame(index);
    }
  }, [totalFrames]);

  const nextFrame = useCallback(() => {
    if (activeFrame < totalFrames - 1) {
      goToFrame(activeFrame + 1);
    }
  }, [activeFrame, totalFrames, goToFrame]);

  const prevFrame = useCallback(() => {
    if (activeFrame > 0) {
      goToFrame(activeFrame - 1);
    }
  }, [activeFrame, goToFrame]);

  // Keyboard navigation (Arrow keys, Home, End)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextFrame();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevFrame();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToFrame(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToFrame(totalFrames - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextFrame, prevFrame, goToFrame, totalFrames]);

  // Mouse wheel listener in horizontal mode
  useEffect(() => {
    if (viewMode !== 'horizontal') return;

    const handleWheel = (e: WheelEvent) => {
      // Check if target is inside an element that has vertical scroll space
      const target = e.target as HTMLElement;
      const scrollableParent = target?.closest('.overflow-y-auto, .overflow-y-scroll');
      if (scrollableParent) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;
        const canScrollDown = scrollTop + clientHeight < scrollHeight - 5;
        const canScrollUp = scrollTop > 5;

        if ((isScrollingDown && canScrollDown) || (isScrollingUp && canScrollUp)) {
          // Let inner container scroll normally
          return;
        }
      }

      const now = Date.now();
      // Throttle wheel triggers to prevent fast spinning
      if (now - lastWheelTime.current < 550) {
        return;
      }

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 28) {
        lastWheelTime.current = now;
        if (delta > 0) {
          nextFrame();
        } else {
          prevFrame();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [viewMode, nextFrame, prevFrame]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (viewMode !== 'horizontal') return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger if horizontal swipe is prominent
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextFrame();
      } else {
        prevFrame();
      }
    }
  };

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-[#101010] text-[#E6D5B0] overflow-hidden select-text"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tactile Film Grain Overlay */}
      <div className="grain-layer" />

      {/* Floating Interactive Stamps Board */}
      <InteractiveStickerBoard />

      {/* VIEW MODE CONTAINER */}
      {viewMode === 'horizontal' ? (
        /* HORIZONTAL FRAME-BY-FRAME TRACK */
        <div className="w-full h-screen overflow-hidden relative">
          <div
            className="flex flex-row h-full w-[700vw] will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${activeFrame * 100}vw)` }}
          >
            {/* FRAME 01: HERO POSTER */}
            <div className="frame-slide">
              <Frame01HeroPoster
                onNextFrame={nextFrame}
                onOpenDocs={onOpenDocs}
              />
            </div>

            {/* FRAME 02: TERMINAL CONSOLE */}
            <div className="frame-slide">
              <Frame02Terminal
                onNextFrame={nextFrame}
                onPrevFrame={prevFrame}
              />
            </div>

            {/* FRAME 03: ARCHITECTURE PROTOCOL */}
            <div className="frame-slide">
              <Frame03Protocol
                onNextFrame={nextFrame}
                onPrevFrame={prevFrame}
              />
            </div>

            {/* FRAME 04: SELF-HEALING ENGINE */}
            <div className="frame-slide">
              <Frame04SelfHealing
                onNextFrame={nextFrame}
                onPrevFrame={prevFrame}
              />
            </div>

            {/* FRAME 05: IDE & AGENT CONFIG WIZARD */}
            <div className="frame-slide">
              <Frame05IdeWizard
                onNextFrame={nextFrame}
                onPrevFrame={prevFrame}
              />
            </div>

            {/* FRAME 06: MCP TOOL MATRIX */}
            <div className="frame-slide">
              <Frame06ToolMatrix
                onNextFrame={nextFrame}
                onPrevFrame={prevFrame}
              />
            </div>

            {/* FRAME 07: CLOSING POSTER & FAQ */}
            <div className="frame-slide">
              <Frame07FaqDispatch
                onPrevFrame={prevFrame}
                onGoToStart={() => goToFrame(0)}
                onOpenDocs={onOpenDocs}
                onOpenSecurity={onOpenSecurity}
                onOpenPrivacy={onOpenPrivacy}
                onOpenTerms={onOpenTerms}
              />
            </div>
          </div>
        </div>
      ) : (
        /* CLASSIC VERTICAL STACK MODE (Optional Fallback) */
        <div className="w-full min-h-screen space-y-16 pb-24">
          <Frame01HeroPoster onNextFrame={() => {}} onOpenDocs={onOpenDocs} />
          <Frame02Terminal onNextFrame={() => {}} onPrevFrame={() => {}} />
          <Frame03Protocol onNextFrame={() => {}} onPrevFrame={() => {}} />
          <Frame04SelfHealing onNextFrame={() => {}} onPrevFrame={() => {}} />
          <Frame05IdeWizard onNextFrame={() => {}} onPrevFrame={() => {}} />
          <Frame06ToolMatrix onNextFrame={() => {}} onPrevFrame={() => {}} />
          <Frame07FaqDispatch
            onPrevFrame={() => {}}
            onGoToStart={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onOpenDocs={onOpenDocs}
            onOpenSecurity={onOpenSecurity}
            onOpenPrivacy={onOpenPrivacy}
            onOpenTerms={onOpenTerms}
          />
        </div>
      )}

      {/* FLOATING FRAME HUD / CONTROL BAR (Fixed at bottom) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-4xl w-[94vw] bg-[#101010]/95 backdrop-blur-xl border-2 border-[#E6D5B0]/30 rounded-full px-4 sm:px-6 py-2.5 shadow-[6px_6px_0px_#101010] flex items-center justify-between gap-3 text-xs font-mono">
        
        {/* Frame Info Pill */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D5380C] animate-pulse" />
          <span className="font-bold text-[#FAF6EE] hidden sm:inline">
            FRAME {String(activeFrame + 1).padStart(2, '0')} / {String(totalFrames).padStart(2, '0')}
          </span>
          <span className="text-[#FAF6EE] font-bold text-[11px] bg-[#161616] px-2 py-0.5 rounded border border-[#FAF6EE]/30">
            {FRAME_TITLES[activeFrame]}
          </span>
        </div>

        {/* Interactive Scrub Dots */}
        <div className="hidden md:flex items-center gap-1.5">
          {FRAME_TITLES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToFrame(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeFrame === idx
                  ? 'w-7 bg-[#D5380C]'
                  : 'w-2 bg-[#E6D5B0]/30 hover:bg-[#FAF6EE]'
              }`}
              title={`Jump to Frame ${idx + 1}`}
            />
          ))}
        </div>

        {/* Controls: Prev / Next / Sound / Mode */}
        <div className="flex items-center gap-2">
          
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className="p-1.5 rounded-full bg-[#161616] border border-[#E6D5B0]/20 hover:border-[#D5380C] text-[#E6D5B0] transition-colors"
            title={soundOn ? 'Mute sound effects' : 'Enable tactile audio'}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-[#D5380C]" /> : <VolumeX className="w-3.5 h-3.5 text-[#E6D5B0]/50" />}
          </button>

          {/* Mode Switcher */}
          <button
            onClick={() => {
              playClickSound();
              setViewMode(viewMode === 'horizontal' ? 'vertical' : 'horizontal');
            }}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#161616] border border-[#E6D5B0]/20 hover:border-[#D5380C] text-[10px] font-bold text-[#E6D5B0] transition-colors"
            title="Toggle between horizontal frame-by-frame and vertical scroll"
          >
            {viewMode === 'horizontal' ? <Columns className="w-3 h-3 text-[#D5380C]" /> : <LayoutGrid className="w-3 h-3 text-[#D5380C]" />}
            <span>{viewMode === 'horizontal' ? 'FRAMES' : 'STACK'}</span>
          </button>

          {/* Prev Frame Button */}
          <button
            onClick={prevFrame}
            disabled={activeFrame === 0}
            className={`p-1.5 rounded-full border transition-all ${
              activeFrame === 0
                ? 'opacity-30 border-transparent cursor-not-allowed'
                : 'bg-[#161616] border-[#E6D5B0]/30 hover:border-[#D5380C] text-[#FAF6EE]'
            }`}
            title="Previous Frame (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Frame Button */}
          <button
            onClick={nextFrame}
            disabled={activeFrame === totalFrames - 1}
            className={`p-1.5 rounded-full border transition-all ${
              activeFrame === totalFrames - 1
                ? 'opacity-30 border-transparent cursor-not-allowed'
                : 'bg-[#D5380C] border-[#FAF6EE] text-[#FAF6EE] hover:bg-[#B82D09] shadow-[2px_2px_0px_#FAF6EE]'
            }`}
            title="Next Frame (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
