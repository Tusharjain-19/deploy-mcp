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
    <section id="tools" className="py-12 sm:py-16 bg-[#101010] border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101010] text-[#E6D5BD] text-xs font-bold mb-3 border border-[#D5360C]">
            <Terminal className="w-3.5 h-3.5 text-[#D5360C]" />
            <span className="font-mono text-[11px]">20 MCP TOOLS SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#E6D5BD] tracking-tight">AUTONOMOUS CAPABILITIES</h2>
          <p className="text-[#E6D5BD]/80 text-sm mt-3">
            Equip your AI pair programmer with deep capabilities across compilation, secrets, domain management, and cloud infrastructure.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative w-full md:w-88">
            <Search className="w-4 h-4 text-[#E6D5BD]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools by name or capability..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#141414] border border-[#E6D5BD]/20 text-xs text-[#E6D5BD] placeholder-[#E6D5BD]/40 focus:outline-none focus:border-[#D5360C] focus:ring-1 focus:ring-[#D5360C] transition-all font-mono"
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
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#D5360C] text-[#E6D5BD] border border-[#E6D5BD] shadow-lg shadow-[#D5360C]/20'
                      : 'bg-[#141414] border border-[#E6D5BD]/15 text-[#E6D5BD]/70 hover:text-[#E6D5BD] hover:border-[#D5360C]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Tools Interactive Grid strictly in 3 Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTools.map(tool => {
            const isExpanded = expandedToolId === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setExpandedToolId(isExpanded ? null : tool.id)}
                className={`p-6 rounded-3xl border-2 transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#161616] border-[#D5360C] shadow-xl shadow-[#D5360C]/10'
                    : 'bg-[#141414] border-[#E6D5BD]/15 hover:border-[#D5360C] hover:bg-[#161616]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-black text-[#E6D5BD] bg-[#D5360C] px-3 py-1 rounded-lg">
                      `{tool.name}`
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#101010] text-[#E6D5BD] border border-[#E6D5BD]/20">
                      {tool.categoryLabel}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-[#E6D5BD]/60 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-[#D5360C]' : ''}`} />
                </div>

                <p className="text-[#E6D5BD]/90 text-xs mt-3 leading-relaxed">{tool.description}</p>

                {/* Expanded Parameter Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#E6D5BD]/10 space-y-3 font-mono text-xs animate-fadeIn">
                    <div>
                      <span className="text-[#E6D5BD]/60 block mb-1 font-sans text-[11px] font-bold">// Input Schema Parameters:</span>
                      <div className="p-3.5 rounded-xl bg-[#101010] text-[#E6D5BD] border border-[#E6D5BD]/15 space-y-1 text-[11px]">
                        {Object.entries(tool.inputSchema).length === 0 ? (
                          <span className="text-[#E6D5BD]/40 italic">None required</span>
                        ) : (
                          Object.entries(tool.inputSchema).map(([key, desc]) => (
                            <p key={key}>
                              <span className="text-[#D5360C] font-black">{key}</span>: <span className="text-[#E6D5BD]/80">{desc}</span>
                            </p>
                          ))
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#E6D5BD]/60 font-sans text-[11px] font-bold">// Example Invocation:</span>
                        <button
                          onClick={(e) => handleCopyExample(tool.exampleUsage, e)}
                          className="text-[10px] font-mono text-[#D5360C] hover:text-[#E6D5BD] flex items-center gap-1 transition-colors font-bold"
                        >
                          {copiedTool === tool.exampleUsage ? (
                            <>
                              <Check className="w-3 h-3 text-[#E6D5BD]" />
                              <span>COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#101010] text-[#E6D5BD] border border-[#D5360C] text-[11px] overflow-x-auto font-bold">
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
