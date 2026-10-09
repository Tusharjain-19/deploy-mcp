import React, { useState, useEffect } from 'react';
import { PixelLogoHeader } from '../PixelLogoHeader';
import { StarburstIcon } from '../StarburstIcon';
import { Terminal, Cpu, ShieldCheck, Rocket, Play, Pause, RefreshCw, Copy, Check, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { playClickSound, playKeySound, playSuccessSound } from '../../utils/soundEffects';

interface Frame02Props {
  onNextFrame: () => void;
  onPrevFrame: () => void;
}

interface SimulationStep {
  tool?: string;
  args?: string;
  output: string;
  type: 'ai' | 'tool' | 'secret' | 'success';
}

export const Frame02Terminal: React.FC<Frame02Props> = ({ onNextFrame, onPrevFrame }) => {
  const [selectedFramework, setSelectedFramework] = useState<'next' | 'vite' | 'astro' | 'static'>('next');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const stepsData: Record<string, SimulationStep[]> = {
    next: [
      {
        output: 'Agent initiating governed Model Context Protocol connection over stdio...',
        type: 'ai'
      },
      {
        tool: 'detect_project()',
        args: '{ path: "./my-next-app" }',
        output: '✔ Detected Next.js 14 (App Router) • TypeScript 5.5 • Node 20 LTS',
        type: 'tool'
      },
      {
        tool: 'check_project()',
        args: '{ path: "./my-next-app" }',
        output: '✔ Local dry-run compilation: next build passed (0 errors, 0 warnings)',
        type: 'tool'
      },
      {
        tool: 'sync_env()',
        args: '{ keys: ["DATABASE_URL", "AUTH_SECRET"] }',
        output: '🔒 Zero-Trust TLS Sync: Transmitted 2 secret keys to Vercel (Values isolated)',
        type: 'secret'
      },
      {
        tool: 'deploy_to_vercel()',
        args: '{ target: "production", framework: "nextjs" }',
        output: '🚀 Vercel Cloud Build complete in 12.4s • Edge CDN routing configured',
        type: 'tool'
      },
      {
        output: '🎉 DEPLOYED PRODUCTION LIVE: https://my-next-app.vercel.app (200 OK)',
        type: 'success'
      }
    ],
    vite: [
      {
        output: 'Agent verifying Vite React SPA build manifests...',
        type: 'ai'
      },
      {
        tool: 'detect_project()',
        args: '{ path: "./vite-dashboard" }',
        output: '✔ Detected React 18 + Vite 5.4 • Scripts: tsc && vite build',
        type: 'tool'
      },
      {
        tool: 'check_project()',
        args: '{ path: "./vite-dashboard" }',
        output: '✔ Local dry-run: Dist assets compiled in 1.4s (0 errors)',
        type: 'tool'
      },
      {
        tool: 'sync_env()',
        args: '{ keys: ["VITE_API_ENDPOINT"] }',
        output: '🔒 Zero-Trust Sync: Synced VITE_API_ENDPOINT to Vercel Project Environment',
        type: 'secret'
      },
      {
        tool: 'deploy_to_vercel()',
        args: '{ target: "production" }',
        output: '🚀 SPA Deployment active • Global Edge CDN deployment verified',
        type: 'tool'
      },
      {
        output: '🎉 DEPLOYED PRODUCTION LIVE: https://vite-dashboard.vercel.app (200 OK)',
        type: 'success'
      }
    ],
    astro: [
      {
        output: 'Agent configuring Astro SSR + Island architecture deployment...',
        type: 'ai'
      },
      {
        tool: 'detect_project()',
        args: '{ path: "./astro-blog" }',
        output: '✔ Detected Astro 4.10 + Tailwind • Hybrid server output mode',
        type: 'tool'
      },
      {
        tool: 'check_project()',
        args: '{ path: "./astro-blog" }',
        output: '✔ Local dry-run compilation verified with 0 diagnostic issues',
        type: 'tool'
      },
      {
        tool: 'deploy_to_vercel()',
        args: '{ target: "production" }',
        output: '🚀 Serverless Edge adapter deployed to Vercel global infrastructure',
        type: 'tool'
      },
      {
        output: '🎉 DEPLOYED PRODUCTION LIVE: https://astro-blog.vercel.app (200 OK)',
        type: 'success'
      }
    ],
    static: [
      {
        output: 'Agent inspecting static HTML/CSS/JS directory...',
        type: 'ai'
      },
      {
        tool: 'detect_project()',
        args: '{ path: "./landing-page" }',
        output: '✔ Detected Static Site: index.html, assets, styles.css',
        type: 'tool'
      },
      {
        tool: 'check_project()',
        args: '{ path: "./landing-page" }',
        output: '✔ Validated HTML5 structure, asset paths, and mime types',
        type: 'tool'
      },
      {
        tool: 'deploy_to_vercel()',
        args: '{ target: "production" }',
        output: '🚀 Instant static upload to Vercel Edge Cache (0s serverless cold start)',
        type: 'tool'
      },
      {
        output: '🎉 DEPLOYED PRODUCTION LIVE: https://static-landing.vercel.app (200 OK)',
        type: 'success'
      }
    ]
  };

  const currentSteps = stepsData[selectedFramework];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIndex(prev => {
        const next = (prev + 1) % currentSteps.length;
        if (next === currentSteps.length - 1) {
          playSuccessSound();
        } else {
          playKeySound();
        }
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, currentSteps.length]);

  const handleCopyLiveUrl = (url: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
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
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">FRAME 02 // CONSOLE</span>
            <span className="text-[10px] font-mono text-[#D5380C] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#161616] border border-[#D5380C]/30">
              LIVE SIMULATION
            </span>
          </div>
        </div>

        {/* Framework Selector Pills */}
        <div className="flex items-center gap-1.5 bg-[#161616] p-1 rounded-full border border-[#E6D5B0]/20 font-mono text-xs">
          {(['next', 'vite', 'astro', 'static'] as const).map(fw => (
            <button
              key={fw}
              onClick={() => { playClickSound(); setSelectedFramework(fw); setCurrentStepIndex(0); }}
              className={`px-3 py-1 rounded-full font-bold uppercase transition-all ${
                selectedFramework === fw
                  ? 'bg-[#D5380C] text-[#FAF6EE] shadow-[2px_2px_0px_#FAF6EE]'
                  : 'text-[#E6D5B0]/70 hover:text-[#FAF6EE]'
              }`}
            >
              {fw === 'next' ? 'Next.js' : fw === 'vite' ? 'Vite React' : fw === 'astro' ? 'Astro' : 'Static HTML'}
            </button>
          ))}
        </div>
      </div>

      {/* TERMINAL BODY */}
      <div className="relative z-10 my-auto py-6 max-w-6xl mx-auto w-full space-y-6">
        
        {/* BRAND PIXEL HEADER */}
        <div className="bg-[#141414] rounded-3xl border-2 border-[#E6D5B0]/20 p-6 sm:p-8 shadow-[8px_8px_0px_#101010] relative overflow-hidden">
          
          <PixelLogoHeader />

          {/* Controls Bar */}
          <div className="mt-6 pt-4 border-t border-[#E6D5B0]/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                onClick={() => { playClickSound(); setIsPlaying(!isPlaying); }}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#181818] border border-[#E6D5B0]/30 hover:border-[#D5380C] text-[#FAF6EE] transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3 text-[#F1B333]" /> : <Play className="w-3 h-3 text-[#D5380C]" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>
              <button
                onClick={() => { playClickSound(); setCurrentStepIndex(0); }}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#181818] border border-[#E6D5B0]/30 hover:border-[#D5380C] text-[#FAF6EE] transition-colors"
              >
                <RefreshCw className="w-3 h-3 text-[#E6D5B0]" />
                <span>RESTART</span>
              </button>
            </div>

            <div className="text-[11px] text-[#E6D5B0]/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
              <span>STEP {currentStepIndex + 1} OF {currentSteps.length}</span>
            </div>
          </div>

          {/* Terminal Screen Container */}
          <div className="mt-4 rounded-2xl bg-[#0C0C0C] border border-[#E6D5B0]/15 p-5 font-mono text-xs sm:text-sm space-y-3.5 shadow-inner min-h-[260px]">
            {currentSteps.slice(0, currentStepIndex + 1).map((step, idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 animate-fadeIn ${
                  idx === currentStepIndex ? 'opacity-100' : 'opacity-80'
                }`}
              >
                {step.tool && (
                  <div className="flex items-center gap-2 text-[#FAF6EE] font-bold text-xs pb-1">
                    <span className="text-[#D5380C] select-none">▶</span>
                    <span>MCP Call:</span>
                    <span className="bg-[#161616] px-2 py-0.5 rounded border border-[#FAF6EE]/30">{step.tool}</span>
                    <span className="text-[#E6D5B0]/50 text-[11px] font-normal">{step.args}</span>
                  </div>
                )}

                <div
                  className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                    step.type === 'success'
                      ? 'bg-[#122416] border-[#0C9367] text-[#FAF6EE]'
                      : step.type === 'secret'
                      ? 'bg-[#1c1814] border-[#F1B333]/40 text-[#F1B333]'
                      : 'bg-[#141414] border-[#E6D5B0]/15 text-[#E6D5B0]'
                  }`}
                >
                  {step.type === 'success' ? (
                    <Rocket className="w-4 h-4 text-[#0C9367] shrink-0 mt-0.5" />
                  ) : step.type === 'secret' ? (
                    <ShieldCheck className="w-4 h-4 text-[#F1B333] shrink-0 mt-0.5" />
                  ) : (
                    <Cpu className="w-4 h-4 text-[#D5380C] shrink-0 mt-0.5" />
                  )}

                  <div className="flex-1 overflow-x-auto">
                    <p className="font-medium leading-relaxed">{step.output}</p>
                    
                    {step.type === 'success' && (
                      <div className="mt-3 pt-2 border-t border-[#0C9367]/30 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => handleCopyLiveUrl('https://my-next-app.vercel.app')}
                          className="px-3 py-1 rounded-full bg-[#0C9367] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0a7a55] transition-all flex items-center gap-1.5"
                        >
                          {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedUrl ? 'Copied URL!' : 'Copy Deployment URL'}</span>
                        </button>
                        <a
                          href="https://my-next-app.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#FAF6EE] hover:underline flex items-center gap-1 font-mono"
                        >
                          <span>Open in Browser</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* FOOTER BAR OF FRAME 02 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <button
          onClick={() => { playClickSound(); onPrevFrame(); }}
          className="flex items-center gap-1 text-[#E6D5B0] hover:text-[#D5380C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK: FRAME 01 POSTER</span>
        </button>

        <button
          onClick={() => { playClickSound(); onNextFrame(); }}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#D5380C] text-[#FAF6EE] font-bold uppercase tracking-wider hover:bg-[#B82D09] transition-all"
        >
          <span>NEXT: FRAME 03 PROTOCOL</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
