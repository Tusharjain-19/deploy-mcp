import React, { useState, useEffect } from 'react';
import {
  IconTerminal,
  IconCopy,
  IconCheck,
  IconRefresh,
  IconExternalLink,
  IconShield,
} from './CustomIcons';
import { ScrollParallaxText } from './motion/MotionPrimitives';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { triggerToast } from './ToastNotification';

type CliCommand = 'setup' | 'check' | 'deploy';

interface CommandOutput {
  command: string;
  lines: {
    type: 'prompt' | 'logo' | 'meta' | 'divider' | 'status' | 'success' | 'link';
    text?: string;
    subtext?: string;
  }[];
}

const COMMAND_DATA: Record<CliCommand, CommandOutput> = {
  setup: {
    command: 'npx deploymcp setup',
    lines: [
      { type: 'prompt', text: 'PS D:\\deploy mcp> npx deploymcp setup' },
      { type: 'logo' },
      {
        type: 'meta',
        text: 'Deploy your website in seconds directly from your AI editor.',
        subtext: 'Documentation: https://github.com/Tusharjain-19/deploy-mcp#readme'
      },
      { type: 'divider' },
      { type: 'status', text: 'Status: CONFIGURED (token saved in ~/.deploy-mcp/config.json)' },
      { type: 'status', text: 'Directory: D:\\deploy mcp' },
      { type: 'status', text: 'Enclave: Hardware-isolated local storage active' },
      { type: 'divider' },
      { type: 'success', text: '[OK] Verified Vercel Personal Access Token [Scope: Full Access]' },
      { type: 'success', text: '[OK] Configured stdio RPC transport for Cursor, Claude & Antigravity' }
    ]
  },
  check: {
    command: 'npx deploymcp check',
    lines: [
      { type: 'prompt', text: 'PS D:\\deploy mcp> npx deploymcp check' },
      { type: 'status', text: 'Scanning local workspace AST: D:\\deploy mcp' },
      { type: 'status', text: 'Framework detected: Next.js 14.2 (App Router) + TypeScript 5.5' },
      { type: 'status', text: 'Simulating local pre-flight production build dry-run...' },
      { type: 'divider' },
      { type: 'success', text: '[OK] Syntax compilation: PASSED (< 1.2s)' },
      { type: 'success', text: '[OK] TypeScript strict check: 0 errors, 0 warnings' },
      { type: 'success', text: '[OK] Secret safety audit: 0 uncommitted keys or credentials leaked' },
      { type: 'divider' },
      { type: 'meta', text: 'READY FOR ATOMIC CLOUD TRANSMISSION' }
    ]
  },
  deploy: {
    command: 'npx deploymcp deploy',
    lines: [
      { type: 'prompt', text: 'PS D:\\deploy mcp> npx deploymcp deploy --target=production' },
      { type: 'status', text: 'Bundling verified artifacts with zero-trust local signing...' },
      { type: 'status', text: 'Synchronizing 4 environment keys via encrypted TLS channel...' },
      { type: 'status', text: 'Transmitting payload to Vercel Anycast Edge Network...' },
      { type: 'divider' },
      { type: 'success', text: '[OK] Global Edge Deployment created: dpl_9x2k7a_prod' },
      { type: 'success', text: '[OK] Rollout synchronized across 300+ Edge PoPs (sfo1, iad1, fra1, hnd1)' },
      { type: 'link', text: 'https://deploy-mcp-demo.vercel.app' }
    ]
  }
};

const SPINNER_CHARS = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

const LOADING_STEPS_BY_COMMAND: Record<CliCommand, string[]> = {
  setup: [
    'Resolving @modelcontextprotocol/sdk runtime package',
    'Handshaking local stdio RPC transport bridge',
    'Encapsulating zero-trust hardware secret enclave',
    'Verifying Vercel Anycast authorization scopes'
  ],
  check: [
    'Scanning workspace AST syntax tree for Next.js & TypeScript',
    'Emulating local Turbopack build sandbox',
    'Executing zero-credential leak safety audit',
    'Verifying deterministic AST compilation'
  ],
  deploy: [
    'Signing deployment bundle with hardware key',
    'Synchronizing 4 environment secrets via mutual TLS',
    'Transmitting payload to Vercel Anycast edge network',
    'Verifying live Anycast 200 OK edge health check'
  ]
};

