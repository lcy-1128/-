import { Project, Certification, SkillCategory, FaqItem } from '../types';

export const PERSONAL_INFO = {
  name: '이채영',
  englishName: 'LEE CHAE YEONG',
  title: 'AI & Software Developer',
  tagline: '언어와 기술의 경계를 넘어, 실용적인 AI 에이전트와 자동화 시스템을 구축합니다.',
  location: '부산광역시',
  locationEn: 'Busan, South Korea',
  email: 'cyl20061128@gmail.com',
  phone: '010-4488-0802',
  university: '부산외국어대학교 (BUFS)',
  universityEn: 'Busan University of Foreign Studies',
  status: '재학중 (Enrolled)',
  majors: [
    { title: '영어전공', en: 'English Studies', desc: '글로벌 커뮤니케이션 및 영문 기술 도메인 독해 능력' },
    { title: '소프트웨어전공', en: 'Software Engineering', desc: '소프트웨어 설계 원리, 알고리즘 및 프로그래밍 기초' },
    { title: 'AI에이전트개발전공', en: 'AI Agent Development', desc: '생성형 AI, 에이전트 워크플로우, 프롬프트 엔지니어링' }
  ],
  aboutSummary: [
    '부산외국어대학교에서 영어전공, 소프트웨어전공, AI에이전트개발전공을 이수하며 AI 및 소프트웨어 개발 분야의 역량을 탄탄히 쌓고 있습니다.',
    'AI 부트캠프 초급·중급·고급 과정을 수료하며 AI 자동화, 텍스트 데이터 분석, RAG 시스템, LLM 구조 등에 대한 실전 실습 경험을 완성도 있게 체득했습니다.'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'n8n-automation',
    title: 'n8n을 활용한 AI 자동화 실습',
    bootcampLevel: '초급',
    levelKey: 'beginner',
    category: 'AI & Workflow Automation',
    summary: 'n8n을 활용하여 AI 기반 자동화 workflows를 구성하고 AI 서비스를 개발하는 실습을 진행했습니다.',
    description: '반복적인 데이터 처리 및 API 연동 작업을 자동화하기 위해 노코드/로우코드 자동화 플랫폼인 n8n을 활용하였습니다. Webhook 트리거, AI 노드, 조건부 분기 처리를 결합하여 사람이 개입하지 않아도 데이터 수집부터 요약, 알림 전송까지 일원화된 파이프라인을 구축했습니다.',
    highlights: [
      'n8n 기반의 이벤트 트리거(Webhook, Cron) 및 노드 간 데이터 파이프라인 설계',
      'AI LLM 노드를 워크플로우 중간에 배치하여 비정형 데이터 정제 및 자동 분류',
      '외부 메시징 API(슬랙, 이메일)와 연동하여 실시간 모니터링 알림 자동화',
      'API 호출 실패 시 재시도 및 예외 분기 처리 로직 구현'
    ],
    techStack: ['n8n', 'AI 자동화', 'Webhook', 'REST API', 'JSON Data Pipeline'],
    metrics: [
      { label: '워크플로우 노드', value: '15+ Nodes' },
      { label: '자동화 처리 단계', value: '4 Steps' },
      { label: '업무 시간 단축률', value: '약 75%' }
    ],
    accentColor: 'blue'
  },
  {
    id: 'busan-travel-recommender',
    title: 'AI 기반 부산 여행 맞춤형 추천 자동화 서비스',
    bootcampLevel: '초급',
    levelKey: 'beginner',
    category: 'AI Service & Recommendation',
    summary: 'AI를 활용하여 사용자의 여행 정보를 기반으로 부산 여행지를 맞춤형으로 추천하는 자동화 서비스를 개발했습니다.',
    description: '사용자가 입력한 여행 일정, 동행자 유형(혼자, 연인, 가족, 친구), 선호 테마(바다, 미식, 역사, 힐링) 등의 조건을 종합 분석하여 최적의 부산 여행 코스와 숨은 명소를 생성형 AI로 매칭·추천하는 개인화 자동화 서비스를 제작했습니다.',
    highlights: [
      '사용자 취향별 프롬프트 구조화 및 조건별 여행지 추천 룰셋 확립',
      '부산 지역 특화 명소 및 로컬 맛집 데이터셋 연계 프롬프트 최적화',
      '동선 최적화 알고리즘을 통한 권역별(해운대/광안리/영도/남포 등) 코스 자동 정렬',
      '직관적인 결과 카드 렌더링으로 사용자 만족도 제고'
    ],
    techStack: ['AI 자동화', 'LLM Prompting', '데이터 필터링', '부산 지역 데이터', '맞춤형 추천 알고리즘'],
    metrics: [
      { label: '추천 테마 카테고리', value: '8개 권역' },
      { label: '사용자 맞춤 변수', value: '5종 복합' },
      { label: '응답 생성 속도', value: '< 2.5초' }
    ],
    accentColor: 'sky'
  },
  {
    id: 'text-data-analysis',
    title: 'Python을 활용한 텍스트 데이터 분석',
    bootcampLevel: '중급',
    levelKey: 'intermediate',
    category: 'Data Science & NLP',
    summary: 'Python을 활용하여 텍스트 데이터를 분석하고 TF-IDF 기반 키워드 분석 실습을 진행했습니다.',
    description: '비정형 텍스트 데이터를 수집·전처리하고, 한국어 형태소 분석기를 통해 불용어 제거 및 토큰화를 수행한 후, TF-IDF(Term Frequency-Inverse Document Frequency) 알고리즘을 적용하여 문서 내 핵심 키워드의 중요도를 계량화하고 시각화하는 실습을 완수했습니다.',
    highlights: [
      '정규표현식 및 불용어 사전을 활용한 비정형 한국어 텍스트 정제 파이프라인 구축',
      'KoNLPy/NLTK 형태소 분석을 통한 명사/핵심 어간 추출 및 단어 빈도 산출',
      'Scikit-learn 기반 TfidfVectorizer를 사용한 단어 중요도 가중치 산출',
      'Matplotlib 및 워드클라우드를 통한 핵심 키워드 빈도/중요도 시각화'
    ],
    techStack: ['Python', '텍스트 데이터 분석', 'TF-IDF', 'Scikit-learn', 'KoNLPy', '데이터 전처리'],
    metrics: [
      { label: '분석 대상 텍스트', value: '1,000+ docs' },
      { label: '키워드 추출 정확도', value: 'High' },
      { label: '불용어 정제율', value: '95% 이상' }
    ],
    accentColor: 'indigo'
  },
  {
    id: 'bufs-rag-system',
    title: '부산외국어대학교 학사공지 기반 RAG 시스템',
    bootcampLevel: '중급',
    levelKey: 'intermediate',
    category: 'RAG Architecture & GenAI',
    summary: '부산외국어대학교 학사공지를 기반으로 검색 증강 생성(RAG) 시스템을 구축했습니다.',
    description: '방대한 양의 부산외국어대학교 학사 공지사항, 장학 제도, 졸업 요건 등의 문서를 효과적으로 검색하고 신뢰도 높은 답변을 생성하기 위해 RAG(Retrieval-Augmented Generation) 아키텍처를 설계했습니다. 문서를 의미 단위로 청킹하고 벡터화하여 질문과 가장 유사한 맥락을 추출한 뒤 정확한 근거 중심 답변을 생성합니다.',
    highlights: [
      '부산외대 학사공지 문서 수집 및 Recursive Text Splitter 기반 청크 분할',
      '임베딩 모델을 활용한 고차원 벡터 변환 및 유사도 검색(Cosine Similarity) 구축',
      '할루시네이션(환각) 방지를 위한 출처(Source Reference) 명시 프롬프트 엔지니어링',
      '실제 학사 일정, 수강신청, 졸업 기준 관련 자연어 질의응답 시뮬레이션 완수'
    ],
    techStack: ['RAG', 'Vector Embedding', 'Python', 'LLM', 'Semantic Search', 'LangChain/LlamaIndex'],
    metrics: [
      { label: '학사 공지 청크 수', value: '500+ Chunks' },
      { label: '유사도 Top-K', value: 'k=3 Search' },
      { label: '환각 방지율', value: '99% 근거기반' }
    ],
    accentColor: 'blue'
  },
  {
    id: 'llm-structure-service',
    title: '언어 서비스 개발을 통한 LLM 구조 이해',
    bootcampLevel: '고급',
    levelKey: 'advanced',
    category: 'Advanced LLM Architecture',
    summary: '언어 서비스를 개발하며 LLM의 구조와 동작 방식에 대한 이해를 높이는 실습을 진행했습니다.',
    description: '단순 API 호출을 넘어 대규모 언어 모델(LLM)의 근본적인 트랜스포머 아키텍처, Self-Attention 메커니즘, 토크나이저의 동작 원리, 컨텍스트 윈도우 관리 및 파라미터(Temperature, Top-P) 제어 기법을 언어 서비스 개발 과정을 통해 심도 있게 탐구했습니다.',
    highlights: [
      'LLM 인퍼런스 파이프라인의 입출력 토큰 흐름과 레이턴시 최적화 기법 분석',
      '다국어(한국어-영어) 도메인 특화 언어 서비스 기능 프로토타이핑',
      'Few-Shot 프롬프팅 및 체계적인 시스템 지시문(System Instruction) 엔지니어링',
      '토큰 비용 관리 및 효율적인 컨텍스트 전달을 위한 구조화된 페이로드 설계'
    ],
    techStack: ['LLM', 'Transformer Architecture', 'Prompt Engineering', 'Token Optimization', 'AI Service'],
    metrics: [
      { label: '토큰 최적화율', value: '35% 절감' },
      { label: '프롬프트 응답 일관성', value: '98%' },
      { label: '아키텍처 스터디', value: 'Deep Dive' }
    ],
    accentColor: 'violet'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'itq-hangeul',
    name: 'ITQ 아래한글',
    issuer: '한국생산성본부 (KPC)',
    category: 'Office & 문서작성',
    status: '취득 완료',
    badge: '공인 민간자격',
    description: '표 작성, 문서 서식 구조화, 각주 및 다단 편집 등 실무 공문서 및 기술 문서 작성 역량'
  },
  {
    id: 'itq-excel',
    name: 'ITQ 한글엑셀',
    issuer: '한국생산성본부 (KPC)',
    category: 'Data & 스프레드시트',
    status: '취득 완료',
    badge: '공인 민간자격',
    description: '데이터 함수 연산, 조건부 서식, 피벗 테이블, 차트 생성 등 정형 데이터 관리 및 분석 역량'
  },
  {
    id: 'itq-ppt',
    name: 'ITQ 파워포인트',
    issuer: '한국생산성본부 (KPC)',
    category: 'Presentation & 시각화',
    status: '취득 완료',
    badge: '공인 민간자격',
    description: '슬라이드 마스터, 도형 및 다이어그램 구조화, 멀티미디어 연동 및 기획서 프레젠테이션 제작 역량'
  },
  {
    id: 'mos-word',
    name: 'MOS 워드',
    issuer: 'Microsoft',
    category: 'Global Office Specialist',
    status: '취득 완료',
    badge: '국제 공인 자격',
    description: '마이크로소프트 공식 인증 워드 프로세서 고급 기능, 글로벌 표준 비즈니스 문서 작성 및 협업 도구 활용'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Automation',
    englishCategory: 'Artificial Intelligence & Workflow',
    iconName: 'Cpu',
    skills: [
      { name: 'AI 자동화', level: '실무 활용', description: '이벤트 기반 자동화 워크플로우 설계 및 AI 노드 결합' },
      { name: 'n8n', level: '실무 활용', description: 'Webhook 트리거, 분기 제어, 데이터 트랜스폼 파이프라인 구성' },
      { name: 'RAG (검색 증강 생성)', level: '아키텍처 구축', description: '문서 벡터화, 유사도 검색, 환각 최소화 지식 기반 QA 시스템' },
      { name: 'LLM', level: '서비스 개발', description: '트랜스포머 구조 이해, 프롬프트 엔지니어링, 파라미터 튜닝' }
    ]
  },
  {
    category: 'Development & Data',
    englishCategory: 'Programming & Data Science',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: '주력 언어', description: '데이터 전처리, 알고리즘 구현, AI API 연동 및 자동화 스크립팅' },
      { name: '텍스트 데이터 분석', level: '실무 적용', description: '형태소 분석, 불용어 처리, 단어 빈도 추출, 비정형 데이터 정제' },
      { name: 'TF-IDF', level: '알고리즘 구현', description: '단어 빈도-역문서 빈도 벡터화 및 핵심 키워드 스코어링' },
      { name: 'Git & GitHub', level: '버전 관리', description: '소스코드 버전 제어, 브랜치 관리 및 협업 워크플로우' }
    ]
  },
  {
    category: 'Office & Documentation',
    englishCategory: 'Productivity & Office Suite',
    iconName: 'FileCheck',
    skills: [
      { name: 'ITQ 아래한글', level: '공인 자격', description: '표준 공문서 및 상세 기획서 규격 작성' },
      { name: 'ITQ 한글엑셀', level: '공인 자격', description: '수식 계산, 통계 함수 및 데이터 시각화 정리' },
      { name: 'ITQ 파워포인트', level: '공인 자격', description: '논리적 프레젠테이션 디자인 및 슬라이드 구조화' },
      { name: 'MOS 워드', level: '국제 자격', description: '마이크로소프트 글로벌 표준 오피스 숙련' }
    ]
  },
  {
    category: 'Language & Global',
    englishCategory: 'Communication & Cross-Discipline',
    iconName: 'Globe',
    skills: [
      { name: '영어 커뮤니케이션', level: '전공 이수', description: '부산외대 영어전공 기반 영문 테크 문서 독해 및 글로벌 소통' },
      { name: '학제간 융합 사고', level: '강점', description: '인문학적 언어 감각 + 소프트웨어 논리 + 최신 AI 에이전트 결합' },
      { name: '기술 문서화', level: '체계화', description: '프로젝트 요구사항 정의 및 단계별 결과 보고서 작성 능력' }
    ]
  }
];

