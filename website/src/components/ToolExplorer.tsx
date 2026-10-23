import React, { useState } from 'react';
import { MCP_TOOLS, McpTool } from '../data/toolsData';
import { Search, Filter, Terminal, Shield, Wrench, Globe, GitBranch, Cpu, ChevronRight, Copy, Check } from 'lucide-react';

export const ToolExplorer: React.FC = () => {
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
    navigator.clipboard.writeText(example);
    setCopiedTool(example);
    setTimeout(() => setCopiedTool(null), 2000);
  };

  return (
    <section id="tools" className="py-12 sm:py-16 bg-[#000000] border-t border-[#F6E3B8]/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] text-[#F6E3B8] text-xs font-bold mb-3 border border-[#E7BA05]/40">
            <Terminal className="w-3.5 h-3.5 text-[#E7BA05]" />
            <span className="font-mono text-[11px]">20 MCP TOOLS SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F6E3B8] tracking-tight">AUTONOMOUS CAPABILITIES</h2>
          <p className="text-[#F6E3B8]/80 text-sm mt-3">
            Equip your AI pair programmer with deep capabilities across compilation, secrets, domain management, and cloud infrastructure.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative w-full md:w-88">
            <Search className="w-4 h-4 text-[#F6E3B8]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools by name or capability..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#000000] border border-[#F6E3B8]/20 text-xs text-[#F6E3B8] placeholder-[#F6E3B8]/40 focus:outline-none focus:border-[#E7BA05] focus:ring-1 focus:ring-[#E7BA05] transition-all font-mono"
            />
          </div>

          {/* Category Capsule Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map(cat => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E7BA05] text-[#000000] border border-[#E7BA05] shadow-lg shadow-[#E7BA05]/20 font-black'
                      : 'bg-[#000000] border border-[#F6E3B8]/15 text-[#F6E3B8]/70 hover:text-[#F6E3B8] hover:border-[#E7BA05]'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTools.map(tool => {
            const isExpanded = expandedToolId === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setExpandedToolId(isExpanded ? null : tool.id)}
                className={`p-6 rounded-3xl border transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#000000] border-2 border-[#E7BA05] shadow-xl shadow-[#E7BA05]/10'
                    : 'bg-[#000000] border-[#F6E3B8]/20 hover:border-[#E7BA05]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-black text-[#000000] bg-[#E7BA05] px-3 py-1 rounded-lg">
                      `{tool.name}`
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#000000] text-[#F6E3B8] border border-[#F6E3B8]/20">
                      {tool.categoryLabel}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-[#F6E3B8]/60 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-[#E7BA05]' : ''}`} />
                </div>

                <p className="text-[#F6E3B8]/90 text-xs mt-3 leading-relaxed">{tool.description}</p>

                {/* Expanded Parameter Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#F6E3B8]/15 space-y-3 font-mono text-xs animate-fadeIn">
                    <div>
                      <span className="text-[#F6E3B8]/60 block mb-1 font-sans text-[11px] font-bold">// Input Schema Parameters:</span>
                      <div className="p-3.5 rounded-xl bg-[#000000] text-[#F6E3B8] border border-[#F6E3B8]/15 space-y-1 text-[11px]">
                        {Object.entries(tool.inputSchema).length === 0 ? (
                          <span className="text-[#F6E3B8]/40 italic">None required</span>
                        ) : (
                          Object.entries(tool.inputSchema).map(([key, desc]) => (
                            <p key={key}>
                              <span className="text-[#E7BA05] font-black">{key}</span>: <span className="text-[#F6E3B8]/80">{desc}</span>
                            </p>
                          ))
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#F6E3B8]/60 font-sans text-[11px] font-bold">// Example Invocation:</span>
                        <button
                          onClick={(e) => handleCopyExample(tool.exampleUsage, e)}
                          className="text-[10px] font-mono text-[#E7BA05] hover:text-[#F6E3B8] flex items-center gap-1 transition-colors font-bold cursor-pointer"
                        >
                          {copiedTool === tool.exampleUsage ? (
                            <>
                              <Check className="w-3 h-3 text-[#6B9E5A]" />
                              <span className="text-[#6B9E5A]">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#000000] text-[#F6E3B8] border border-[#E7BA05] text-[11px] overflow-x-auto font-bold">
                        {tool.exampleUsage}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
