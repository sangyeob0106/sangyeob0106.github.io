# sangyeob0106.github.io

# 🎮 엽씨네마 (Yeop Cinema)

**Yeop Cinema**는 HTML, CSS, JavaScript 기반의 반응형 영화관 웹사이트입니다.  
모바일과 PC 모두에서 최적의 사용자 경험을 제공하며, 다크모드, 영화 추천, 채팅모트 등의 기능을 포함하고 있습니다.

---

## 포름 구조

```
yeop-cinema/
├── index.html         # 메인 페이지
├── movie.html         # 영화 상세 페이지
├── timetable.html     # 지점/날짜별 상영 시간표 페이지
├── reserve.html       # 영화 예매 페이지
├── mypage.html        # 마이페이지 (예매 내역, 평론 등)
├── css/
│   └── style.css      # 공통 스타일 시트 (반응형, 다크모드 포함)
├── js/
│   └── script.js      # 공통 JS 기능 (추천 알고리즘, 채방 등)
├── img/               # 포스터, 배너 등 정적 이미지 포달
└── README.md          # 프로젝트 설명 파일
```

---

## 기본 기능

### ✔️ 반응형 웹 디자인
- PC/모바일에 최적화된 UI
- `@media query` 사용

### ✔️ 다크모드 지원
- CSS 변수(`--color-*`) 기반 색상 시스템
- 버튼 클릭으로 테마 전환

### ✔️ 메인 페이지 (index.html)
- 로고/메뉴바 고정
- 예고편 배너 (iframe 또는 img)
- 상영작 리스트 (card 형)
- 할인/이벤트 서버 리스트
- 예매 페이지 버튼

### ✔️ 영화 상세 페이지 (movie.html)
- 포스터, 주어진, 장르, 감독, 비용 등 정보
- 예고편 iframe/이미지
- 사용자 분점 등록 / 목록 표시

### ✔️ 시간표 페이지 (timetable.html)
- 지점 선택 드론다움
- 날짜 선택 (button/calendar)
- 상영화-시간 테이블 (자료 포함)

### ✔️ 예매 페이지 (reserve.html)
- 영화/시간/인원 선택
- 좌석 UI (table or 블랙 형)
- 최종 결제: 할인, 포인트, 스날 선택 포함

### ✔️ 마이페이지 (mypage.html)
- 예매 내역 / 집게 / 평론 / 점수 등
- 보유 포인트, 쿠폰 목록 표시

### ✔️ 채팅모드 '여비'
- 간단한 질이/회복 UI
- 예매, 영화, 시간표 같은 설명 가능

### ✔️ 영화 추천 기능 (script.js)
- 감정(긍정/불안) 또는 날씨 기반 추천
- 가운 영화 / 평점 기본 개인화 추천

---

## 평가 기술

- HTML5 / CSS3 / JavaScript
- Media Query 기반 반응형
- CSS 변수 & 전환 애니메이션
- Google Fonts / Font Awesome
- 더미 데이터 / 로컬스톱 / 정적 이미지

---

## 실행 방법

1. 프로젝트를 클론 또는 다운로드
2. `index.html` 파일을 블랙의 웹브랜서에서 열고 실행
3. Visual Studio Code 또는 Live Server 확장프리크 활용 권장

---

## 기타 안내

- 이미지, 도영사, 영화 정보 등은 더미 데이터로 구성
- 후일 백엔드 연동, SPA 또는 Vue/React의 개발 기능 확잡을 가진 구조와 디자인

---

