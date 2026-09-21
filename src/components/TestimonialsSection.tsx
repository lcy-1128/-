import React from 'react';
import { Sparkles, Quote, Star, User, BookOpen, Compass, Workflow } from 'lucide-react';
import { TESTIMONIALS_INSIGHTS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="insights" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARNING & ENGINEERING MINDSET</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            실습으로 증명한 문제 해결과 배움의 기록
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            단순히 코드를 작성하는 것을 넘어, 비즈니스 가치와 엔지니어링 신뢰성을 함께 고민합니다.
          </p>
        </div>

        {/* 3 Featured Insight Cards (Inspired by FlowSuite Testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Black Card like FlowSuite's dark featured testimonial */}
          <div className="bg-slate-950 text-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-slate-700" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                "{TESTIMONIALS_INSIGHTS[0].quote}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                CY
              </div>
              <div>
                <div className="text-sm font-bold text-white">{TESTIMONIALS_INSIGHTS[0].author}</div>
                <div className="text-xs text-slate-400">{TESTIMONIALS_INSIGHTS[0].role}</div>
              </div>
            </div>
          </div>

          {/* Card 2: Clean White Card */}
          <div className="bg-slate-50/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                {TESTIMONIALS_INSIGHTS[1].tag}
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                "{TESTIMONIALS_INSIGHTS[1].quote}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                CY
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{TESTIMONIALS_INSIGHTS[1].author}</div>
                <div className="text-xs text-slate-500">{TESTIMONIALS_INSIGHTS[1].role}</div>
              </div>
            </div>
          </div>

          {/* Card 3: Clean White Card */}
          <div className="bg-slate-50/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                {TESTIMONIALS_INSIGHTS[2].tag}
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                "{TESTIMONIALS_INSIGHTS[2].quote}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                CY
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{TESTIMONIALS_INSIGHTS[2].author}</div>
                <div className="text-xs text-slate-500">{TESTIMONIALS_INSIGHTS[2].role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
