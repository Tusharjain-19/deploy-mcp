import React, { useState } from 'react';
import { StarburstIcon } from '../StarburstIcon';
import { Search, CheckCircle, ShieldCheck, Rocket, ArrowRight, ArrowLeft, Terminal, Lock, Cpu, Globe } from 'lucide-react';
import { playClickSound } from '../../utils/soundEffects';

interface Frame03Props {
  onNextFrame: () => void;
  onPrevFrame: () => void;
}

export const Frame03Protocol: React.FC<Frame03Props> = ({ onNextFrame, onPrevFrame }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'FRAMEWORK DETECTION',
      subtitle: 'Deterministic AST & Manifest Analysis',
      icon: Search,
      badge: 'INPUT: PATH',
      description: 'Scans package.json dependencies, config files, and directory signatures to auto-detect Next.js (App & Pages router), Vite React, Vue, Svelte, Astro, HTML/CSS, and custom build scripts.',
      technicalDetails: {
        toolName: 'detect_project',
        latency: '< 12ms',
        securityGuarantee: 'Read-only local directory inspection with sandboxed symlink protection.'
      }
    },
    {
      number: '02',
      title: 'LOCAL DRY-RUN COMPILATION',
      subtitle: 'Pre-Flight Compilation Sandbox',
      icon: CheckCircle,
      badge: 'ZERO-BREAKAGE',
      description: 'Executes clean dry-run builds locally before triggering cloud deployment. Catches TypeScript type mismatches, missing imports, and bundling errors in seconds without incurring serverless cloud build charges.',
      technicalDetails: {
        toolName: 'check_project',
        latency: '1.2s - 2.8s',
        securityGuarantee: 'Isolated subprocess execution preventing arbitrary script injection.'
      }
    },
    {
      number: '03',
      title: 'ZERO-TRUST SECRET SYNC',
      subtitle: 'TLS Secret Fencing Architecture',
      icon: ShieldCheck,
      badge: 'ZERO-LEAKAGE',
      description: 'Synchronizes environment variables directly between your local project and Vercel cloud project endpoints over mutual TLS. The AI model only receives key names and diff states—raw secret values never enter model context.',
      technicalDetails: {
        toolName: 'sync_env',
        latency: '180ms',
        securityGuarantee: 'End-to-end HTTPS payload encryption. Key values are masked in all agent audit logs.'
      }
    },
    {
      number: '04',
      title: 'CLOUD SHIP & SELF-HEALING',
      subtitle: 'Edge Distribution & Telemetry',
      icon: Rocket,
      badge: 'VERCEL NATIVE',
      description: 'Triggers atomic production or preview deployment on Vercel, polls build telemetry until READY, assigns custom aliases, and auto-diagnoses build failures if cloud execution errors occur.',
      technicalDetails: {
        toolName: 'deploy_to_vercel',
        latency: '8s - 14s',
        securityGuarantee: 'Immutable deployment IDs with automated rollback checkpoint verification.'
      }
    }
  ];

  return (
    <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-y-auto overflow-x-hidden bg-[#101010] text-[#E6D5B0]">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#E6D5B0]/20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); onPrevFrame(); }}
            className="p-1.5 rounded-full bg-[#161616] border border-[#E6D5B0]/20 hover:border-[#D5380C] text-[#E6D5B0] transition-colors"
            title="Previous Frame"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">FRAME 03 // ARCHITECTURE</span>
            <span className="text-[10px] font-mono text-[#D5380C] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#161616] border border-[#D5380C]/40">
              4-PHASE PROTOCOL
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#E6D5B0]/80">
          <span className="w-2 h-2 rounded-full bg-[#D5380C]" />
          <span>ZERO-TRUST GOVERNANCE MATRIX</span>
        </div>
      </div>

      {/* PROTOCOL BODY */}
      <div className="relative z-10 my-auto py-6 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5380C] text-[#FAF6EE] font-mono text-xs font-black uppercase">
            <span>THE 4-STAGE PIPELINE</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] uppercase leading-tight">
            HOW GOVERNED DEPLOYMENT WORKS.
          </h2>
          <p className="text-sm sm:text-base text-[#E6D5B0]/80 font-medium">
            Unlike raw terminal commands that expose tokens and crash unpredictably, Deploy MCP encloses every stage inside strict guardrails.
          </p>
        </div>

        {/* 4 Interactive Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => { playClickSound(); setActiveStep(idx); }}
                className={`p-6 rounded-3xl border-2 transition-all cursor-pointer duration-200 relative group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181818] border-[#D5380C] shadow-[6px_6px_0px_#D5380C] scale-[1.02]'
                    : 'bg-[#141414] border-[#E6D5B0]/15 hover:border-[#FAF6EE] shadow-[4px_4px_0px_#101010]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#E6D5B0]/10">
                    <span className="font-syne font-black text-2xl text-[#FAF6EE]">
                      {step.number}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${
                      isSelected ? 'bg-[#D5380C] text-white' : 'bg-[#101010] text-[#E6D5B0]/70 border border-[#E6D5B0]/20'
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-[#D5380C] border border-[#FAF6EE]/40 flex items-center justify-center text-[#FAF6EE] mb-3 shadow-md">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-syne font-black text-base text-[#FAF6EE] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#D5380C] font-bold mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-[#E6D5B0]/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E6D5B0]/10 flex items-center justify-between text-[11px] font-mono text-[#FAF6EE]">
                  <span className="text-[#FAF6EE]">{step.technicalDetails.toolName}()</span>
                  <span className="text-[#E6D5B0]/50">{step.technicalDetails.latency}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Technical Deep-Dive Inspector */}
        <div className="p-6 rounded-3xl bg-[#141414] border-2 border-[#FAF6EE]/20 shadow-[8px_8px_0px_#101010] space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6D5B0]/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D5380C] animate-pulse" />
              <span className="font-syne font-bold text-sm text-[#FAF6EE]">
                STAGE {steps[activeStep].number} TECHNICAL SPECIFICATION: {steps[activeStep].title}
              </span>
            </div>
            <span className="font-mono text-xs text-[#FAF6EE]">
              API: {steps[activeStep].technicalDetails.toolName}()
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-[#E6D5B0]">
            <div className="p-3.5 rounded-2xl bg-[#101010] border border-[#E6D5B0]/15">
              <span className="text-[#D5380C] font-bold uppercase block mb-1">Security Fence & Isolation:</span>
              <p className="text-[#E6D5B0]/90 leading-relaxed">{steps[activeStep].technicalDetails.securityGuarantee}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#101010] border border-[#E6D5B0]/15">
              <span className="text-[#F1B333] font-bold uppercase block mb-1">Estimated Latency & Overhead:</span>
              <p className="text-[#E6D5B0]/90 leading-relaxed">{steps[activeStep].technicalDetails.latency} across standard Node LTS runtime.</p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER BAR OF FRAME 03 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <button
          onClick={() => { playClickSound(); onPrevFrame(); }}
          className="flex items-center gap-1 text-[#E6D5B0] hover:text-[#D5380C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK: FRAME 02 CONSOLE</span>
        </button>

        <button
          onClick={() => { playClickSound(); onNextFrame(); }}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#D5380C] text-[#FAF6EE] font-bold uppercase tracking-wider hover:bg-[#B82D09] transition-all"
        >
          <span>NEXT: FRAME 04 AUTO-FIX</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
