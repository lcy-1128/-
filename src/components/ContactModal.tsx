import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Copy, Check, Send, Sparkles, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

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

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[포트폴리오 문의] ${senderOrg ? `${senderOrg} ` : ''}${senderName}`);
    const body = encodeURIComponent(
      `안녕하세요 이채영 님,\n\n${message}\n\n보낸 사람: ${senderName} (${senderOrg})\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden border border-slate-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold text-blue-100 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-xl font-bold">이채영 (LEE CHAE YEONG)에게 연락하기</h2>
          <p className="text-xs text-blue-100 mt-1">
            AI 에이전트, n8n 자동화 및 소프트웨어 개발 협업을 환영합니다.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 gap-2.5 text-xs">
            {/* Email */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">EMAIL</span>
                  <span className="font-semibold text-slate-800">{PERSONAL_INFO.email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? '복사됨' : '복사'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">PHONE</span>
                  <span className="font-semibold text-slate-800">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? '복사됨' : '복사'}</span>
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">LOCATION</span>
                  <span className="font-semibold text-slate-800">{PERSONAL_INFO.location} ({PERSONAL_INFO.locationEn})</span>
                </div>
              </div>
              <span className="text-[11px] text-slate-500 font-medium px-2">원격/부산 상주 가능</span>
            </div>
          </div>

          {/* Quick Email Form */}
          <form onSubmit={handleSendDraft} className="space-y-3 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-700">이메일 바로 작성하여 보내기</div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="성함/담당자명"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="소속 회사/기관 (선택)"
                value={senderOrg}
                onChange={(e) => setSenderOrg(e.target.value)}
                className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <textarea
              required
              rows={3}
              placeholder="문의하실 프로젝트 또는 채용 제안 내용을 간단히 적어주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{sentSuccess ? '메일 클라이언트로 연결됨!' : '이메일 발송하기'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
