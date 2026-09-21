import React from 'react';
import { Sparkles, Mail, Phone, MapPin, ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {PERSONAL_INFO.englishName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              부산외국어대학교 영어 · 소프트웨어 · AI에이전트개발 전공.
              언어의 직관과 컴퓨터 과학의 논리를 융합하여 실용적인 AI 에이전트와 자동화 시스템을 제작합니다.
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>위치: {PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-blue-600 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              포트폴리오 섹션
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About Me (소개 및 융합 역량)
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-600 transition-colors">
                  Education & Certifications (학력 및 공인 자격)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Projects & Experience (부트캠프 실무 실습)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Skills Matrix (AI · 개발 · 오피스)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  FAQ (자주 묻는 질문)
                </a>
              </li>
            </ul>
          </div>

          {/* Bootcamp Projects Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              핵심 AI 프로젝트
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-500">
                <span className="font-semibold text-slate-700">[초급]</span> n8n을 활용한 AI 자동화 실습
              </li>
              <li className="text-slate-500">
                <span className="font-semibold text-slate-700">[초급]</span> AI 기반 부산 여행 맞춤형 추천 서비스
              </li>
              <li className="text-slate-500">
                <span className="font-semibold text-slate-700">[중급]</span> Python 텍스트 데이터 분석 & TF-IDF
              </li>
              <li className="text-slate-500">
                <span className="font-semibold text-slate-700">[중급]</span> 부산외대 학사공지 기반 RAG 시스템
              </li>
              <li className="text-slate-500">
                <span className="font-semibold text-slate-700">[고급]</span> 언어 서비스 개발을 통한 LLM 구조 이해
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} 이채영 (LEE CHAE YEONG). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-500">
              <span>Designed with FlowSuite Aesthetic</span>
            </span>
            <span>•</span>
            <span className="text-emerald-600 font-medium">Ready for GitHub & Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
