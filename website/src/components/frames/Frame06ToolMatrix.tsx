import React, { useState } from 'react';
import { MCP_TOOLS, McpTool } from '../../data/toolsData';
import { Search, Terminal, Shield, Wrench, Globe, GitBranch, Cpu, ChevronRight, Copy, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../../utils/soundEffects';

interface Frame06Props {
  onNextFrame: () => void;
  onPrevFrame: () => void;
}

export const Frame06ToolMatrix: React.FC<Frame06Props> = ({ onNextFrame, onPrevFrame }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedToolId, setExpandedToolId] = useState<string | null>('smart_deploy');
  const [copiedTool, setCopiedTool] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All 20 Tools', icon: Wrench },
    { id: 'smart', label: 'Smart Deploy', icon: Terminal },
    { id: 'domains', label: 'Custom Domains', icon: Globe },
    { id: 'secrets', label: 'Secrets & Env', icon: Shield },
    { id: 'git', label: 'Git Control', icon: GitBranch },
    { id: 'vercel', label: 'Vercel Telemetry', icon: Cpu },
  ];

  const filteredTools = MCP_TOOLS.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyExample = (example: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playSuccessSound();
    navigator.clipboard.writeText(example);
    setCopiedTool(example);
    setTimeout(() => setCopiedTool(null), 2000);
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
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">FRAME 06 // TOOLBOX</span>
            <span className="text-[10px] font-mono text-[#D5380C] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#161616] border border-[#D5380C]/40">
              20 MCP TOOLS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#E6D5B0]/80">
          <span>MODEL CONTEXT PROTOCOL SPECIFICATION</span>
        </div>
      </div>

      {/* TOOL MATRIX BODY */}
      <div className="relative z-10 my-auto py-6 max-w-7xl mx-auto w-full space-y-6">
        
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#D5380C] text-[#FAF6EE] font-mono text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>ATOMIC AGENT CAPABILITIES</span>
          </div>
          <h2 className="font-syne font-black text-3xl sm:text-5xl text-[#FAF6EE] uppercase leading-tight">
            20 GOVERNED MCP TOOLS.
          </h2>
          <p className="text-sm sm:text-base text-[#E6D5B0]/80">
            Every tool is isolated, type-checked, and authenticated. Explore the full suite exposed to your AI pair programmer.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#E6D5B0]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools by name..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#161616] border border-[#E6D5B0]/20 text-xs text-[#FAF6EE] placeholder-[#E6D5B0]/40 focus:outline-none focus:border-[#D5380C] font-mono"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map(cat => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => { playClickSound(); setSelectedCategory(cat.id); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                    isActive
                      ? 'bg-[#D5380C] text-[#FAF6EE] border border-[#FAF6EE]'
                      : 'bg-[#161616] border border-[#E6D5B0]/15 text-[#E6D5B0]/70 hover:text-[#FAF6EE]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[380px] overflow-y-auto pr-1">
          {filteredTools.map(tool => {
            const isExpanded = expandedToolId === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => { playClickSound(); setExpandedToolId(isExpanded ? null : tool.id); }}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  isExpanded
                    ? 'bg-[#181818] border-[#D5380C] shadow-[4px_4px_0px_#D5380C]'
                    : 'bg-[#141414] border-[#E6D5B0]/15 hover:border-[#FAF6EE]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D5380C]" />
                    <code className="text-xs font-mono font-bold text-[#FAF6EE]">{tool.name}</code>
                  </div>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                    tool.readOnly ? 'bg-[#101010] text-[#F1B333] border border-[#F1B333]/30' : 'bg-[#D5380C]/20 text-[#FAF6EE] border border-[#D5380C]/40'
                  }`}>
                    {tool.readOnly ? 'READ ONLY' : 'ACTION'}
                  </span>
                </div>

                <p className="text-xs text-[#E6D5B0]/80 font-sans leading-snug line-clamp-2">
                  {tool.description}
                </p>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-[#E6D5B0]/15 space-y-2 animate-fadeIn font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-[#0C0C0C] border border-[#E6D5B0]/10 flex items-center justify-between">
                      <span className="text-[11px] text-[#FAF6EE] break-all">{tool.exampleUsage}</span>
                      <button
                        onClick={(e) => handleCopyExample(tool.exampleUsage, e)}
                        className="p-1 rounded text-[#E6D5B0]/70 hover:text-white shrink-0 ml-2"
                        title="Copy tool invocation example"
                      >
                        {copiedTool === tool.exampleUsage ? <Check className="w-3.5 h-3.5 text-[#FAF6EE]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* FOOTER BAR OF FRAME 06 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <button
          onClick={() => { playClickSound(); onPrevFrame(); }}
          className="flex items-center gap-1 text-[#E6D5B0] hover:text-[#D5380C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK: FRAME 05 IDE SETUP</span>
        </button>

        <button
          onClick={() => { playClickSound(); onNextFrame(); }}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#D5380C] text-[#FAF6EE] font-bold uppercase tracking-wider hover:bg-[#B82D09] transition-all"
        >
          <span>NEXT: FRAME 07 DISPATCH & FAQ</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
