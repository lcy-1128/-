import React from 'react';
import { Cpu, Terminal, FileCode, CheckCircle2, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

export const TickerSection: React.FC = () => {
  const tools = [
    { name: 'Python', role: 'Programming & Data' },
    { name: 'n8n', role: 'AI Workflow Automation' },
    { name: 'RAG Architecture', role: 'Vector Search & QA' },
    { name: 'LLM Systems', role: 'Language Models' },
    { name: 'TF-IDF', role: 'Keyword Weight Analysis' },
    { name: 'ITQ 아래한글', role: '공인 자격' },
    { name: 'ITQ 한글엑셀', role: '공인 자격' },
    { name: 'ITQ 파워포인트', role: '공인 자격' },
    { name: 'MOS 워드', role: 'MS 국제 자격' },
    { name: 'Git / GitHub', role: 'Version Control' }
  ];

  return (
    <div className="pt-36 sm:pt-52 pb-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
          AI 에이전트 개발 및 자동화 실무 툴체인
        </p>

        {/* Badges Grid / Flex */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 group shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600">
                {tool.name}
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                | {tool.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