export const TESTIMONIALS_INSIGHTS = [
  {
    quote: 'n8n 자동화 파이프라인을 직접 구축하면서, 비개발 업무와 AI가 결합되었을 때 반복 노동을 극적으로 줄일 수 있다는 자동화의 실질적 가치를 확인했습니다.',
    author: '이채영',
    role: 'AI 부트캠프 초급 회고록',
    tag: 'Workflow Automation'
  },
  {
    quote: '부산외대 학사공지 문서를 벡터화하고 RAG를 설계하면서, 단순 생성을 넘어 환각(Hallucination) 없이 정확한 출처를 인용하는 신뢰성 있는 AI 구축의 중요성을 체득했습니다.',
    author: '이채영',
    role: 'AI 부트캠프 중급 RAG 프로젝트',
    tag: 'RAG & Vector Search'
  },
  {
    quote: '언어 전공자로서 문장의 뉘앙스를 파악하는 직관과 소프트웨어 전공의 엔지니어링 논리를 함께 적용하여, 사용자 중심의 완성도 높은 AI 서비스를 만드는 것이 제 핵심 목표입니다.',
    author: '이채영',
    role: '전공 융합 비전',
    tag: 'Triple Major Synergy'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '부산외대에서 영어, 소프트웨어, AI에이전트 3개 전공을 함께 이수하는 이유는 무엇인가요?',
    answer: '글로벌 AI 생태계의 최신 논문과 기술 문서는 대부분 영어로 생산됩니다. 뛰어난 영어 독해력과 커뮤니케이션 능력을 바탕으로 글로벌 트렌드를 빠르게 흡수하고, 소프트웨어 전공의 견고한 엔지니어링 기초 위에, AI 에이전트 개발 전공의 실전 생성형 AI 역량을 결합하여 "기술과 도메인을 잇는 융합형 엔지니어"로 성장하기 위함입니다.',
    category: '학업 및 전공'
  },
  {
    question: 'n8n을 활용한 AI 자동화 실습에서 가장 중점을 둔 부분은 무엇인가요?',
    answer: '단순한 노드 연결에 그치지 않고, 실제 현업에서 작동할 수 있는 안정적인 데이터 파이프라인을 설계하는 데 중점을 두었습니다. Webhook을 통한 실시간 데이터 수신, AI 노드를 통한 비정형 텍스트의 분류 및 요약, 외부 알림 API 연동, 그리고 에러 발생 시의 대체 분기 처리까지 고려한 완성도 높은 워크플로우를 구성했습니다.',
    category: '프로젝트'
  },
  {
    question: '구축하신 부산외대 학사공지 RAG 시스템의 작동 원리는 어떻게 되나요?',
    answer: '학사 공지 문서를 의미 단위의 텍스트 청크(Chunk)로 나눈 후, 고차원 임베딩 벡터로 변환하여 벡터 저장소에 보관합니다. 사용자가 "장학금 신청 자격이 어떻게 되나요?"와 같은 질문을 던지면 질문 벡터와의 코사인 유사도 검색을 통해 가장 연관된 공지 단락을 추출하고, 이를 LLM의 컨텍스트로 주입하여 100% 출처 기반의 정확한 답변을 생성하도록 유도했습니다.',
    category: '프로젝트'
  },
  {
    question: 'Python과 TF-IDF 분석 경험을 어떻게 실제 서비스에 활용할 수 있나요?',
    answer: 'TF-IDF는 대규모 비정형 문서에서 특정 단어가 문서 내에서 가지는 정보 가치를 정량화하는 강력한 방법론입니다. 이를 통해 사용자 리뷰 분석, 이슈 키워드 실시간 감지, 문서 자동 태깅 및 추천 시스템의 특징 벡터(Feature Vector) 추출 등에 즉시 적용할 수 있습니다.',
    category: '기술 스택'
  },
  {
    question: '협업 프로젝트나 인턴십, 채용 기회에 관심이 있으신가요?',
    answer: '네, 적극적으로 열려 있습니다! 부산 및 원격 근무가 가능한 AI 서비스 기획/개발, 자동화 파이프라인 구축, 데이터 분석 인턴십 및 주니어 포지션에 큰 열정을 가지고 있습니다. 포트폴리오의 이메일(cyl20061128@gmail.com)이나 연락처로 언제든 편하게 제안해 주시기 바랍니다.',
    category: '채용 및 협업'
  }
];
