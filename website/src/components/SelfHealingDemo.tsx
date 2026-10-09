import React, { useState, useEffect } from 'react';
import { Stethoscope, AlertTriangle, CheckCircle2, Cpu, Sparkles, XCircle, RefreshCw, ArrowRight, ExternalLink } from 'lucide-react';

export const SelfHealingDemo: React.FC = () => {
  const [simulationStage, setSimulationStage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationStage((prev) => (prev + 1) % 3);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="self-healing" className="py-12 sm:py-16 bg-[#101010] border-t border-[#E6D5BD]/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101010] text-[#E6D5BD] text-xs font-bold mb-4 border border-[#D5360C]">
            <span className="w-2 h-2 rounded-full bg-[#D5360C]" />
            <span className="font-mono text-[11px]">AUTONOMOUS DIAGNOSTICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#E6D5BD] tracking-tight">
            BUILD FAILED? AGENT AUTO-FIXES IT.
          </h2>
          <p className="text-[#E6D5BD]/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            When Vercel build logs report errors, Deploy MCP extracts raw stack traces, pinpoints missing imports or misconfigurations, and feeds your AI model structured fix instructions to redeploy automatically.
          </p>
        </div>

        {/* Interactive Shell Card strictly in 3 Colors */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/20 shadow-2xl p-6 sm:p-8 hover:border-[#D5380C] transition-all">
          
          {/* Top Status Bar & Stage Selectors */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E6D5BD]/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D5380C] border border-[#E6D5BD]/40 flex items-center justify-center text-[#E6D5BD]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#E6D5BD]">Autonomous Log Diagnostic Sequence</h3>
                <p className="text-xs text-[#E6D5BD]/70">Live simulation of a cloud compilation failure & self-repair</p>
              </div>
            </div>

            {/* Manual Stage Tabs in 3 Colors */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((stg) => (
                <button
                  key={stg}
                  onClick={() => setSimulationStage(stg)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    simulationStage === stg
                      ? 'bg-[#D5380C] text-[#E6D5BD] border border-[#E6D5BD]'
                      : 'bg-[#101010] text-[#E6D5BD]/70 hover:text-[#E6D5BD] border border-[#E6D5BD]/20'
                  }`}
                >
                  Stage {stg + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Display */}
          <div className="rounded-2xl bg-[#101010] border border-[#E6D5BD]/15 p-5 sm:p-6 font-mono text-xs space-y-4 shadow-inner">
            
            {/* Stage 0: Initial Vercel Build Error */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[#E6D5BD]/60 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
                  <span>[VERCEL LOG STREAM] Deployment ID: dpl_8xK9p2m4_failed</span>
                </div>
                <span className="text-[#D5380C] font-bold">ERROR 400</span>
              </div>
              <div className="p-4 rounded-xl bg-[#161616] text-[#E6D5BD] font-semibold border border-[#D5380C] flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-[#D5380C] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="font-bold text-[#D5380C]">Build Failed:</p>
                  <p className="text-[11px] text-[#E6D5BD]/90 font-mono">ModuleNotFoundError: Cannot find module 'framer-motion' in src/components/Hero.tsx:14:10</p>
                </div>
              </div>
            </div>

            {/* Stage 1: Diagnosing & Extracting Stack Trace */}
            {simulationStage >= 1 && (
              <div className="space-y-2 pt-3 border-t border-[#E6D5BD]/10 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#E6D5BD]">
                  <Cpu className="w-4 h-4 text-[#D5380C] animate-spin" />
                  <span className="font-bold">Deploy MCP Invocation: `diagnose_build_failure()`</span>
                </div>
                <div className="p-4 rounded-xl bg-[#161616] text-[#E6D5BD] border border-[#E6D5BD]/20 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#D5380C] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-[#E6D5BD]">Autonomous Diagnosis Payload Extracted:</p>
                    <p className="text-[#E6D5BD]/80">Missing NPM dependency <code className="text-[#E6D5BD] bg-black px-1.5 py-0.5 rounded border border-[#E6D5BD]/30">framer-motion</code> required for Hero layout transition.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 2: Repaired and Live */}
            {simulationStage === 2 && (
              <div className="space-y-2 pt-3 border-t border-[#E6D5BD]/10 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#E6D5BD]">
                  <CheckCircle2 className="w-4 h-4 text-[#D5380C]" />
                  <span className="font-bold">Autonomous Fix Applied & Re-deployed</span>
                </div>
                <div className="p-4 rounded-xl bg-[#161616] text-[#E6D5BD] border border-[#D5380C] space-y-2">
                  <p className="font-bold flex items-center gap-1.5 text-[#E6D5BD] text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#D5380C]" />
                    <span>AI Agent automatically executed `npm i framer-motion` and triggered `smart_deploy()`</span>
                  </p>
                  <p className="text-[#E6D5BD]/80 text-xs">// Vercel Cloud Build Status: <strong className="text-[#E6D5BD]">READY (200 OK • 10.4s)</strong></p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-xs text-[#D5380C] hover:underline font-bold"
                  >
                    <span>https://deploy-mcp-demo.vercel.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
