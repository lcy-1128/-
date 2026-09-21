# 이채영 (LEE CHAE YEONG) - AI & Software Developer Portfolio

부산외국어대학교 영어전공 · 소프트웨어전공 · AI에이전트개발전공 이채영의 포트폴리오 웹사이트입니다. FlowSuite의 모던 SaaS 디자인 시스템을 기반으로 제작되었으며, GitHub 저장 및 Vercel 배포에 최적화되어 있습니다.

---

## 🌟 주요 구성 내용

- **About Me**: 3개 전공(영어·소프트웨어·AI에이전트개발) 융합 소개 및 AI 부트캠프 이수 내역
- **Education**: 부산외국어대학교 학사 과정 재학중 (영어 · SW · AI에이전트 3중 전공)
- **Certifications**: ITQ 아래한글, ITQ 한글엑셀, ITQ 파워포인트, MOS 워드 (4종 공인 자격)
- **Projects & Experience**:
  - `AI 부트캠프 초급`: n8n을 활용한 AI 자동화 실습
  - `AI 부트캠프 초급`: AI 기반 부산 여행 맞춤형 추천 자동화 서비스
  - `AI 부트캠프 중급`: Python을 활용한 텍스트 데이터 분석 (TF-IDF)
  - `AI 부트캠프 중급`: 부산외국어대학교 학사공지 기반 RAG 시스템
  - `AI 부트캠프 고급`: 언어 서비스 개발을 통한 LLM 구조 이해
- **Skills**: AI 자동화, n8n, RAG, LLM, Python, 텍스트 데이터 분석, TF-IDF
- **Interactive Live Simulator**: 학사공지 RAG 질의응답, n8n 워크플로우 실행, 부산 여행 맞춤 추천 시뮬레이션
- **Contact**: 이메일(cyl20061128@gmail.com), 전화번호(010-4488-0802), 위치(부산시)

---

## 🚀 GitHub 저장 및 Vercel 배포 방법

### 1. GitHub 저장소에 코드 업로드

```bash
# 로컬 Git 초기화
git init

# 모든 파일 추가 및 커밋
git add .
git commit -m "feat: Lee Chae Yeong Portfolio Website"

# 본인의 GitHub 원격 저장소 연결 (저장소 생성 후 URL 입력)
git remote add origin https://github.com/사용자계정/저장소이름.git

# main 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 2. Vercel 배포 (1분 완료)

1. [Vercel](https://vercel.com)에 로그인합니다 (GitHub 계정으로 간편 로그인 권장).
2. **Add New Project** 버튼을 클릭합니다.
3. 방금 푸시한 GitHub 포트폴리오 저장소를 선택하고 **Import**를 누릅니다.
4. Framework Preset이 **Vite**로 자동 감지됩니다.
   - Build Command: `vite build`
   - Output Directory: `dist`
5. **Deploy** 버튼을 누르면 즉시 전 세계 CDN을 통해 무료로 라이브 배포됩니다!
