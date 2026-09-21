import React from 'react';
import { Sparkles, Languages, Code2, Cpu, Workflow, BarChart2, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            언어의 감각과 소프트웨어 엔지니어링, <br className="hidden sm:inline" />
            <span className="text-blue-600">AI 에이전트의 실전 결합</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            부산외국어대학교에서 영어, 소프트웨어, AI에이전트개발 3개 전공을 동시 이수하며 이론적 기초를 확립하고,
            AI 부트캠프 초급·중급 과정을 통해 실제 동작하는 AI 서비스와 파이프라인을 구축해왔습니다.
          </p>
        </div>

        {/* 4 Feature Cards Grid (Inspired directly by FlowSuite screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Triple Major Fusion */}
          <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            {/* Visual Header Mockup */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 border border-slate-200/80 shadow-xs mb-6 group-hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                  <Layers className="w-4 h-4" /> 3개 전공 융합 프레임워크
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px]">
                  부산외국어대학교
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 pt-4 text-center">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                  <Languages className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900">영어전공</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">글로벌 커뮤니케이션</div>
                </div>
                <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100">
                  <Code2 className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900">소프트웨어</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">알고리즘 및 설계</div>
                </div>
                <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100">
                  <Cpu className="w-5 h-5 text-sky-600 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900">AI에이전트</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">생성형 AI 워크플로우</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                인문학적 통찰과 공학적 실행력의 결합
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                단순 코딩에 그치지 않고, 언어의 구조적 맥락을 파악하여 LLM 프롬프트를 정밀하게 설계하며, 최신 해외 기술 문서와 논문을 직독직해하여 빠르게 습득합니다.
              </p>
            </div>
          </div>

          {/* Card 2: n8n AI Workflow Automation */}
          <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            {/* Visual Header Mockup */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 border border-slate-200/80 shadow-xs mb-6 group-hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                  <Workflow className="w-4 h-4" /> n8n 기반 업무 자동화
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                  작업 시간 75% 절감
                </span>
              </div>
              <div className="pt-3 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-700">Trigger: Webhook / Schedule</span>
                  <span className="text-emerald-600 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/60 border border-blue-100">
                  <span className="text-blue-900 font-medium">AI Agent Node: Summarize & Classify</span>
                  <span className="text-blue-600 font-semibold">Smart Routing</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-700">Output: Slack / Mail / DB Dispatch</span>
                  <span className="text-slate-500">Auto Delivered</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                반복 업무를 0으로 만드는 지능형 자동화
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                n8n을 활용하여 데이터 수집, AI 가공, 조건 분기, 알림 발송까지 한 번의 설정으로 무중단 실행되는 엔드투엔드 자동화 파이프라인을 구축했습니다.
              </p>
            </div>
          </div>

          {/* Card 3: Text Data Analytics & TF-IDF */}
          <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            {/* Visual Header Mockup */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 border border-slate-200/80 shadow-xs mb-6 group-hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-indigo-600 font-bold">
                  <BarChart2 className="w-4 h-4" /> Python 텍스트 데이터 분석
                </span>
                <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[11px]">
                  TF-IDF Scikit-learn
                </span>
              </div>
              <div className="pt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">한국어 형태소 전처리 (KoNLPy)</span>
                  <span className="text-xs font-bold text-slate-800">100% 완료</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-full rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-600">TF-IDF 핵심 키워드 중요도 산출</span>
                  <span className="text-xs font-bold text-indigo-600">Top-K Scored</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                비정형 텍스트에서 비즈니스 인사이트 도출
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Python과 자연어 처리 도구를 활용하여 비정형 한국어 문서의 불용어를 정제하고, TF-IDF 알고리즘으로 문서 핵심 키워드를 정량화했습니다.
              </p>
            </div>
          </div>

          {/* Card 4: RAG System & LLM Architecture */}
          <div className="bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            {/* Visual Header Mockup */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 border border-slate-200/80 shadow-xs mb-6 group-hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                  <BookOpen className="w-4 h-4" /> 학사공지 기반 RAG 아키텍처
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                  환각 제로 설계
                </span>
              </div>
              <div className="pt-3 flex items-center justify-between gap-2 text-center text-xs">
                <div className="flex-1 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900">학사 문서 청킹</div>
                  <div className="text-[10px] text-slate-500">Chunk Splitter</div>
                </div>
                <div className="text-slate-400 font-bold">→</div>
                <div className="flex-1 p-2 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="font-bold text-blue-700">벡터 임베딩</div>
                  <div className="text-[10px] text-blue-600">Cosine Similarity</div>
                </div>
                <div className="text-slate-400 font-bold">→</div>
                <div className="flex-1 p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                  <div className="font-bold text-emerald-700">근거기반 생성</div>
                  <div className="text-[10px] text-emerald-600">Verified Answer</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                신뢰할 수 있는 RAG 검색 증강 생성 시스템
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                부산외국어대학교 학사공지를 벡터화하여 질문과 가장 일치하는 문맥만을 추출하고, 거짓 정보 없이 공문서에 기반한 정확한 학사 질의응답을 구현했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
