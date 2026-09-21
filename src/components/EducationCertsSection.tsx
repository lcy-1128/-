import React, { useState } from 'react';
import { Sparkles, GraduationCap, Award, CheckCircle2, ArrowUpRight, ShieldCheck, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data/portfolioData';

interface EducationCertsSectionProps {
  onContactClick: () => void;
}

export const EducationCertsSection: React.FC<EducationCertsSectionProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'itq' | 'mos'>('all');

  return (
    <section id="education" className="py-20 sm:py-28 bg-slate-50/60 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDUCATION & CREDENTIALS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            체계적인 전공 교육과 공인 자격 증명
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            부산외국어대학교에서의 3개 전공 융합 이수와 KPC·Microsoft 공인 자격 취득으로 검증된 실무 기본기입니다.
          </p>
        </div>

        {/* Two Featured Cards (Inspired by FlowSuite Pricing Comparison layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: University Education */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      ACADEMIC BACKGROUND
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {PERSONAL_INFO.university}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <div className="mt-6 pb-6 border-b border-slate-100">
                <div className="text-xs font-medium text-slate-500">전공 이수 현황</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 flex items-baseline gap-2">
                  <span>3개 전공 융합</span>
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                    Triple Major
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  인문학적 어학 역량과 컴퓨터 과학 엔지니어링, 인공지능 에이전트 개발을 종합적으로 수학하고 있습니다.
                </p>
              </div>

              {/* Majors List */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  이수 전공 및 핵심 연구 분야
                </div>
                {PERSONAL_INFO.majors.map((major) => (
                  <div
                    key={major.title}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span>{major.title}</span>
                        <span className="text-[11px] font-mono font-normal text-slate-500">
                          ({major.en})
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">{major.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50">
                  <span className="text-slate-500 block text-[11px]">학업 집중도</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">AI 부트캠프 연계</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50">
                  <span className="text-slate-500 block text-[11px]">연구 지향점</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">실용 RAG & 자동화</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Certifications */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-blue-500/80 p-7 sm:p-9 shadow-lg shadow-blue-500/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl shadow-xs">
              공인 자격 취득 완료
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      OFFICIAL CERTIFICATES
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Certifications
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-6 pb-6 border-b border-slate-100">
                <div className="text-xs font-medium text-slate-500">실무 자격 내역</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 flex items-baseline gap-2">
                  <span>공인 자격 4종</span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    100% Certified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  국가공인 및 국제공인 오피스 자격증을 통해 실무 문서 작성, 스프레드시트 분석, 프레젠테이션 제작 역량을 공식 검증받았습니다.
                </p>
              </div>

              {/* Certifications List */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  보유 자격증 목록
                </div>
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 flex items-start justify-between gap-3 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span>{cert.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-blue-200 text-blue-700 font-semibold">
                            {cert.badge}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">{cert.description}</div>
                        <div className="text-[11px] text-slate-400 mt-1">발급기관: {cert.issuer}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 shrink-0 self-center">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={onContactClick}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>이력서 및 증빙자료 요청하기</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
