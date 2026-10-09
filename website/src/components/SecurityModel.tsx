import React from 'react';
import { HaikeiContourBackground } from './HaikeiDecorations';
import { FadeIn } from './motion/MotionPrimitives';
import { Shield, Lock, XCircle, CheckCircle2, Cpu, Key, ArrowRight, Server, Terminal, EyeOff } from 'lucide-react';

export const SecurityModel: React.FC = () => {
  const securityPillars = [
    {
      icon: EyeOff,
      title: 'LOCAL AST KEY MASKING',
      desc: 'Deploy MCP reads environment key names only. Secret values are masked locally and never passed into Cursor or Claude model token contexts.',
      badge: 'TOKEN ISOLATED',
    },
    {
      icon: Lock,
      title: 'HARDWARE-LEVEL mTLS',
      desc: 'All communications to Vercel APIs travel over direct encrypted TLS sockets. No intermediate proxy servers or third-party loggers.',
      badge: 'DIRECT ENCRYPTION',
    },
    {
      icon: Key,
      title: 'EPHEMERAL CREDENTIALS',
      desc: 'Auth tokens and team secrets reside solely in volatile process memory and are zeroed out immediately after deployment completes.',
      badge: 'ZERO-DISK PERSISTENCE',
    },
    {
      icon: Terminal,
      title: 'AUDITABLE SHELL GOVERNANCE',
      desc: 'Every CLI command executed by the AI pair programmer requires pre-flight dry-run inspection before remote changes are committed.',
      badge: 'HUMAN-IN-THE-LOOP',
    },
  ];

  return (
    <section id="security" className="py-12 sm:py-16 bg-[#101010] border-t border-white/10 relative overflow-hidden">
      {/* Subtle Topographic Curves */}
      <HaikeiContourBackground strokeColor="rgba(230, 213, 176, 0.04)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] text-[#FAF6EE] text-xs font-mono font-bold mb-4 border border-white/10 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#D5380C]" />
              <span className="tracking-wider uppercase">ZERO-TRUST SECURITY SPECIFICATION</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] tracking-tight uppercase leading-tight">
              SECRETS NEVER TOUCH THE AI MODEL.
            </h2>
            <p className="text-[#E6D5BD]/80 text-sm sm:text-base mt-3 leading-relaxed font-sans max-w-2xl mx-auto">
              Deploy MCP runs locally on your workstation. Sensitive environment variables and Vercel credentials are shielded behind a client-side zero-knowledge isolation perimeter.
            </p>
          </div>
        </FadeIn>

        {/* Security Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left: 4 Security Enclave Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {securityPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D5380C]/70 transition-all flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#FAF6EE] shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-syne font-bold text-sm text-[#FAF6EE]">{pillar.title}</h4>
                      <span className="text-[9px] font-mono text-[#D5380C] bg-[#101010] px-2 py-0.5 rounded border border-[#D5380C]/40">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#E6D5BD]/70 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Side-by-Side Comparison */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Insecure Approach */}
            <FadeIn direction="right" delay={0.1}>
              <div className="p-6 sm:p-7 rounded-3xl bg-[#161212] border border-red-500/30 relative overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#101010] border border-red-500/40 flex items-center justify-center text-red-400">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-base text-[#FAF6EE]">Traditional Unfenced MCP Deployers</h3>
                    <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">High Risk • Secret Exfiltration</span>
                  </div>
                </div>
                
                <p className="text-[#E6D5BD]/70 text-xs mb-4 leading-relaxed font-sans">
                  Raw environment variables and secret tokens are passed into LLM prompt text, inadvertently broadcasting production API keys over cloud inference streams.
                </p>

                <div className="p-3.5 rounded-xl bg-[#101010] font-mono text-[11px] text-[#E6D5BD] border border-red-500/20 flex items-center gap-2 overflow-x-auto">
                  <span className="text-[#E6D5BD]/50 whitespace-nowrap">.env keys & secrets</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="text-red-400 font-bold bg-[#201414] px-2 py-0.5 rounded border border-red-500/40 whitespace-nowrap">LLM Prompt Memory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="text-[#E6D5BD]/50 whitespace-nowrap">Public Cloud LLM</span>
                </div>
              </div>
            </FadeIn>

            {/* Deploy MCP Governed Zero-Trust Approach */}
            <FadeIn direction="right" delay={0.2}>
              <div className="p-6 sm:p-7 rounded-3xl bg-[#D5380C] border-2 border-[#FAF6EE] relative overflow-hidden shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#101010] border border-[#FAF6EE]/40 flex items-center justify-center text-[#FAF6EE]">
                    <CheckCircle2 className="w-5 h-5 text-[#FAF6EE]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-black text-lg text-[#FAF6EE]">Deploy MCP Zero-Trust Architecture</h3>
                    <span className="text-[10px] font-mono text-[#101010] bg-[#FAF6EE] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Client-Side Isolation</span>
                  </div>
                </div>

                <p className="text-[#FAF6EE] text-xs mb-4 leading-relaxed font-medium font-sans">
                  Local AST scanner reads keys locally. Values bypass the AI model entirely and travel straight over secure mutual TLS endpoints directly to Vercel.
                </p>

                <div className="p-3.5 rounded-xl bg-[#101010] font-mono text-[11px] text-[#FAF6EE] border border-[#FAF6EE]/30 space-y-2">
                  <div className="flex items-center justify-between text-[#E6D5B0]/70 text-[10px]">
                    <span>DEPLOY MCP ENCLAVE</span>
                    <span className="text-[#FAF6EE] font-bold">MUTUAL TLS VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto text-xs">
                    <span className="text-[#FAF6EE] whitespace-nowrap">Local AST</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D5380C] shrink-0" />
                    <span className="text-[#FAF6EE] bg-[#1a1a1a] px-2 py-0.5 rounded border border-white/20 whitespace-nowrap">Zero-Knowledge Relay</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D5380C] shrink-0" />
                    <span className="text-[#FAF6EE] font-bold whitespace-nowrap">Vercel Production API</span>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
};