export const TerminalSimulator: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<CliCommand>('setup');
  const [runKey, setRunKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(20);
  const [dotCount, setDotCount] = useState<number>(1);
  const [spinnerIndex, setSpinnerIndex] = useState<number>(0);
  const [visibleLineCount, setVisibleLineCount] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const currentData = COMMAND_DATA[activeCommand];
  const currentLoadingTasks = LOADING_STEPS_BY_COMMAND[activeCommand];

  // Reset and restart simulation on command switch or restart
  useEffect(() => {
    setIsLoading(true);
    setLoadingStep(0);
    setLoadingProgress(20);
    setVisibleLineCount(0);
    setSpinnerIndex(0);

    // 1. Smooth Step-by-Step Task Execution Simulation (1.5s total)
    const taskInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < currentLoadingTasks.length - 1) {
          const nextStep = prev + 1;
          setLoadingProgress(Math.min(95, Math.round((nextStep / currentLoadingTasks.length) * 100)));
          return nextStep;
        }
        return prev;
      });
    }, 380);

    // 2. Loading completion trigger
    const completeTimer = setTimeout(() => {
      clearInterval(taskInterval);
      setLoadingProgress(100);
      setIsLoading(false);
      playSuccessSound();
    }, 1500);

    return () => {
      clearInterval(taskInterval);
      clearTimeout(completeTimer);
    };
  }, [activeCommand, runKey]);

  // Spinner Character Rotation
  useEffect(() => {
    if (!isLoading) return;
    const spinTimer = setInterval(() => {
      setSpinnerIndex(prev => (prev + 1) % SPINNER_CHARS.length);
    }, 80);
    return () => clearInterval(spinTimer);
  }, [isLoading]);

  // Animated Dot Pulse (...)
  useEffect(() => {
    if (!isLoading) return;
    const dotTimer = setInterval(() => {
      setDotCount(prev => (prev % 3) + 1);
    }, 280);
    return () => clearInterval(dotTimer);
  }, [isLoading]);

  // Cascade Output Telemetry Lines after Loading completes
  useEffect(() => {
    if (isLoading) return;

    const lineTimer = setInterval(() => {
      setVisibleLineCount(prev => {
        if (prev < currentData.lines.length) {
          return prev + 1;
        }
        clearInterval(lineTimer);
        return prev;
      });
    }, 180);

    return () => clearInterval(lineTimer);
  }, [isLoading, currentData.lines.length]);

  const handleCommandSwitch = (cmd: CliCommand) => {
    if (cmd === activeCommand) return;
    playClickSound();
    setActiveCommand(cmd);
  };

  const handleCopyCommand = () => {
    playSuccessSound();
    navigator.clipboard.writeText(currentData.command);
    setCopied(true);
    triggerToast(`Command copied: ${currentData.command}`, 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRestart = () => {
    playClickSound();
    setRunKey(prev => prev + 1);
  };

  return (
    <section id="demo" className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-[#000000] border-t border-[#F6E3B8]/15 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Parallax */}
        <ScrollParallaxText speed={16}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#E7BA05] text-[#F6E3B8] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-[#E7BA05] animate-pulse" />
              <span>AUTHENTIC CLI TERMINAL RUNTIME</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#F6E3B8] uppercase tracking-tight">
              REAL TERMINAL TELEMETRY.
            </h2>
            <p className="text-[#F6E3B8]/75 text-xs sm:text-sm mt-2 font-sans">
              Exact console execution in signature Yellow & Butter with Leaf & Brown telemetry. No bloated logs. Just pure developer signal.
            </p>
          </div>
        </ScrollParallaxText>

        {/* Real Terminal Container */}
        <div className="rounded-3xl bg-[#000000] border-2 border-[#F6E3B8]/20 shadow-[10px_10px_0px_#000000] overflow-hidden hover:border-[#E7BA05] transition-all duration-300">
          
          {/* Windows / macOS PowerShell Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#000000] border-b border-[#F6E3B8]/15 gap-3 select-none">
            
            {/* Window Controls (Yellow, Leaf, Butter) */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E7BA05] cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#6B9E5A] cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-[#F6E3B8] cursor-pointer" />
              <span className="ml-3 font-mono text-xs text-[#F6E3B8]/80 font-bold hidden sm:inline">
                PowerShell : D:\deploy mcp
              </span>
            </div>

            {/* Quick Command Selector Chips */}
            <div className="flex items-center gap-1.5 bg-[#000000] p-1 rounded-full border border-[#F6E3B8]/20 font-mono text-xs">
              {(['setup', 'check', 'deploy'] as const).map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleCommandSwitch(cmd)}
                  className={`px-3 py-1 rounded-full font-bold uppercase transition-all cursor-pointer ${
                    activeCommand === cmd
                      ? 'bg-[#E7BA05] text-[#000000] shadow-sm font-black'
                      : 'text-[#F6E3B8]/60 hover:text-[#E7BA05]'
                  }`}
                >
                  npx {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Actions (Copy, Restart) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCommand}
                className="px-3 py-1 rounded-full bg-[#000000] border border-[#F6E3B8]/20 hover:border-[#E7BA05] text-[#F6E3B8] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Copy CLI command"
              >
                {copied ? <IconCheck className="w-3 h-3 text-[#6B9E5A]" /> : <IconCopy className="w-3 h-3 text-[#F6E3B8]/60" />}
                <span>{copied ? 'COPIED' : 'COPY CMD'}</span>
              </button>

              <button
                onClick={handleRestart}
                className="p-1.5 rounded-full bg-[#000000] border border-[#F6E3B8]/20 hover:border-[#E7BA05] text-[#F6E3B8] text-xs transition-colors cursor-pointer"
                title="Re-run terminal sequence"
              >
                <IconRefresh className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Real Terminal Screen Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-[13px] bg-[#000000] space-y-3.5 select-text min-h-[380px] overflow-x-auto leading-relaxed">
            
            {/* Always Display Command Prompt First */}
            <div className="flex items-center gap-2 text-[#F6E3B8] font-bold pb-1">
              <span className="text-[#E7BA05] select-none">PS D:\deploy mcp&gt;</span>
              <span className="text-[#F6E3B8]">{currentData.command}</span>
            </div>

            {/* Loading Screen and Animated Dots */}
            {isLoading && (
              <div className="my-4 p-5 rounded-2xl bg-[#000000] border-2 border-[#E7BA05]/40 shadow-[6px_6px_0px_#000000] space-y-4 select-none animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#F6E3B8]/15">
                  <div className="flex items-center gap-2.5 text-[#F6E3B8]">
                    <span className="text-[#E7BA05] text-base font-bold select-none inline-block w-4 text-center">
                      {SPINNER_CHARS[spinnerIndex]}
                    </span>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#F6E3B8]">
                      INITIALIZING DEPLOY MCP // {activeCommand.toUpperCase()}
                    </span>
                    <span className="text-[#E7BA05] font-black text-sm tracking-widest inline-block w-6">
                      {'.'.repeat(dotCount)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E7BA05] animate-ping" />
                    <span className="text-xs font-mono font-bold text-[#E7BA05]">
                      {loadingProgress}% COMPLETE
                    </span>
                  </div>
                </div>

                {/* Signature Brand Gradient Progress Bar */}
                <div className="w-full bg-[#0a0a0a] h-2.5 rounded-full overflow-hidden border border-[#F6E3B8]/20 p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#E7BA05] via-[#F6E3B8] to-[#6B9E5A] transition-all duration-300 rounded-full"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>

                {/* Step-by-Step Task List with Animated Loading Dots */}
                <div className="space-y-2 pt-1 text-xs">
                  {currentLoadingTasks.map((task, tIdx) => {
                    const isCompleted = tIdx < loadingStep;
                    const isCurrent = tIdx === loadingStep;
                    return (
                      <div
                        key={tIdx}
                        className={`flex items-center justify-between px-3.5 py-2 rounded-xl border transition-all ${
                          isCurrent
                            ? 'bg-[#0a0a0a] border-[#E7BA05] text-[#F6E3B8]'
                            : isCompleted
                            ? 'bg-[#050505] border-[#F6E3B8]/15 text-[#F6E3B8]/80'
                            : 'bg-transparent border-transparent text-[#F6E3B8]/30'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isCompleted ? (
                            <IconCheck className="w-3.5 h-3.5 text-[#6B9E5A]" />
                          ) : isCurrent ? (
                            <span className="text-[#E7BA05] font-black text-sm">●</span>
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-[#F6E3B8]/20 inline-block" />
                          )}
                          <span className={isCurrent ? 'font-bold' : ''}>
                            {task}
                            {isCurrent && (
                              <span className="text-[#E7BA05] ml-1.5 font-bold tracking-widest">
                                {'.'.repeat(dotCount)}
                              </span>
                            )}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono shrink-0">
                          {isCompleted ? (
                            <span className="text-[#6B9E5A] font-bold">[DONE]</span>
                          ) : isCurrent ? (
                            <span className="text-[#E7BA05] font-bold">[IN PROGRESS]</span>
                          ) : (
                            <span className="text-[#F6E3B8]/30">[QUEUED]</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* When Loading Completes, Render Completed Status & Telemetry Lines */}
            {!isLoading && (
              <>
                <div className="flex items-center gap-2 text-xs font-mono text-[#6B9E5A] font-bold py-1 select-none animate-fadeIn">
                  <span>[OK]</span>
                  <span>INITIALIZATION COMPLETED (1.5s)</span>
                  <span className="text-[#F6E3B8]/30">•</span>
                  <span className="text-[#F6E3B8]/70">ALL VERIFIED TELEMETRY READY</span>
                </div>

                {currentData.lines.slice(1, visibleLineCount + 1).map((line, idx) => {

                  // Brand Pixel/ASCII Logo
                  if (line.type === 'logo') {
                    return (
                      <div key={idx} className="py-2 select-none animate-fadeIn">
                        <pre className="font-mono font-black text-xs sm:text-sm text-[#E7BA05] leading-[1.15] tracking-tighter">
{`  ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗    ███╗   ███╗  ██████╗  ██████╗ 
  ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝    ████╗ ████║ ██╔════╝  ██╔══██╗
  ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝     ██╔████╔██║ ██║       ██████╔╝
  ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝      ██║╚██╔╝██║ ██║       ██╔═══╝ 
  ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║       ██║ ╚═╝ ██║ ╚██████╗  ██║     
  ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═════╝  ╚═╝     `}
                        </pre>
                      </div>
                    );
                  }

                  // Explanatory Subheader
                  if (line.type === 'meta') {
                    return (
                      <div key={idx} className="text-[#F6E3B8]/90 space-y-1 py-1 animate-fadeIn">
                        <p>
                          <strong className="text-[#E7BA05]">Deploy MCP</strong> connects your AI assistant (
                          <span className="text-[#E7BA05]">Claude</span> /{' '}
                          <span className="text-[#F6E3B8]">Cursor</span> /{' '}
                          <span className="text-[#6B9E5A]">Antigravity</span>) directly to
                        </p>
                        <p className="text-[#F6E3B8] font-bold">
                          {line.subtext || 'Vercel: zero server costs, environment syncing, and auto-diagnostics handled.'}
                        </p>
                      </div>
                    );
                  }

                  // Divider Line
                  if (line.type === 'divider') {
                    return (
                      <div key={idx} className="text-[#906342]/40 select-none py-0.5">
                        {'─'.repeat(72)}
                      </div>
                    );
                  }

                  // Status Bullet Line
                  if (line.type === 'status') {
                    return (
                      <div key={idx} className="flex items-start gap-2.5 text-[#F6E3B8] animate-fadeIn">
                        <span className="text-[#E7BA05] select-none">•</span>
                        <span>{line.text}</span>
                      </div>
                    );
                  }

                  // Success Bullet Line
                  if (line.type === 'success') {
                    return (
                      <div key={idx} className="flex items-start gap-2 text-[#6B9E5A] font-bold animate-fadeIn">
                        <span>{line.text}</span>
                      </div>
                    );
                  }

                  // Live URL Card
                  if (line.type === 'link') {
                    return (
                      <div key={idx} className="mt-4 p-4 rounded-2xl bg-[#000000] border-2 border-[#6B9E5A] flex flex-wrap items-center justify-between gap-3 animate-fadeIn">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6B9E5A] animate-pulse" />
                          <span className="text-xs text-[#F6E3B8]/60">DEPLOYMENT LIVE:</span>
                          <a
                            href={line.text}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-[#F6E3B8] hover:text-[#E7BA05] underline flex items-center gap-1"
                          >
                            <span>{line.text}</span>
                            <IconExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        <span className="px-2.5 py-0.5 rounded bg-[#6B9E5A]/20 border border-[#6B9E5A] text-[#6B9E5A] text-[10px] font-bold">
                          200 OK • ANYCAST READY
                        </span>
                      </div>
                    );
                  }

                  return null;
                })}
              </>
            )}

            {/* Blinking Terminal Cursor */}
            <div className="flex items-center gap-2 pt-2 text-[#E7BA05]">
              <span className="select-none font-bold">PS D:\deploy mcp&gt;</span>
              <span className="w-2 h-4 bg-[#E7BA05] animate-pulse" />
            </div>

          </div>

          {/* Terminal Bottom Status Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#000000] border-t border-[#F6E3B8]/15 text-xs font-mono text-[#F6E3B8]/70 select-none">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <IconShield className="w-3.5 h-3.5 text-[#6B9E5A]" />
                <span>ISOLATION: <strong className="text-[#F6E3B8]">LOCAL ENCLAVE</strong></span>
              </span>
              <span className="hidden sm:inline">TRANSPORT: <strong className="text-[#E7BA05]">STDIO RPC</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6B9E5A]" />
              <span className="font-bold text-[#F6E3B8]">NODE LTS v20+</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
