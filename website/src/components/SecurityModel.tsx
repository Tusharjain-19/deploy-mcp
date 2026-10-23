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
    <section id="security" className="py-12 sm:py-16 bg-[#000000] border-t border-[#F6E3B8]/15 relative overflow-hidden">
      {/* Subtle Topographic Curves */}
      <HaikeiContourBackground strokeColor="rgba(246, 227, 184, 0.04)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] text-[#F6E3B8] text-xs font-mono font-bold mb-4 border border-[#F6E3B8]/20 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#E7BA05]" />
              <span className="tracking-wider uppercase">ZERO-TRUST SECURITY SPECIFICATION</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#F6E3B8] tracking-tight uppercase leading-tight">
              SECRETS NEVER TOUCH THE AI MODEL.
            </h2>
            <p className="text-[#F6E3B8]/80 text-sm sm:text-base mt-3 leading-relaxed font-sans max-w-2xl mx-auto">
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
                  className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 hover:border-[#E7BA05]/70 transition-all flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#F6E3B8]/20 flex items-center justify-center text-[#F6E3B8] shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5 text-[#E7BA05]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-syne font-bold text-sm text-[#F6E3B8]">{pillar.title}</h4>
                      <span className="text-[9px] font-mono text-[#E7BA05] bg-[#000000] px-2 py-0.5 rounded border border-[#E7BA05]/40">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#F6E3B8]/70 font-sans leading-relaxed">
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
              <div className="p-6 sm:p-7 rounded-3xl bg-[#000000] border-2 border-[#906342]/40 relative overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#000000] border border-[#906342]/50 flex items-center justify-center text-[#906342]">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-base text-[#F6E3B8]">Traditional Unfenced MCP Deployers</h3>
                    <span className="text-[10px] font-mono text-[#906342] font-bold uppercase tracking-wider">High Risk • Secret Exfiltration</span>
                  </div>
                </div>
                
                <p className="text-[#F6E3B8]/70 text-xs mb-4 leading-relaxed font-sans">
                  Raw environment variables and secret tokens are passed into LLM prompt text, inadvertently broadcasting production API keys over cloud inference streams.
                </p>

                <div className="p-3.5 rounded-xl bg-[#000000] font-mono text-[11px] text-[#F6E3B8] border border-[#906342]/30 flex items-center gap-2 overflow-x-auto">
                  <span className="text-[#F6E3B8]/50 whitespace-nowrap">.env keys & secrets</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#906342] shrink-0" />
                  <span className="text-[#906342] font-bold bg-[#000000] px-2 py-0.5 rounded border border-[#906342]/40 whitespace-nowrap">LLM Prompt Memory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#906342] shrink-0" />
                  <span className="text-[#F6E3B8]/50 whitespace-nowrap">Public Cloud LLM</span>
                </div>
              </div>
            </FadeIn>

            {/* Deploy MCP Governed Zero-Trust Approach */}
            <FadeIn direction="right" delay={0.2}>
              <div className="p-6 sm:p-7 rounded-3xl bg-[#E7BA05] border-3 border-[#000000] relative overflow-hidden shadow-xl text-[#000000]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#000000] border border-[#000000] flex items-center justify-center text-[#6B9E5A]">
                    <CheckCircle2 className="w-5 h-5 text-[#6B9E5A]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-black text-lg text-[#000000]">Deploy MCP Zero-Trust Architecture</h3>
                    <span className="text-[10px] font-mono text-[#000000] bg-[#F6E3B8] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border border-[#000000]">Client-Side Isolation</span>
                  </div>
                </div>

                <p className="text-[#000000] text-xs mb-4 leading-relaxed font-semibold font-sans">
                  Local AST scanner reads keys locally. Values bypass the AI model entirely and travel straight over secure mutual TLS endpoints directly to Vercel.
                </p>

                <div className="p-3.5 rounded-xl bg-[#000000] font-mono text-[11px] text-[#F6E3B8] border border-[#000000] space-y-2">
                  <div className="flex items-center justify-between text-[#F6E3B8]/70 text-[10px]">
                    <span>DEPLOY MCP ENCLAVE</span>
                    <span className="text-[#6B9E5A] font-bold">MUTUAL TLS VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto text-xs">
                    <span className="text-[#F6E3B8] whitespace-nowrap">Local AST</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E7BA05] shrink-0" />
                    <span className="text-[#F6E3B8] bg-[#0a0a0a] px-2 py-0.5 rounded border border-[#F6E3B8]/20 whitespace-nowrap">Zero-Knowledge Relay</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E7BA05] shrink-0" />
                    <span className="text-[#6B9E5A] font-bold whitespace-nowrap">Vercel Production API</span>
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
