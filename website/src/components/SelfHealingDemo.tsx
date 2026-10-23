import React, { useState, useEffect } from 'react';
import {
  IconAlertTriangle,
  IconCheckCircle,
  IconCpu,
  IconDiamondPulse,
  IconXCircle,
  IconExternalLink,
} from './CustomIcons';

export const SelfHealingDemo: React.FC = () => {
  const [simulationStage, setSimulationStage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationStage((prev) => (prev + 1) % 3);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="self-healing" className="py-12 sm:py-16 bg-[#000000] border-t border-[#F6E3B8]/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] text-[#F6E3B8] text-xs font-bold mb-4 border border-[#E7BA05]">
            <span className="w-2 h-2 rounded-full bg-[#E7BA05]" />
            <span className="font-mono text-[11px]">AUTONOMOUS DIAGNOSTICS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#F6E3B8] tracking-tight font-syne uppercase">
            BUILD FAILED? AGENT REPAIRS IT AUTOMATICALLY.
          </h2>
          <p className="text-[#F6E3B8]/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed font-sans">
            When Vercel build logs report errors, Deploy MCP extracts raw stack traces, pinpoints missing imports or misconfigurations, and feeds your AI model structured fix instructions to redeploy automatically.
          </p>
        </div>

        {/* Interactive Shell Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#000000] border-2 border-[#F6E3B8]/20 shadow-2xl p-6 sm:p-8 hover:border-[#E7BA05] transition-all">
          
          {/* Top Status Bar & Stage Selectors */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#F6E3B8]/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E7BA05] border border-[#000000] flex items-center justify-center text-[#000000]">
                <IconAlertTriangle className="w-5 h-5 text-[#000000]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#F6E3B8] font-syne">Autonomous Log Diagnostic Sequence</h3>
                <p className="text-xs text-[#F6E3B8]/70 font-mono">Live simulation of a cloud compilation failure and self-repair</p>
              </div>
            </div>

            {/* Manual Stage Tabs */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((stg) => (
                <button
                  key={stg}
                  onClick={() => setSimulationStage(stg)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    simulationStage === stg
                      ? 'bg-[#E7BA05] text-[#000000] border border-[#000000] font-black'
                      : 'bg-[#000000] text-[#F6E3B8]/70 hover:text-[#F6E3B8] border border-[#F6E3B8]/20'
                  }`}
                >
                  Stage {stg + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Display */}
          <div className="rounded-2xl bg-[#000000] border border-[#F6E3B8]/15 p-5 sm:p-6 font-mono text-xs space-y-4 shadow-inner">
            
            {/* Stage 0: Initial Vercel Build Error */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[#F6E3B8]/60 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#906342] animate-pulse" />
                  <span>[VERCEL LOG STREAM] Deployment ID: dpl_8xK9p2m4_failed</span>
                </div>
                <span className="text-[#906342] font-bold">ERROR 400</span>
              </div>
              <div className="p-4 rounded-xl bg-[#000000] text-[#F6E3B8] font-semibold border border-[#906342]/60 flex items-start gap-2.5">
                <IconXCircle className="w-4 h-4 text-[#906342] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="font-bold text-[#906342]">Build Failed:</p>
                  <p className="text-[11px] text-[#F6E3B8]/90 font-mono">ModuleNotFoundError: Cannot find module 'framer-motion' in src/components/Hero.tsx:14:10</p>
                </div>
              </div>
            </div>

            {/* Stage 1: Diagnosing & Extracting Stack Trace */}
            {simulationStage >= 1 && (
              <div className="space-y-2 pt-3 border-t border-[#F6E3B8]/10 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#F6E3B8]">
                  <IconCpu className="w-4 h-4 text-[#E7BA05] animate-spin" />
                  <span className="font-bold">Deploy MCP Invocation: `diagnose_build_failure()`</span>
                </div>
                <div className="p-4 rounded-xl bg-[#000000] text-[#F6E3B8] border border-[#F6E3B8]/20 flex items-start gap-2.5">
                  <IconDiamondPulse className="w-4 h-4 text-[#E7BA05] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-[#F6E3B8]">Autonomous Diagnosis Payload Extracted:</p>
                    <p className="text-[#F6E3B8]/80">Missing NPM dependency <code className="text-[#000000] bg-[#F6E3B8] px-1.5 py-0.5 rounded font-bold">framer-motion</code> required for Hero layout transition.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 2: Repaired and Live */}
            {simulationStage === 2 && (
              <div className="space-y-2 pt-3 border-t border-[#F6E3B8]/10 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#F6E3B8]">
                  <IconCheckCircle className="w-4 h-4 text-[#6B9E5A]" />
                  <span className="font-bold text-[#6B9E5A]">Autonomous Fix Applied and Redeployed</span>
                </div>
                <div className="p-4 rounded-xl bg-[#000000] text-[#F6E3B8] border-2 border-[#6B9E5A] space-y-2">
                  <p className="font-bold flex items-center gap-1.5 text-[#F6E3B8] text-xs">
                    <IconCheckCircle className="w-4 h-4 text-[#6B9E5A]" />
                    <span>AI Agent automatically executed `npm i framer-motion` and triggered `smart_deploy()`</span>
                  </p>
                  <p className="text-[#F6E3B8]/80 text-xs">// Vercel Cloud Build Status: <strong className="text-[#6B9E5A]">READY (200 OK • 10.4s)</strong></p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#E7BA05] font-bold">
                    <span>https://deploymcp-demo.vercel.app</span>
                    <IconExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
