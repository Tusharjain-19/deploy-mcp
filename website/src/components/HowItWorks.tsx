import React from 'react';
import { HaikeiWaveDivider, HaikeiContourBackground } from './HaikeiDecorations';
import { FadeIn, ScrollParallaxText } from './motion/MotionPrimitives';
import { VercelLogo, NextjsLogo, ReactLogo } from './SvgLogos';
import { Search, CheckCircle, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DETECT FRAMEWORK',
      icon: Search,
      description: 'Scans package.json and directory markers to determine whether the app is Next.js, Vite, React, Vue, Astro, or static HTML.',
      tag: 'AST Inspection'
    },
    {
      number: '02',
      title: 'VALIDATE LOCAL BUILD',
      icon: CheckCircle,
      description: 'Executes clean dry-run compilation locally to catch syntax, type, and lint errors before uploading to cloud infrastructure.',
      tag: 'Dry-Run Sandbox'
    },
    {
      number: '03',
      title: 'SYNC LOCAL SECRETS',
      icon: ShieldCheck,
      description: 'Synchronizes .env keys directly over local mutual TLS to Vercel. Secret values never touch AI models.',
      tag: 'TLS Isolation'
    },
    {
      number: '04',
      title: 'DEPLOY & DIAGNOSE',
      icon: Rocket,
      description: 'Triggers atomic deployment on Vercel, polls build telemetry until READY, and diagnoses build failures automatically.',
      tag: 'Vercel Native'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-[#101010] border-t border-white/10 relative overflow-hidden">
      
      {/* Haikei Topographic Contour Background */}
      <HaikeiContourBackground strokeColor="rgba(230, 213, 176, 0.04)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Parallax */}
        <ScrollParallaxText speed={14}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] text-[#FAF6EE] text-xs font-bold mb-3 border border-[#D5380C] shadow-[3px_3px_0px_#101010]">
              <VercelLogo className="w-3 h-3 text-[#FAF6EE]" />
              <span className="font-mono text-[11px] uppercase tracking-wider">AUTONOMOUS PIPELINE</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] tracking-tight uppercase leading-tight">
              HOW DEPLOY MCP WORKS.
            </h2>
            <p className="text-[#E6D5BD]/80 text-sm sm:text-base mt-3 font-sans">
              An autonomous deployment pipeline built directly into your Model Context Protocol runtime.
            </p>
          </div>
        </ScrollParallaxText>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <FadeIn key={idx} direction="up" delay={0.1 * idx}>
                <div className="relative p-6 rounded-3xl bg-[#141414] border-2 border-[#E6D5BD]/15 hover:border-[#D5380C] transition-all duration-300 hover:-translate-y-1.5 group shadow-[6px_6px_0px_#101010] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#D5380C] border border-[#FAF6EE]/40 flex items-center justify-center text-[#FAF6EE] group-hover:scale-110 transition-transform shadow-md">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-syne text-3xl font-black text-[#E6D5BD]/20 group-hover:text-[#D5380C] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-syne text-base font-bold text-[#FAF6EE] mb-1">{step.title}</h3>
                    <span className="inline-block text-[10px] font-mono font-bold text-[#D5380C] uppercase mb-2">
                      {step.tag}
                    </span>
                    <p className="text-[#E6D5BD]/75 text-xs leading-relaxed font-sans">{step.description}</p>
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
