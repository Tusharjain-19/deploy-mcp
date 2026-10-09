import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CosmicGalaxy3D } from './CosmicGalaxy3D';
import { PixelLogoHeader } from './PixelLogoHeader';
import { StarburstIcon } from './StarburstIcon';
import { Copy, Check, ShieldCheck, Terminal, Cpu, Lock, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

export const Hero: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeStepTab, setActiveStepTab] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Smooth Scroll Parallax transforms
  const galaxyY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const posterY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const starburstRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const stepsCardY = useTransform(scrollYProgress, [0, 1], ['0%', '-4%']);

  const handleCopy = (cmd: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const steps = [
    {
      num: '01',
      title: 'CONNECT YOUR AI IDE',
      subtitle: 'Fast & Safe Connection',
      icon: Terminal,
      desc: 'Deploy MCP connects to Cursor, Claude, VS Code, or Antigravity in one command. Your AI gets 20 tested deployment tools without running dangerous shell commands.',
      badge: 'SAFE PROTOCOL',
      metric: '< 10ms handshake'
    },
    {
      num: '02',
      title: 'TEST BUILD LOCALLY',
      subtitle: 'Find Bugs Before Uploading',
      icon: Cpu,
      desc: 'Before any code leaves your computer, Deploy MCP runs a test build on your Next.js, Vite, React, or Vue app. It catches syntax errors, broken imports, and missing packages in under 2 seconds.',
      badge: 'FAST TESTING',
      metric: '< 2s dry-run'
    },
    {
      num: '03',
      title: 'KEEP SECRETS SAFE',
      subtitle: 'Never Sent to AI Prompts',
      icon: Lock,
      desc: 'Your API keys and passwords stay private on your computer. Deploy MCP sends environment variables straight to Vercel via encrypted local HTTPS. AI models only see variable names, never your actual secret values.',
      badge: '100% PRIVATE',
      metric: '0 leaked secrets'
    },
    {
      num: '04',
      title: '1-CLICK GLOBAL DEPLOY',
      subtitle: 'Instant Live Production URL',
      icon: Globe,
      desc: 'Your project deploys to Vercel edge network across 300+ global locations. You get a live HTTPS production URL immediately, with 1-click rollbacks if you ever need them.',
      badge: 'VERCEL EDGE',
      metric: '300+ Global Regions'
    }
  ];

  return (
    <section
      ref={heroRef}
      className="relative pt-4 pb-10 overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-center"
    >
      {/* 3D THREE.JS COSMIC GALAXY BACKGROUND WITH PARALLAX DEPTH */}
      <motion.div style={{ y: galaxyY, willChange: 'transform' }} className="absolute inset-0 pointer-events-auto">
        <CosmicGalaxy3D interactive={true} className="opacity-75" />
      </motion.div>

      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2">
        <div className="text-center max-w-5xl mx-auto space-y-6">
          
          {/* Top Capsule Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101010]/90 backdrop-blur-md border border-white/10 text-[#FAF6EE] text-xs font-bold tracking-wider uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
            <span className="font-mono text-[11px] text-[#FAF6EE] whitespace-nowrap">
              AUTONOMOUS VERCEL DEPLOYMENT FOR AI CODING ASSISTANTS
            </span>
          </div>

          {/* EDITORIAL RETRO POSTER HERO BANNER */}
          <motion.div
            style={{ y: posterY, willChange: 'transform' }}
            className="relative rounded-3xl bg-[#D5380C] border-4 border-[#FAF6EE] p-6 sm:p-10 lg:p-12 text-left shadow-[12px_12px_0px_#101010] overflow-hidden"
          >
            {/* Parallax Starburst Icon */}
            <motion.div
              style={{ rotate: starburstRotate }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none"
            >
              <StarburstIcon
                points={8}
                fill="#101010"
                stroke="#FAF6EE"
                strokeWidth={2}
                className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-xl"
              />
            </motion.div>

            {/* Fully-Visible Background Watermark */}
            <div className="absolute left-6 sm:left-10 bottom-2.5 sm:bottom-3 font-black font-syne text-6xl sm:text-7xl lg:text-8xl text-[#781802]/70 select-none pointer-events-none tracking-wider leading-none z-0">
              MCP
            </div>

            {/* Bulletproof 2-Column Responsive Grid (No Overlaps on any screen) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading and Intro */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101010] text-[#FAF6EE] font-mono text-xs font-bold uppercase tracking-widest border border-[#FAF6EE]/30">
                  <div className="w-4 h-4 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M11 4.2L3.5 18.5H11V4.2Z" fill="#D5380C" />
                      <path d="M13 4.2V18.5H20.5L13 4.2Z" fill="#FAF6EE" />
                      <circle cx="12" cy="18.5" r="1" fill="#FAF6EE" />
                    </svg>
                  </div>
                  <span>DEPLOY MCP v1.0.0</span>
                </div>

                <h1 className="font-syne text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#FAF6EE] tracking-tight leading-[1.05] uppercase">
                  DEPLOY TO VERCEL <br className="hidden sm:inline" />
                  <span className="text-[#101010] drop-shadow-[2px_2px_0px_#FAF6EE]">IN SECONDS.</span>
                </h1>

                <p className="text-[#FAF6EE] text-sm sm:text-base font-medium opacity-95 leading-relaxed font-sans max-w-xl">
                  Connect <strong className="text-[#101010] bg-[#FAF6EE] px-1.5 py-0.5 rounded font-mono font-bold">Cursor</strong>,{' '}
                  <strong className="text-[#101010] bg-[#FAF6EE] px-1.5 py-0.5 rounded font-mono font-bold">Claude</strong>, and{' '}
                  <strong className="text-[#101010] bg-[#FAF6EE] px-1.5 py-0.5 rounded font-mono font-bold">Antigravity</strong> directly to Vercel. Test builds locally, protect your secrets, and deploy straight from your AI chat.
                </p>
              </div>

              {/* Right Column: 1-Click Interactive Box (Fixed Column Width, Never Overlaps) */}
              <div className="lg:col-span-5 xl:col-span-4 w-full bg-[#101010] p-5 sm:p-6 rounded-2xl border-2 border-[#FAF6EE] shadow-[6px_6px_0px_#101010] space-y-3.5 shrink-0">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#E6D5B0]/70 pb-2 border-b border-[#E6D5B0]/15">
                  <span className="font-bold text-[#FAF6EE]">1-MINUTE SETUP</span>
                  <span className="text-[#D5380C] font-black">100% PRIVATE</span>
                </div>

                <div className="flex items-center gap-2 bg-[#161616] px-3.5 py-2.5 rounded-xl border border-[#E6D5B0]/20 font-mono text-xs text-[#FAF6EE]">
                  <span className="text-[#D5380C] font-black select-none">$</span>
                  <span className="font-bold whitespace-nowrap">npx deploymcp setup</span>
                </div>

                <button
                  onClick={() => handleCopy('npx deploymcp setup')}
                  className="w-full py-3 px-3 sm:px-4 rounded-xl bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-sans font-extrabold text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-2 border-2 border-[#FAF6EE] shadow-[3px_3px_0px_#FAF6EE] active:translate-y-0.5 cursor-pointer"
                >
                  {copiedCmd === 'npx deploymcp setup' ? (
                    <>
                      <Check className="w-4 h-4 text-[#FAF6EE] shrink-0" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#FAF6EE] shrink-0" />
                      <span>COPY SETUP COMMAND</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Status Bar in Poster */}
            <div className="mt-8 pt-4 border-t-2 border-[#FAF6EE]/30 flex flex-wrap items-center justify-between text-xs font-mono text-[#FAF6EE] gap-3 relative z-10">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#FAF6EE]" /> Safe Local Secrets (Never Sent to AI)
              </span>
              <span className="bg-[#101010] text-[#FAF6EE] px-3 py-1 rounded-full text-[10px] font-bold border border-[#FAF6EE]/30">
                100% Free & Open Source MIT
              </span>
            </div>
          </motion.div>

          {/* STEP-BY-STEP PROGRESSIVE ARCHITECTURE SECTION */}
          <motion.div
            style={{ y: stepsCardY, willChange: 'transform' }}
            className="p-6 sm:p-8 rounded-3xl bg-[#121212] border-2 border-white/10 shadow-[8px_8px_0px_#101010] text-left max-w-5xl mx-auto space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] text-[#D5380C] font-mono text-xs font-bold mb-1 border border-[#D5380C]/30">
                  <Sparkles className="w-3 h-3" />
                  <span>STEP-BY-STEP PROCESS</span>
                </div>
                <h2 className="font-syne font-black text-xl sm:text-3xl text-[#FAF6EE] uppercase">
                  HOW DEPLOY MCP WORKS
                </h2>
              </div>
              <span className="text-xs font-mono text-white/50">
                4 EASY PHASES
              </span>
            </div>

            {/* Step Tabs Navigation */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {steps.map((st, sIdx) => {
                const IconComp = st.icon;
                const isSelected = activeStepTab === sIdx;
                return (
                  <button
                    key={st.num}
                    onClick={() => { playClickSound(); setActiveStepTab(sIdx); }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#181818] border-[#D5380C] shadow-[4px_4px_0px_#D5380C]'
                        : 'bg-[#141414] border-white/10 hover:border-white/30 text-white/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-syne font-black text-lg text-[#FAF6EE]">{st.num}</span>
                      <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#D5380C]' : 'text-white/40'}`} />
                    </div>
                    <div className="font-syne font-bold text-xs text-[#FAF6EE] uppercase truncate">{st.title}</div>
                    <div className="font-mono text-[10px] text-white/50 truncate mt-0.5">{st.metric}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep-Dive Inspector */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#161616] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-sans">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#D5380C] text-[#FAF6EE] font-mono text-[10px] font-bold">
                    STEP {steps[activeStepTab].num}
                  </span>
                  <span className="font-mono text-xs text-[#F1B333] font-bold">
                    {steps[activeStepTab].subtitle}
                  </span>
                </div>
                <h3 className="font-syne font-black text-lg sm:text-2xl text-[#FAF6EE] uppercase">
                  {steps[activeStepTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E6D5B0]/85 leading-relaxed">
                  {steps[activeStepTab].desc}
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto p-4 rounded-xl bg-[#101010] border border-white/10 font-mono text-xs space-y-1.5 text-right">
                <div className="text-white/40 text-[10px]">VERIFIED SPEED</div>
                <div className="text-[#FAF6EE] font-bold text-sm">{steps[activeStepTab].metric}</div>
                <div className="text-[10px] text-[#0C9367] flex items-center justify-end gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> VERIFIED SAFE
                </div>
              </div>
            </div>
          </motion.div>

          {/* PIXEL ART TERMINAL BANNER */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#141414]/90 backdrop-blur-xl border border-[#E6D5B0]/20 shadow-[6px_6px_0px_#101010] text-left max-w-3xl mx-auto relative overflow-hidden">
            <PixelLogoHeader />
          </div>

          {/* METRIC STATS BANNER */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-2 font-mono">
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#E6D5B0]/15 text-center hover:border-[#D5380C] transition-all shadow-[4px_4px_0px_#101010]">
              <div className="text-3xl font-black text-[#FAF6EE] font-syne">20</div>
              <div className="text-[11px] text-[#D5380C] font-bold uppercase tracking-wider mt-1">Ready Tools</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#E6D5B0]/15 text-center hover:border-[#FAF6EE] transition-all shadow-[4px_4px_0px_#101010]">
              <div className="text-3xl font-black text-[#FAF6EE] font-syne">0</div>
              <div className="text-[11px] text-[#D5380C] font-bold uppercase tracking-wider mt-1">Secrets Leaked</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#E6D5B0]/15 text-center hover:border-[#F1B333] transition-all shadow-[4px_4px_0px_#101010]">
              <div className="text-3xl font-black text-[#FAF6EE] font-syne">&lt; 2s</div>
              <div className="text-[11px] text-[#F1B333] font-bold uppercase tracking-wider mt-1">Test Build Speed</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#E6D5B0]/15 text-center hover:border-[#0C9367] transition-all shadow-[4px_4px_0px_#101010]">
              <div className="text-3xl font-black text-[#0C9367] font-syne">100%</div>
              <div className="text-[11px] text-[#FAF6EE] font-bold uppercase tracking-wider mt-1">MIT Open Source</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
