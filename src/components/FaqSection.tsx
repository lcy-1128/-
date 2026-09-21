import React, { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              궁금하신 질문에 <br />
              <span className="text-blue-600">명확히 답변드립니다</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              3개 전공 이수 과정, AI 부트캠프 프로젝트 실습 경험, 협업 및 인턴십 채용 관련 자주 묻는 질문들을 모았습니다.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
              <MessageSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-600">
                추가적인 질문이나 커피챗 제안은 언제든 편하게 이메일(<strong>cyl20061128@gmail.com</strong>)로 보내주세요.
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items (Directly matching FlowSuite layout) */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed pr-8 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
