import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CosmicGalaxy3D } from './CosmicGalaxy3D';
import { PixelLogoHeader } from './PixelLogoHeader';
import { DeploymentGlyph } from './DeploymentGlyph';
import { ZeroTrustSecurityPill } from './ZeroTrustSecurityPill';
import {
  IconCopy,
  IconCheck,
  IconShield,
  IconTerminal,
  IconCpu,
  IconLock,
  IconGlobe,
  IconBolt,
} from './CustomIcons';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { triggerToast } from './ToastNotification';

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
  const glyphRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const stepsCardY = useTransform(scrollYProgress, [0, 1], ['0%', '-4%']);

  const handleCopy = (cmd: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    triggerToast(`Command copied: ${cmd}`, 'success');
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const steps = [
    {
      num: '01',
      title: 'CONNECT YOUR AI IDE',
      subtitle: 'Fast & Safe Connection',
      icon: IconTerminal,
      desc: 'Deploy MCP connects to Cursor, Claude, VS Code, or Antigravity in one command. Your AI gets 20 tested deployment tools without running dangerous shell commands.',
      badge: 'SAFE PROTOCOL',
      metric: '< 10ms handshake'
    },
    {
      num: '02',
      title: 'TEST BUILD LOCALLY',
      subtitle: 'Find Bugs Before Uploading',
      icon: IconCpu,
      desc: 'Before any code leaves your computer, Deploy MCP runs a test build on your Next.js, Vite, React, or Vue app. It catches syntax errors, broken imports, and missing packages in under 2 seconds.',
      badge: 'FAST TESTING',
      metric: '< 2s dry-run'
    },
    {
      num: '03',
      title: 'KEEP SECRETS SAFE',
      subtitle: 'Never Sent to AI Prompts',
      icon: IconLock,
      desc: 'Your API keys and passwords stay private on your computer. Deploy MCP sends environment variables straight to Vercel via encrypted local HTTPS. AI models only see variable names, never your actual secret values.',
      badge: '100% PRIVATE',
      metric: '0 leaked secrets'
    },
    {
      num: '04',
      title: '1-CLICK GLOBAL DEPLOY',
      subtitle: 'Instant Live Production URL',
      icon: IconGlobe,
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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#000000]/90 backdrop-blur-md border border-[#F6E3B8]/20 text-[#F6E3B8] text-xs font-bold tracking-wider uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E7BA05] animate-pulse" />
            <span className="font-mono text-[11px] text-[#F6E3B8] whitespace-nowrap">
              AUTONOMOUS VERCEL DEPLOYMENT FOR AI CODING ASSISTANTS
            </span>
          </div>

          {/* EDITORIAL RETRO POSTER HERO BANNER */}
          <motion.div
            style={{ y: posterY, willChange: 'transform' }}
            className="relative rounded-3xl bg-[#E7BA05] border-4 border-[#000000] p-6 sm:p-10 lg:p-12 text-left shadow-[12px_12px_0px_#000000] overflow-hidden"
          >
            {/* Parallax Deployment Glyph */}
            <motion.div
              style={{ rotate: glyphRotate }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none"
            >
              <DeploymentGlyph
                className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-2xl"
              />
            </motion.div>

            {/* Fully-Visible Background Watermark in Warm Earth Brown */}
            <div className="absolute left-6 sm:left-10 bottom-2.5 sm:bottom-3 font-black font-syne text-6xl sm:text-7xl lg:text-8xl text-[#906342]/20 select-none pointer-events-none tracking-wider leading-none z-0">
              MCP
            </div>

            {/* Responsive Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading and Intro */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#000000] text-[#F6E3B8] font-mono text-xs font-bold uppercase tracking-widest border border-[#F6E3B8]/30">
                  <span className="w-2 h-2 rounded-full bg-[#6B9E5A] animate-ping" />
                  <span>AUTONOMOUS DEPLOYMENT RUNTIME</span>
                </div>

                <h1 className="font-syne text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#000000] tracking-tight leading-[1.05] uppercase">
                  DEPLOY TO VERCEL <br className="hidden sm:inline" />
                  <span className="text-[#000000] drop-shadow-[2px_2px_0px_#F6E3B8]">IN SECONDS.</span>
                </h1>

                <p className="text-[#000000]/90 text-sm sm:text-base font-semibold leading-relaxed font-sans max-w-xl">
                  Connect <strong className="text-[#F6E3B8] bg-[#000000] px-1.5 py-0.5 rounded font-mono font-bold">Cursor</strong>,{' '}
                  <strong className="text-[#F6E3B8] bg-[#000000] px-1.5 py-0.5 rounded font-mono font-bold">Claude</strong>, and{' '}
                  <strong className="text-[#F6E3B8] bg-[#000000] px-1.5 py-0.5 rounded font-mono font-bold">Antigravity</strong> directly to Vercel. Test builds locally, protect your secrets, and deploy straight from your AI chat.
                </p>
              </div>

              {/* Right Column: 1-Click Interactive Box */}
              <div className="lg:col-span-5 xl:col-span-4 w-full bg-[#000000] p-5 sm:p-6 rounded-2xl border-2 border-[#000000] shadow-[6px_6px_0px_#906342] space-y-3.5 shrink-0">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#F6E3B8]/70 pb-2 border-b border-[#F6E3B8]/15">
                  <span className="font-bold text-[#F6E3B8]">1-MINUTE SETUP</span>
                  <span className="text-[#6B9E5A] font-black">100% PRIVATE</span>
                </div>

                <div className="flex items-center gap-2 bg-[#000000] px-3.5 py-2.5 rounded-xl border border-[#F6E3B8]/25 font-mono text-xs text-[#F6E3B8]">
                  <span className="text-[#E7BA05] font-black select-none">$</span>
                  <span className="font-bold whitespace-nowrap">npx deploymcp setup</span>
                </div>

                <button
                  onClick={() => handleCopy('npx deploymcp setup')}
                  className="w-full py-3 px-3 sm:px-4 rounded-xl bg-[#E7BA05] hover:bg-[#C79F04] text-[#000000] font-sans font-black text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-2 border-2 border-[#000000] shadow-[3px_3px_0px_#F6E3B8] active:translate-y-0.5 cursor-pointer"
                >
                  {copiedCmd === 'npx deploymcp setup' ? (
                    <>
                      <IconCheck className="w-4 h-4 text-[#000000] shrink-0" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <IconCopy className="w-4 h-4 text-[#000000] shrink-0" />
                      <span>COPY SETUP COMMAND</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Status Bar in Poster */}
            <div className="mt-8 pt-4 border-t-2 border-[#000000]/20 flex flex-wrap items-center justify-between text-xs font-mono text-[#000000] font-bold gap-3 relative z-10">
              <span className="flex items-center gap-1.5">
                <IconShield className="w-4 h-4 text-[#000000]" /> Safe Local Secrets (Never Sent to AI)
              </span>
              <span className="bg-[#000000] text-[#F6E3B8] px-3 py-1 rounded-full text-[10px] font-bold border border-[#F6E3B8]/30">
                100% Free & Open Source MIT
              </span>
            </div>
          </motion.div>

          {/* STEP-BY-STEP PROGRESSIVE ARCHITECTURE SECTION */}
          <motion.div
            style={{ y: stepsCardY, willChange: 'transform' }}
            className="p-6 sm:p-8 rounded-3xl bg-[#000000] border-2 border-[#F6E3B8]/20 shadow-[8px_8px_0px_#000000] text-left max-w-5xl mx-auto space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F6E3B8]/15">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] text-[#E7BA05] font-mono text-xs font-bold mb-1 border border-[#E7BA05]/30">
                  <IconBolt className="w-3 h-3 text-[#E7BA05]" />
                  <span>STEP-BY-STEP PROCESS</span>
                </div>
                <h2 className="font-syne font-black text-xl sm:text-3xl text-[#F6E3B8] uppercase">
                  HOW DEPLOY MCP WORKS
                </h2>
              </div>
              <span className="text-xs font-mono text-[#F6E3B8]/50">
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
                        ? 'bg-[#000000] border-2 border-[#E7BA05] shadow-[4px_4px_0px_#E7BA05]'
                        : 'bg-[#000000] border-[#F6E3B8]/15 hover:border-[#F6E3B8]/40 text-[#F6E3B8]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-syne font-black text-lg text-[#F6E3B8]">{st.num}</span>
                      <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#E7BA05]' : 'text-[#F6E3B8]/40'}`} />
                    </div>
                    <div className="font-syne font-bold text-xs text-[#F6E3B8] uppercase truncate">{st.title}</div>
                    <div className="font-mono text-[10px] text-[#F6E3B8]/50 truncate mt-0.5">{st.metric}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep-Dive Inspector */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-sans">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#E7BA05] text-[#000000] font-mono text-[10px] font-bold">
                    STEP {steps[activeStepTab].num}
                  </span>
                  <span className="font-mono text-xs text-[#E7BA05] font-bold">
                    {steps[activeStepTab].subtitle}
                  </span>
                </div>
                <h3 className="font-syne font-black text-lg sm:text-2xl text-[#F6E3B8] uppercase">
                  {steps[activeStepTab].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F6E3B8]/85 leading-relaxed">
                  {steps[activeStepTab].desc}
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto p-4 rounded-xl bg-[#000000] border border-[#F6E3B8]/15 font-mono text-xs space-y-1.5 text-right">
                <div className="text-[#F6E3B8]/40 text-[10px]">VERIFIED SPEED</div>
                <div className="text-[#F6E3B8] font-bold text-sm">{steps[activeStepTab].metric}</div>
                <div className="text-[10px] text-[#6B9E5A] flex items-center justify-end gap-1 font-bold">
                  <IconCheck className="w-3 h-3 text-[#6B9E5A]" /> VERIFIED SAFE
                </div>
              </div>
            </div>
          </motion.div>

          {/* LEAF #6B9E5A ZERO-TRUST SECURITY STATUS COMPONENT */}
          <div className="flex justify-center pt-2">
            <ZeroTrustSecurityPill />
          </div>

          {/* PIXEL ART TERMINAL BANNER */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 shadow-[6px_6px_0px_#000000] text-left max-w-3xl mx-auto relative overflow-hidden">
            <PixelLogoHeader />
          </div>

          {/* METRIC STATS BANNER */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-2 font-mono">
            <div className="p-4 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 text-center hover:border-[#E7BA05] transition-all shadow-[4px_4px_0px_#000000]">
              <div className="text-3xl font-black text-[#E7BA05] font-syne">20</div>
              <div className="text-[11px] text-[#F6E3B8] font-bold uppercase tracking-wider mt-1">Ready Tools</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 text-center hover:border-[#6B9E5A] transition-all shadow-[4px_4px_0px_#000000]">
              <div className="text-3xl font-black text-[#6B9E5A] font-syne">0</div>
              <div className="text-[11px] text-[#6B9E5A] font-bold uppercase tracking-wider mt-1">Secrets Leaked</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 text-center hover:border-[#E7BA05] transition-all shadow-[4px_4px_0px_#000000]">
              <div className="text-3xl font-black text-[#E7BA05] font-syne">&lt; 2s</div>
              <div className="text-[11px] text-[#F6E3B8] font-bold uppercase tracking-wider mt-1">Test Build Speed</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 text-center hover:border-[#6B9E5A] transition-all shadow-[4px_4px_0px_#000000]">
              <div className="text-3xl font-black text-[#6B9E5A] font-syne">100%</div>
              <div className="text-[11px] text-[#F6E3B8] font-bold uppercase tracking-wider mt-1">MIT Open Source</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
