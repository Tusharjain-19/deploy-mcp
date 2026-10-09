import React from 'react';
import { ThreeGlobe3D } from './ThreeGlobe3D';
import { HaikeiWaveDivider, HaikeiContourBackground } from './HaikeiDecorations';
import { FadeIn, StaggerContainer, ScrollParallaxText } from './motion/MotionPrimitives';
import { VercelLogo } from './SvgLogos';
import { Zap, ShieldCheck, Stethoscope, GitBranch, Globe, Cpu, ArrowUpRight, Sparkles, Server, Check } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'ZERO-TOUCH DEPLOYMENTS',
      description: 'Automatic framework detection for Next.js 14, React + Vite, Vue 3, Svelte, Remix, Astro, Static HTML, and custom scripts.',
      icon: Zap
    },
    {
      title: 'ZERO-TRUST SECRET ISOLATION',
      description: 'Scans local .env keys and syncs them straight to Vercel via local TLS REST calls. Secret values are never sent to AI models.',
      icon: ShieldCheck
    },
    {
      title: 'SELF-HEALING DIAGNOSIS',
      description: 'If a cloud build fails, Deploy MCP extracts logs, pinpoints syntax/dependency errors, and gives your AI pair programmer structured fix instructions.',
      icon: Stethoscope
    },
    {
      title: 'GIT SAFETY MATRIX',
      description: 'Audits git repository status, checks for uncommitted modifications, and alerts against accidental commit or leak of secret files.',
      icon: GitBranch
    },
    {
      title: 'GLOBAL EDGE ROUTING',
      description: 'Instant edge distribution across 300+ Vercel points of presence worldwide with zero server maintenance overhead.',
      icon: Globe
    },
    {
      title: 'NATIVE VERCEL REST PROTOCOL',
      description: 'Direct communication with Vercel API endpoints — zero server costs, zero middleware delay, 100% free open-source software.',
      icon: Cpu
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0E0E0E] border-t border-white/10 relative overflow-hidden">
      
      {/* Haikei Topographic Background Curves */}
      <HaikeiContourBackground strokeColor="rgba(230, 213, 176, 0.04)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Parallax */}
        <ScrollParallaxText speed={12}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] text-[#FAF6EE] text-xs font-bold mb-3 border border-[#D5380C] shadow-[3px_3px_0px_#101010]">
              <VercelLogo className="w-3 h-3 text-[#FAF6EE]" />
              <span className="font-mono text-[11px] uppercase tracking-wider">GLOBAL CAPABILITIES MATRIX</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] tracking-tight uppercase leading-tight">
              ENGINEERED FOR AUTONOMOUS AI.
            </h2>
            <p className="text-[#E6D5BD]/80 text-sm sm:text-base mt-3 font-sans">
              Solving real developer deployment friction with robust safety rails and zero overhead.
            </p>
          </div>
        </ScrollParallaxText>

        {/* Interactive 3D Globe Feature Banner */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-14 rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/20 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[8px_8px_0px_#101010] relative overflow-hidden">
            
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] text-[#FAF6EE] font-mono text-xs font-bold border border-white/20">
                <Globe className="w-3.5 h-3.5 text-[#D5380C]" />
                <span>REAL-TIME 3D EDGE DISTRIBUTION</span>
              </div>
              <h3 className="font-syne font-black text-2xl sm:text-4xl text-[#FAF6EE] uppercase leading-tight">
                VERCEL GLOBAL EDGE AT YOUR FINGERTIPS.
              </h3>
              <p className="text-xs sm:text-sm text-[#E6D5BD]/80 font-sans leading-relaxed">
                Every deployment executed through Deploy MCP is distributed to Vercel's global edge network across San Francisco (sfo1), Washington (iad1), Frankfurt (fra1), Tokyo (hnd1), and Paris (cdg1).
              </p>
              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                <span className="bg-[#101010] text-[#FAF6EE] px-3 py-1 rounded border border-[#E6D5BD]/20">0ms Cold Start</span>
                <span className="bg-[#101010] text-[#F1B333] px-3 py-1 rounded border border-[#F1B333]/30">Anycast DNS</span>
                <span className="bg-[#101010] text-[#D5380C] px-3 py-1 rounded border border-[#D5380C]/30">Atomic Rollbacks</span>
              </div>
            </div>

            {/* Real-time 3D Globe */}
            <div className="flex items-center justify-center relative">
              <ThreeGlobe3D size={320} />
            </div>

          </div>
        </FadeIn>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <FadeIn key={idx} direction="up" delay={0.05 * idx}>
                <div className="p-6 rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/15 hover:border-[#D5380C] transition-all duration-300 hover:-translate-y-1 group shadow-[6px_6px_0px_#101010] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#D5380C] border border-[#FAF6EE]/40 flex items-center justify-center text-[#FAF6EE] group-hover:scale-110 transition-transform shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#E6D5BD]/40 group-hover:text-[#D5380C] transition-colors" />
                    </div>

                    <h3 className="font-syne font-bold text-base text-[#FAF6EE] mb-2">{feat.title}</h3>
                    <p className="text-[#E6D5BD]/75 text-xs leading-relaxed font-sans">{feat.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
