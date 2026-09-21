import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Compass,
  FileSearch,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Workflow,
  ExternalLink,
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

type MockTab = 'rag' | 'travel' | 'n8n' | 'tfidf';

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MockTab>('rag');

  // RAG Interactive State
  const [ragQuery, setRagQuery] = useState('2026학년도 장학금 신청 일정 및 선발 기준');
  const [isRagSearching, setIsRagSearching] = useState(false);
  const [ragResultVisible, setRagResultVisible] = useState(true);

  // Travel Recommender State
  const [travelTheme, setTravelTheme] = useState('바다 & 감성 힐링');
  const [travelDuration, setTravelDuration] = useState('1박 2일');
  const [isTravelGenerating, setIsTravelGenerating] = useState(false);

  // n8n Workflow State
  const [isWorkflowRunning, setIsWorkflowRunning] = useState(false);
  const [workflowStatus, setWorkflowStatus] = useState<'idle' | 'running' | 'completed'>('idle');

  const handleRagSearch = (queryText: string) => {
    setRagQuery(queryText);
    setIsRagSearching(true);
    setRagResultVisible(false);
    setTimeout(() => {
      setIsRagSearching(false);
      setRagResultVisible(true);
    }, 450);
  };

  const handleTravelGenerate = () => {
    setIsTravelGenerating(true);
    setTimeout(() => {
      setIsTravelGenerating(false);
    }, 400);
  };

  const handleRunWorkflow = () => {
    setIsWorkflowRunning(true);
    setWorkflowStatus('running');
    setTimeout(() => {
      setIsWorkflowRunning(false);
      setWorkflowStatus('completed');
    }, 700);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden text-slate-800 transition-all">
      {/* Top Window Bar */}
      <div className="bg-slate-900 px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
          <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
            portfolio-live-demo.chaeyeong.dev
          </span>
        </div>

        {/* Tab Badges */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl text-xs">
          <button
            onClick={() => setActiveTab('rag')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'rag'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <FileSearch className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">학사공지 RAG</span>
            <span className="xs:hidden">RAG</span>
          </button>
          <button
            onClick={() => setActiveTab('travel')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'travel'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">부산 여행 AI</span>
            <span className="xs:hidden">여행 AI</span>
          </button>
          <button
            onClick={() => setActiveTab('n8n')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'n8n'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">n8n 자동화</span>
            <span className="xs:hidden">n8n</span>
          </button>
          <button
            onClick={() => setActiveTab('tfidf')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'tfidf'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>TF-IDF</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Interactive Demo</span>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="p-4 sm:p-7 bg-slate-50/60">
        {/* TAB 1: RAG System */}
        {activeTab === 'rag' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI 부트캠프 중급 프로젝트 실증 시뮬레이터</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  부산외국어대학교 학사공지 기반 RAG (검색 증강 생성)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                  Vector Store: 500+ Chunks
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  Cosine Similarity Top-3
                </span>
              </div>
            </div>

            {/* Quick Chips */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-500 font-medium">자주 묻는 학사 질문:</span>
              {[
                '2026학년도 장학금 신청 일정 및 선발 기준',
                '소프트웨어·AI에이전트전공 졸업 이수학점',
                '동계 계절학기 수강신청 및 성적 반영'
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleRagSearch(chip)}
                  className={`px-3 py-1.5 rounded-lg border text-left transition-all ${
                    ragQuery === chip
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-medium'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100/70'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Search Input Bar */}
            <div className="relative">
              <input
                type="text"
                value={ragQuery}
                onChange={(e) => setRagQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRagSearch(ragQuery)}
                placeholder="학사 공지와 관련된 질문을 입력해보세요..."
                className="w-full pl-11 pr-24 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <button
                onClick={() => handleRagSearch(ragQuery)}
                disabled={isRagSearching}
                className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1"
              >
                {isRagSearching ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>검색중</span>
                  </>
                ) : (
                  <>
                    <span>질문하기</span>
                    <ArrowRight className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>

            {/* Simulated RAG Pipeline Visual */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 pt-1">
              {/* Left: Retrieved Document Chunks (Evidence) */}
              <div className="md:col-span-5 bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pb-1.5 border-b border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-blue-600" />
                    추출된 학사공지 청크 (Retrieved Chunks)
                  </span>
                  <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    유사도 94.2%
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-600 max-h-48 overflow-y-auto pr-1">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="font-semibold text-slate-800 text-[11px] mb-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      [공지] 2026학년도 교내외 장학금 신청 세부지침
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      "직전학기 취득학점 12학점 이상 및 평점 2.5 이상 재학생 대상. 다학제 융합 전공자(SW, AI)에게는 산학협력 특별 가산점 부여..."
                    </p>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="font-semibold text-slate-800 text-[11px] mb-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                      [학사규정] 제42조 융합전공 이수기준
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      "영어전공, 소프트웨어전공, AI에이전트개발전공 다중이수 시 주전공 36학점 및 각 전공별 지정 필수과목 이수 필수..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Synthesized Answer */}
              <div className="md:col-span-7 bg-white p-4 rounded-xl border border-blue-100 shadow-sm space-y-2.5">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <span>RAG 생성 신뢰 답변 (Hallucination-Free)</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    근거 공지 100% 일치
                  </span>
                </div>

                {ragResultVisible ? (
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <p className="font-medium text-slate-900">
                      질문하신 <span className="text-blue-600 font-semibold">"{ragQuery}"</span>에 대한 학사공지 공식 답변입니다:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                      <li>
                        <strong>신청 기간:</strong> 매 학기 개강 4주 전부터 학사정보시스템을 통해 온라인 접수가 진행됩니다.
                      </li>
                      <li>
                        <strong>신청 자격:</strong> 직전 학기 12학점 이상 이수 및 성적 평점 2.5 이상 취득자.
                      </li>
                      <li>
                        <strong>특이 사항:</strong> 소프트웨어 및 AI에이전트개발전공 부트캠프 프로젝트 이수자의 경우 <strong>산학 가산점 및 장학금 우선 심사 대상</strong>에 포함됩니다.
                      </li>
                    </ul>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>출처: 부산외국어대학교 교무처 학생지원팀 공지 제2026-104호</span>
                      <span className="text-blue-600 font-semibold">검증 완료</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 flex flex-col items-center justify-center text-slate-400 space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
                    <span className="text-xs">학사공지 벡터 스토어에서 근거 문맥 추출 중...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Busan Travel Recommender */}
        {activeTab === 'travel' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>AI 부트캠프 초급 프로젝트 실증 시뮬레이터</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  AI 기반 부산 여행 맞춤형 추천 자동화 서비스
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold self-start sm:self-auto">
                부산 토박이 데이터셋 + LLM 추천 알고리즘
              </span>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  선호 여행 테마
                </label>
                <select
                  value={travelTheme}
                  onChange={(e) => setTravelTheme(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600"
                >
                  <option>바다 & 감성 힐링</option>
                  <option>부산 로컬 미식 탐방</option>
                  <option>역사 & 원도심 골목 산책</option>
                  <option>카페 투어 & 오션뷰 스팟</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  여행 일정
                </label>
                <select
                  value={travelDuration}
                  onChange={(e) => setTravelDuration(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600"
                >
                  <option>당일치기 알짜 코스</option>
                  <option>1박 2일</option>
                  <option>2박 3일</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleTravelGenerate}
                  disabled={isTravelGenerating}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>맞춤 코스 재생성</span>
                </button>
              </div>
            </div>

            {/* Generated Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Stop 01 • 오전
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-2">광안리 해변 & 민락 수변 산책</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  광안대교 오션뷰 브런치 카페에서 하루를 시작하며 탁 트인 바다 전망 감상.
                </p>
                <div className="mt-3 text-[11px] text-slate-500 font-medium">동선 최적화: 도보 이동 가능</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Stop 02 • 오후
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-2">영도 흰여울문화마을 & 피아크</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  해안 절벽을 따라 늘어선 독립서점과 감성 카페에서 부산 고유의 바다 정취 체험.
                </p>
                <div className="mt-3 text-[11px] text-slate-500 font-medium">소요 시간: 약 2.5시간</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Stop 03 • 저녁
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-2">해운대 블루라인파크 & 야경</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  해변열차를 타고 청사포 다릿돌전망대 일몰 관람 후 해운대 포장마차 미식 투어.
                </p>
                <div className="mt-3 text-[11px] text-slate-500 font-medium">AI 매칭 점수: 98점</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: n8n Workflow Automation */}
        {activeTab === 'n8n' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>AI 부트캠프 초급 프로젝트 실증 시뮬레이터</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  n8n 기반 AI 업무 자동화 파이프라인
                </h3>
              </div>
              <button
                onClick={handleRunWorkflow}
                disabled={isWorkflowRunning}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 self-start sm:self-auto"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isWorkflowRunning ? 'animate-spin' : ''}`} />
                <span>파이프라인 실행 테스트</span>
              </button>
            </div>

            {/* Visual Node Diagram */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-800 pb-2">
                <span>WORKFLOW ENGINE: n8n v1.42 • 4 NODES LINKED</span>
                <span className={workflowStatus === 'completed' ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                  STATUS: {workflowStatus === 'completed' ? 'SUCCESS 200 OK' : isWorkflowRunning ? 'EXECUTING...' : 'STANDBY'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {/* Node 1 */}
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 relative">
                  <span className="text-[10px] text-blue-400 uppercase font-semibold block">01 Trigger</span>
                  <div className="font-bold text-white text-xs mt-1">Webhook Received</div>
                  <div className="text-[10px] text-slate-400 mt-1">이벤트 데이터 수신</div>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 relative">
                  <span className="text-[10px] text-purple-400 uppercase font-semibold block">02 Data Clean</span>
                  <div className="font-bold text-white text-xs mt-1">JSON Transform</div>
                  <div className="text-[10px] text-slate-400 mt-1">필드 추출 & 파싱</div>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-3 rounded-lg bg-slate-800 border border-blue-500/50 shadow-inner relative">
                  <span className="text-[10px] text-amber-400 uppercase font-semibold block">03 AI Intelligence</span>
                  <div className="font-bold text-white text-xs mt-1">LLM Inference Node</div>
                  <div className="text-[10px] text-slate-400 mt-1">내용 자동요약 및 분류</div>
                  <div className="mt-2 text-[10px] text-blue-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 animate-pulse" /> Active
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 relative">
                  <span className="text-[10px] text-emerald-400 uppercase font-semibold block">04 Action</span>
                  <div className="font-bold text-white text-xs mt-1">Notification & DB</div>
                  <div className="text-[10px] text-slate-400 mt-1">Slack/Email 알림 발송</div>
                  <div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-800/60 p-2.5 rounded-lg border border-slate-800">
                💡 <span className="text-slate-300 font-semibold">핵심 설계 포인트:</span> 노코드 기반의 신속성과 API 연동 유연성을 극대화하여 반복 업무 수작업 시간을 75% 이상 절감했습니다.
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TF-IDF Text Analytics */}
        {activeTab === 'tfidf' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>AI 부트캠프 중급 프로젝트 실증 시뮬레이터</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  Python을 활용한 텍스트 데이터 분석 & TF-IDF 가중치
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold self-start sm:self-auto">
                KoNLPy 형태소 분석기 + Scikit-learn
              </span>
            </div>

            {/* Simulated TF-IDF Bar Chart */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-semibold text-slate-700">
                문서 집합 내 핵심 단어 중요도 (TF-IDF Weight Score):
              </div>

              <div className="space-y-2.5">
                {[
                  { term: 'AI 에이전트 (AI Agent)', score: 0.92, pct: '92%' },
                  { term: '자동화 워크플로우 (Automation)', score: 0.86, pct: '86%' },
                  { term: 'RAG 시스템 (Retrieval)', score: 0.81, pct: '81%' },
                  { term: '소프트웨어 공학 (Software)', score: 0.74, pct: '74%' },
                  { term: '다국어 커뮤니케이션 (English)', score: 0.69, pct: '69%' },
                  { term: '데이터 전처리 (Preprocessing)', score: 0.63, pct: '63%' }
                ].map((item) => (
                  <div key={item.term} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-800">{item.term}</span>
                      <span className="text-blue-600 font-mono font-bold">{item.score}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                        style={{ width: item.pct }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>정규표현식 불용어(Stopwords) 95% 이상 정제 완료</span>
                <span className="text-indigo-600 font-semibold">TfidfVectorizer Scored</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
