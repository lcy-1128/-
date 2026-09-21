import React from 'react';
import { Sparkles, Cpu, Terminal, FileCheck, Globe, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  onContactClick: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onContactClick }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-sky-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
      {/* Radiant Background Aura (Directly inspired by FlowSuite 'Integrate with leading tools' section) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTEGRATED CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI & Software Skills Matrix
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            인공지능 자동화부터 고성능 RAG 검색, Python 데이터 분석, 글로벌 비즈니스 문서 작성까지 종합적으로 보유한 역량입니다.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="bg-slate-800/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-700/80 p-6 sm:p-8 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                    <div className="text-xs text-slate-400 font-medium">{cat.englishCategory}</div>
                  </div>
                </div>
                <span className="text-xs text-blue-400 font-mono font-semibold">
                  {cat.skills.length} Skills
                </span>
              </div>

              {/* Skills Items */}
              <div className="mt-5 space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-3 hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{skill.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/50 text-sky-300 font-semibold border border-blue-700/50">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <span>스킬셋 기반 프로젝트 제안하기</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
