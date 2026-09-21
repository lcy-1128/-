import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight, ArrowUpRight, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] text-white pt-12 sm:pt-16 pb-20 sm:pb-32">
      {/* Background Soft Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-white/15 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-sky-200" />
            <span>AI & Software Developer • BUFS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            AI와 소프트웨어로 미래를 자동화하는 <br className="hidden sm:inline" />
            <span className="text-sky-200">개발자 이채영</span>입니다
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-blue-100/95 max-w-3xl mx-auto font-normal leading-relaxed">
            부산외국어대학교에서 <strong>영어 · 소프트웨어 · AI에이전트개발</strong> 3개 전공을 융합 이수하며,
            실무 n8n 자동화 파이프라인, 학사공지 기반 RAG 시스템, Python 텍스트 데이터 분석을 구축해왔습니다.
          </p>

          {/* FlowSuite-inspired Interactive Action Pill */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="w-full sm:w-auto flex-1 flex items-center bg-white rounded-full p-1.5 pl-4 shadow-xl border border-white/30 text-slate-900">
              <Mail className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
              <input
                type="text"
                readOnly
                value={PERSONAL_INFO.email}
                className="bg-transparent border-none text-xs sm:text-sm font-medium text-slate-800 w-full focus:outline-none select-all"
              />
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-1 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>이메일 복사</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-blue-700 hover:bg-blue-50 text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>프로젝트 상담</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="pt-3 flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-blue-100 font-medium">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-200" />
              <span>부산외국어대 3개 전공 재학</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>AI 부트캠프 초·중·고급 수료</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sky-200" />
              <span>부산시 (Busan)</span>
            </div>
          </div>
        </div>

        {/* Floating Mockup Card overlapping into the white area below */}
        <div className="mt-12 sm:mt-16 -mb-28 sm:-mb-44 relative z-20">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};
