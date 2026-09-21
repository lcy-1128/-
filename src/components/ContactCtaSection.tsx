import React, { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Github, ExternalLink, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactCtaSectionProps {
  id?: string;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ id = 'contact' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showDeployGuide, setShowDeployGuide] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id={id} className="py-20 sm:py-28 bg-black text-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Box (Directly inspired by FlowSuite bottom dark banner) */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Radial Progress & Stats */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Circular Graphic mirroring screenshot */}
              <div className="w-36 h-36 rounded-full border-4 border-slate-800 border-t-blue-500 border-r-blue-400 flex flex-col items-center justify-center p-4 bg-slate-900/60 shadow-inner">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                  Ready to Work
                </span>
                <span className="text-[9px] text-slate-400">AI & Software</span>
              </div>
              <div className="mt-4 text-xs text-slate-400 font-medium">
                부산외국어대학교 이채영
              </div>
            </div>

            {/* Center Column: Text & CTA */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                새로운 AI 솔루션과 가치를 <br className="hidden sm:inline" />
                <span className="text-blue-400">함께 만들어갈 준비가 되었습니다</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                포트폴리오를 검토해 주셔서 감사합니다. AI 서비스 기획, n8n 업무 자동화, 데이터 분석, RAG 파이프라인 구축 등 협업 및 채용에 관한 문의는 언제든 환영합니다.
              </p>

              {/* Action Buttons & Contact Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>이메일 보내기</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">이메일 복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{PERSONAL_INFO.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              {/* Deployment Info Toggle for Github & Vercel */}
              <div className="pt-4">
                <button
                  onClick={() => setShowDeployGuide(!showDeployGuide)}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-2 underline underline-offset-4"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>
                    {showDeployGuide
                      ? '▲ GitHub 저장 및 Vercel 배포 가이드 닫기'
                      : '▼ GitHub 저장 및 Vercel 배포 가이드 확인하기 (클릭)'}
                  </span>
                </button>

                {showDeployGuide && (
                  <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 text-left">
                    <div className="flex items-center justify-between text-blue-400 font-bold border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-4 h-4" /> GitHub & Vercel 배포 준비 완료
                      </span>
                      <span className="text-[11px] text-emerald-400">Vite SPA Ready</span>
                    </div>
                    <p className="text-slate-400">
                      이 프로젝트는 표준 Vite + React + Tailwind 기반으로 번들링되어 GitHub 리포지토리에 푸시하고 Vercel에 임포트하면 별도 설정 없이 바로 100% 무료 배포됩니다.
                    </p>
                    <div className="p-3 bg-slate-900 rounded-lg space-y-1 text-[11px] text-slate-300">
                      <div className="text-slate-500"># 1. GitHub 커밋 & 푸시</div>
                      <div>git init</div>
                      <div>git add .</div>
                      <div>git commit -m "feat: Lee Chae Yeong portfolio website"</div>
                      <div>git remote add origin https://github.com/사용자아이디/포트폴리오저장소.git</div>
                      <div>git push -u origin main</div>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg space-y-1 text-[11px] text-slate-300">
                      <div className="text-slate-500"># 2. Vercel 배포</div>
                      <div>Vercel 대시보드(vercel.com) &gt; [Add New Project] &gt; GitHub 저장소 선택 &gt; [Deploy] 클릭 끝!</div>
                      <div className="text-emerald-400">Build Command: vite build / Output Directory: dist</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
