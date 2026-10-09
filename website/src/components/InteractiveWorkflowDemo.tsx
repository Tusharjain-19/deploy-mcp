import React, { useState, useEffect } from 'react';
import { Cpu, ShieldCheck, Rocket, Globe, Terminal, CheckCircle2, Lock, Sparkles, ArrowRight, Check } from 'lucide-react';

export const InteractiveWorkflowDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'agent',
      title: '1. AI AGENT PROMPT',
      subtitle: 'Cursor / Claude / Antigravity',
      description: 'User commands: "Deploy my app to Vercel with domain myapp.com". Model calls MCP tools natively.',
      badge: 'LLM PROMPT PHASE',
      icon: Terminal,
      detail: {
        toolCall: 'smart_deploy({ domain: "myapp.com", projectName: "myapp" })',
        secretStatus: '0 secrets in LLM context (Sanitized)',
        latency: '14ms',
        securityLevel: 'Zero-Leakage'
      }
    },
    {
      id: 'mcp-engine',
      title: '2. LOCAL MCP ENGINE',
      subtitle: 'Node.js Protocol Runtime',
      description: 'Auto-detects framework, executes TypeScript dry-run compilation locally, and audits Git modified files.',
      badge: 'LOCAL COMPILATION',
      icon: Cpu,
      detail: {
        toolCall: 'check_project() + detect_project() + git_status()',
        secretStatus: 'Dry-run build: PASSED (0 errors, 0 warnings)',
        latency: '160ms',
        securityLevel: 'Local Process'
      }
    },
    {
      id: 'sanitizer',
      title: '3. ZERO-TRUST SECRET SYNC',
      subtitle: 'Local-to-Cloud TLS Sync',
      description: 'Parses local .env keys and transmits values directly to Vercel API via encrypted TLS. LLMs only see key names.',
      badge: 'ZERO-TRUST BOUNDARY',
      icon: ShieldCheck,
      detail: {
        toolCall: 'sync_env({ target: "production", keys: ["DATABASE_URL"] })',
        secretStatus: 'Synced 4 keys safely (Keys visible, Values isolated)',
        latency: '310ms',
        securityLevel: 'TLS Encrypted'
      }
    },
    {
      id: 'vercel-deploy',
      title: '4. VERCEL CLOUD API',
      subtitle: 'Direct Cloud REST Trigger',
      description: 'Generates deployment payload, uploads file bundle, and polls deployment build status until READY.',
      badge: 'VERCEL CLOUD BUILD',
      icon: Rocket,
      detail: {
        toolCall: 'deploy_to_vercel() + get_deployment_status()',
        secretStatus: 'Cloud Build: BUILDING ➔ READY in 9.2s',
        latency: '2.1s',
        securityLevel: 'Direct REST'
      }
    },
    {
      id: 'live-app',
      title: '5. LIVE PRODUCTION URL',
      subtitle: 'https://myapp.vercel.app',
      description: 'App is live! Custom domain attached, SSL certificate auto-provisioned, CDN deployed across 300+ global edge locations.',
      badge: '100% LIVE & SSL',
      icon: Globe,
      detail: {
        toolCall: 'manage_domain({ domain: "myapp.com", action: "assign" })',
        secretStatus: 'HTTPS Active | 200 OK | CDN Cached Globally',
        latency: '0ms',
        securityLevel: 'Edge Network'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="demo" className="py-24 bg-[#101010] border-t border-[#E6D5BD]/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101010] text-[#E6D5BD] text-xs font-bold mb-4 border border-[#D5360C]">
            <span className="w-2 h-2 rounded-full bg-[#D5360C]" />
            <span className="font-mono text-[11px]">5-STAGE GOVERNED PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#E6D5BD] tracking-tight">
            HOW YOUR AGENT DEPLOYS
          </h2>
          <p className="text-[#E6D5BD]/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Live interactive pipeline demonstrating autonomous execution from conversational prompt to live Vercel production URL with zero secret leakage.
          </p>
        </div>

        {/* 5-Node Interactive Flow Bar in 3 Colors */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 rounded-2xl border text-left transition-all duration-300 select-none ${
                  isActive
                    ? 'bg-[#D5360C] border-[#E6D5BD] shadow-2xl scale-[1.03]'
                    : isPassed
                    ? 'bg-[#161616] border-[#E6D5BD]/30 opacity-90'
                    : 'bg-[#121212] border-[#E6D5BD]/15 opacity-60 hover:opacity-100 hover:border-[#D5360C]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                    isActive
                      ? 'bg-[#101010] border-[#E6D5BD] text-[#E6D5BD]'
                      : 'bg-[#101010] border-[#E6D5BD]/20 text-[#E6D5BD]'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>

                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E6D5BD] animate-ping" />
                  ) : isPassed ? (
                    <CheckCircle2 className="w-4 h-4 text-[#D5360C]" />
                  ) : (
                    <span className="text-[10px] font-mono text-[#E6D5BD]/40 font-bold">0{idx + 1}</span>
                  )}
                </div>

                <h4 className={`text-xs font-black mb-1 line-clamp-1 ${isActive ? 'text-[#E6D5BD]' : 'text-[#E6D5BD]'}`}>{step.title}</h4>
                <p className={`text-[11px] line-clamp-1 ${isActive ? 'text-[#E6D5BD]/90' : 'text-[#E6D5BD]/60'}`}>{step.subtitle}</p>

                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-[#E6D5BD]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector Card */}
        <div className="rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/20 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-[#E6D5BD]/15">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#D5360C] text-[#E6D5BD] border border-[#E6D5BD]/40">
                  {steps[activeStep].badge}
                </span>
                <span className="text-xs font-mono text-[#E6D5BD]/60">Stage {activeStep + 1} of 5</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#E6D5BD] tracking-tight">{steps[activeStep].title}</h3>
              <p className="text-[#E6D5BD]/90 text-sm mt-1 leading-relaxed max-w-2xl">{steps[activeStep].description}</p>
            </div>

            <div className="flex items-center gap-4 bg-[#101010] p-4 rounded-2xl border border-[#E6D5BD]/20 shrink-0 font-mono text-xs">
              <div>
                <span className="text-[#E6D5BD]/50 block text-[10px] uppercase font-bold">Step Latency</span>
                <span className="text-[#D5360C] font-black text-sm">{steps[activeStep].detail.latency}</span>
              </div>
              <div className="w-px h-8 bg-[#E6D5BD]/15" />
              <div>
                <span className="text-[#E6D5BD]/50 block text-[10px] uppercase font-bold">Security Level</span>
                <span className="text-[#E6D5BD] font-bold text-sm flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#D5360C]" /> {steps[activeStep].detail.securityLevel}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Inspection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/15 space-y-2">
              <span className="text-[#E6D5BD]/60 block font-sans font-bold">// Executed MCP Tool Invocation</span>
              <div className="text-[#E6D5BD] font-bold bg-[#161616] p-3 rounded-xl border border-[#D5360C] overflow-x-auto">
                {steps[activeStep].detail.toolCall}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/15 space-y-2">
              <span className="text-[#E6D5BD]/60 block font-sans font-bold">// Real-time Governance & Telemetry</span>
              <div className="text-[#E6D5BD] font-bold bg-[#161616] p-3 rounded-xl border border-[#E6D5BD]/30 flex items-center gap-2 overflow-x-auto">
                <CheckCircle2 className="w-4 h-4 text-[#D5360C] shrink-0" />
                <span>{steps[activeStep].detail.secretStatus}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
