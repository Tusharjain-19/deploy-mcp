import React, { useState } from 'react';
import { Stethoscope, AlertTriangle, CheckCircle2, Cpu, Sparkles, XCircle, RefreshCw, ArrowRight, ArrowLeft } from 'lucide-react';
import { playClickSound, playKeySound, playSuccessSound } from '../../utils/soundEffects';

interface Frame04Props {
  onNextFrame: () => void;
  onPrevFrame: () => void;
}

export const Frame04SelfHealing: React.FC<Frame04Props> = ({ onNextFrame, onPrevFrame }) => {
  const [activeScenario, setActiveScenario] = useState<'module' | 'secret' | 'ts'>('module');
  const [stage, setStage] = useState<number>(0);

  const scenarios = {
    module: {
      name: 'Missing Module Import',
      error: "ModuleNotFoundError: Cannot find module 'framer-motion' in src/components/Hero.tsx:14:10",
      diagnose: "AST log inspection detected unlisted dependency 'framer-motion' imported in 2 components.",
      patch: "Agent automatically runs: npm install framer-motion --save && updates package.json lockfile.",
      result: "Redeployed in 6.4s • Build Status: READY (HTTP 200 OK)"
    },
    secret: {
      name: 'Missing Environment Key',
      error: "RuntimeError: process.env.DATABASE_URL is undefined during static page generation in /api/posts",
      diagnose: "Vercel environment inspection revealed DATABASE_URL exists locally in .env.local but absent on cloud.",
      patch: "Deploy MCP invokes sync_env({ keys: ['DATABASE_URL'] }) via local TLS. Values isolated.",
      result: "Environment synchronized securely • Rebuilt and deployed in 4.1s (HTTP 200 OK)"
    },
    ts: {
      name: 'TypeScript Edge Type Error',
      error: "Type error: Property 'params' does not satisfy PageProps constraint in src/app/blog/[slug]/page.tsx",
      diagnose: "Next.js 14 App Router signature mismatch: params changed from synchronous to Promise<{ slug: string }>.",
      patch: "Agent rewrites page component signature with async Promise<{ slug: string }> destructuring.",
      result: "Local check_project passed with 0 errors • Deployment live on Vercel Edge"
    }
  };

  const current = scenarios[activeScenario];

  const handleNextStage = () => {
    const next = (stage + 1) % 4;
    setStage(next);
    if (next === 3) {
      playSuccessSound();
    } else {
      playKeySound();
    }
  };

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
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">FRAME 04 // DIAGNOSTICS</span>
            <span className="text-[10px] font-mono text-[#F1B333] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#161616] border border-[#F1B333]/30">
              SELF-HEALING ENGINE
            </span>
          </div>
        </div>

        {/* Scenario Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-[#161616] p-1 rounded-full border border-[#E6D5B0]/20 font-mono text-xs">
          {(['module', 'secret', 'ts'] as const).map(sc => (
            <button
              key={sc}
              onClick={() => { playClickSound(); setActiveScenario(sc); setStage(0); }}
              className={`px-3 py-1 rounded-full font-bold uppercase transition-all ${
                activeScenario === sc
                  ? 'bg-[#D5380C] text-[#FAF6EE] shadow-[2px_2px_0px_#FAF6EE]'
                  : 'text-[#E6D5B0]/70 hover:text-[#FAF6EE]'
              }`}
            >
              {sc === 'module' ? 'Missing Module' : sc === 'secret' ? 'Secret Sync' : 'Type Mismatch'}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN DIAGNOSTICS CONTENT */}
      <div className="relative z-10 my-auto py-6 max-w-6xl mx-auto w-full space-y-6">
        
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#F1B333] text-[#F1B333] font-mono text-xs font-bold">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>AUTONOMOUS ERROR RECOVERY</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] uppercase leading-tight">
            BUILD FAILED? AGENT AUTO-FIXES IT.
          </h2>
          <p className="text-sm sm:text-base text-[#E6D5B0]/80">
            When Vercel builds fail, Deploy MCP parses raw stack traces and issues structured repair instructions to your AI assistant.
          </p>
        </div>

        {/* Interactive Diagnostic Box */}
        <div className="rounded-3xl bg-[#141414] border-2 border-[#E6D5B0]/20 shadow-[8px_8px_0px_#101010] p-6 sm:p-8 space-y-6">
          
          {/* Stage Progress Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E6D5B0]/15 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#FAF6EE]">SCENARIO:</span>
              <span className="text-[#F1B333]">{current.name}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map(stgIndex => (
                <button
                  key={stgIndex}
                  onClick={() => { playClickSound(); setStage(stgIndex); }}
                  className={`px-3 py-1 rounded-full font-bold uppercase transition-all ${
                    stage === stgIndex
                      ? 'bg-[#D5380C] text-[#FAF6EE]'
                      : stage > stgIndex
                      ? 'bg-[#181818] text-[#0C9367] border border-[#0C9367]'
                      : 'bg-[#101010] text-[#E6D5B0]/50'
                  }`}
                >
                  Step {stgIndex + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Diagnostic Log Flow */}
          <div className="space-y-4 font-mono text-xs sm:text-sm">
            
            {/* Step 1: Initial Error */}
            <div className="p-4 rounded-2xl bg-[#181212] border-2 border-[#D5380C] space-y-1.5">
              <div className="flex items-center justify-between text-[#D5380C] font-bold text-xs">
                <span className="flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  <span>PHASE 1: VERCEL BUILD TELEMETRY REPORTED FAILURE</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#D5380C] text-[#FAF6EE]">ERROR</span>
              </div>
              <p className="text-[#FAF6EE] font-medium pt-1">{current.error}</p>
            </div>

            {/* Step 2: Diagnosis */}
            {stage >= 1 && (
              <div className="p-4 rounded-2xl bg-[#181816] border border-[#F1B333]/40 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#F1B333] font-bold text-xs">
                  <Cpu className="w-4 h-4 animate-spin" />
                  <span>PHASE 2: DEPLOY MCP EXTRACTED ROOT CAUSE</span>
                </div>
                <p className="text-[#E6D5B0]">{current.diagnose}</p>
              </div>
            )}

            {/* Step 3: Patch Formulation */}
            {stage >= 2 && (
              <div className="p-4 rounded-2xl bg-[#181612] border border-[#F1B333]/40 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#F1B333] font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>PHASE 3: AGENT EXECUTED AUTONOMOUS REPAIR</span>
                </div>
                <p className="text-[#FAF6EE]">{current.patch}</p>
              </div>
            )}

            {/* Step 4: Live Success */}
            {stage >= 3 && (
              <div className="p-4 rounded-2xl bg-[#122416] border-2 border-[#0C9367] space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#0C9367] font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PHASE 4: REDEPLOYMENT SUCCESSFUL</span>
                </div>
                <p className="text-[#FAF6EE] font-bold">{current.result}</p>
              </div>
            )}

          </div>

          {/* Action Button */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNextStage}
              className="px-5 py-2.5 rounded-full bg-[#FAF6EE] text-[#101010] hover:bg-white font-syne font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[4px_4px_0px_#101010]"
            >
              <span>{stage === 3 ? 'RESET SCENARIO' : 'ADVANCE FIX SEQUENCE →'}</span>
            </button>
          </div>

        </div>

      </div>

      {/* FOOTER BAR OF FRAME 04 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <button
          onClick={() => { playClickSound(); onPrevFrame(); }}
          className="flex items-center gap-1 text-[#E6D5B0] hover:text-[#D5380C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK: FRAME 03 PROTOCOL</span>
        </button>

        <button
          onClick={() => { playClickSound(); onNextFrame(); }}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#D5380C] text-[#FAF6EE] font-bold uppercase tracking-wider hover:bg-[#B82D09] transition-all"
        >
          <span>NEXT: FRAME 05 IDE SETUP</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
