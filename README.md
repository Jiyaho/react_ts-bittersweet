# Bittersweet Korea

## 🔷 URL

- Web Site: https://bittersweet-korea.vercel.app
- Github Repository: https://github.com/Jiyaho/react_ts-bittersweet

## 🔷 Video Link

- PC version: https://www.youtube.com/watch?v=B3EoPTIUNEw

- Mobile version: https://www.youtube.com/watch?v=_YukDvSstx0

## 🔷 Description

- ‘Bittersweet Korea’라는 임의의 커피 브랜드를 만들어 해당 브랜드 관련 내용을 소개 및 안내하는 웹 페이지를 구현하였습니다.

- 웹 페이지에는 신 메뉴를 홍보하는 메인 페이지를 비롯하여 브랜드 소개, 판매하는 제품 메뉴 안내, 자주 묻는 질문 정리, 공지사항 안내 게시판 및 해당 브랜드의 오프라인 매장 위치 찾기를 위한 지도 API 등을 포함합니다.

- 클라이언트는 CRA(Create React App)를 통해, 서버는 Node.js로 환경을 구축하기 위해 Express 프레임워크를 사용하였습니다. 로그인 및 게시판 CRUD 기능의 구현을 위해 Database는 MongoDB와 Mongoose를 사용하였습니다.

## 🔷 Tech

<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" />
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" />
</div>

## 🔷 Purpose

- 하나의 웹 사이트가 설계되어 배포되기 까지의 과정들, 즉 컨셉을 기획하고 클라이언트와 서버를 구현하고 마지막으로 배포까지의 단계들을 이해하며 직접 혼자 만들어보고자 하였습니다.

## 🔷 Update

2023.09 리팩토링 및 마이그레이션

0. 기존 버전 Repository: https://github.com/Jiyaho/react-bittersweet
1. JavsScript -> TypeScript
2. Redux -> Redux-toolkit
3. CSS Module -> Styled-components
4. 전체적인 구조 리팩토링
5. 로딩 페이지 적용
6. Menu Detail Page URL 수정

- 기존 URL: /menu-detail/제품 번호 (ex: `/menu-detail/8`)
- 수정 URL: /menu/제품 카테고리/제품 번호 (ex: `/menu/coffee/8`)

7. 로그인한 상태로 Login Page, Register Page 접근 시, 메인 페이지로 리다이렉트
8. 게시판 글 작성 권한: 로그인한 유저만 가능도록 수정
9. 게시판 글 작성 시, 작성자를 로그인한 사용자의 이름으로 고정
10. My Page 추가: 회원 정보 수정 및 회원 탈퇴 기능 추가

## 🔷 Page Description

### Home Page

새로운 메뉴, 이벤트 배너 등으로 이루어진 메인 페이지입니다.

<img src="https://i.ibb.co/vss551w/01-home.png" alt="01-home" border="0" loading="lazy" />

### About Us Page

기업(브랜드)를 소개하는 정적 페이지입니다.

<img src="https://i.ibb.co/qJrX3RM/02-about.png" alt="02-about" border="0" loading="lazy" />

### Menu Page

커피&음료 메뉴들을 볼 수 있는 페이지입니다.

<img src="https://i.ibb.co/fQdjxCm/03-menu.png" alt="03-menu" border="0" loading="lazy" />

### Menu Detail Page

특정 메뉴에 대한 정보를 볼 수 있는 상세 페이지입니다.

<img src="https://i.ibb.co/Zh3t7H6/04-menu-detail.png" alt="04-menu-detail" border="0" loading="lazy" />

### Find A Store Page

Kakao Map API를 이용하여 지도를 넣었고, 특정 매장을 검색하여 찾기위한 가상의 페이지입니다.

<img src="https://i.ibb.co/Lp0wspj/05-find-a-store.png" alt="05-find-a-store" border="0" loading="lazy" />

### FAQ Page

자주하는 질문에 대한 페이지입니다. 질문 검색 기능을 제공합니다.

<img src="https://i.ibb.co/L9jTyMW/06-faq.png" alt="06-faq" border="0" loading="lazy" />

### Notice Page (Notice, Notice Detail, Notice Write)

- 공지사항 게시판입니다. 읽기는 모든 사용자 가능, 글 쓰기 권한은 로그인한 사용자입니다.
- 서버와 통신, CRUD 기능을 구현하였습니다.

<img src="https://i.ibb.co/4TRq3dK/07-notice.png" alt="07-notice" border="0" loading="lazy" />
<img src="https://i.ibb.co/1nF4JXq/08-notice-detail.png" alt="08-notice-detail" border="0" loading="lazy" />
<img src="https://i.ibb.co/gjWdhvF/09-notice-write.png" alt="09-notice-write" border="0" loading="lazy" />

### My Page

- 회원 정보 수정 및 회원 탈퇴가 가능한 페이지입니다.
- 로그인한 사용자만 접속 권한이 주어집니다.

<img src="https://i.ibb.co/YN9DhFM/13-mypage-update.png" alt="13-mypage-update" border="0" loading="lazy" />

### Login Page

로그인 페이지입니다.

<img src="https://i.ibb.co/MhvDfhw/10-login.png" alt="10-login" border="0" loading="lazy" />

### Register Page

회원 가입 페이지 입니다.

<img src="https://i.ibb.co/vJ8ssHM/11-register.png" alt="11-register" border="0" loading="lazy" />

## 🔷 Additional Function

- 반응형 웹을 지원합니다.

<img src="https://i.ibb.co/dG5GZnk/pc-mobile.png" alt="pc-mobile" border="0" width="200px" />

## 🔷 Trouble Shooting

- **CORS Error**

  - 문제점: 클라이언트 측에서 백엔드 서버에게 API 요청을 보내면 CORS 정책에 의해 요청이 거부당하며 에러가 발생하였습니다.
  - 원인: 백엔드 서버와 프론트엔드 서버가 서로 다른 도메인을 가지는 경우, CORS 정책에 의해 다른 오리진의 자원에 접근하는 것을 막기 때문입니다.
  - 해결: 백엔드 서버 쪽에서 CORS를 허용하기 위해 cors 라이브러리를 설치하고, cors 옵션으로 허용할 클라이언트의 origin을 설정하여 해결하였습니다.

- **CORS - Cookie 관련 에러**

  - 문제점: 배포 후 로그인 기능은 작동하나, 로그인 상태가 유지되지 않고 풀려버리는 현상이 발생하였습니다.
  - 원인: 로그인 후 Cookie가 저장되어야 하는데, 서버는 기본적으로 다른 오리진으로부터 온 요청에 대해서는 쿠키를 설정 및 응답해주지 않는다는 문제가 있습니다. 즉 백엔드 서버에게 API 요청을 보내더라도 쿠키가 설정되지 않기 때문에 발생하는 현상으로 파악하였습니다.
  - 해결: 서버 측에서는 credentials의 옵션을 true로 설정하고, 클라이언트 측에서도 AJAX 요청 코드에서 credentials 옵션을 설정하였습니다. 이 설정 후에도 해결되지 않아 네트워크 탭에서 Cookies - Request Cookies에 ‘SameSite’ 항목에 느낌표가 떠있는 것을 확인하여 서버 측의 Cookie Option에 sameSite: 'none', secure: true속성을 추가하여 쿠키가 안전하지 않은 요청에도 전송되며, HTTPS에서만 쿠키가 전송되는 옵션을 설정하여 해결하였습니다.

- **반응형 웹 - 기종별 페이지 레이아웃 출력 차이**
  - 문제점: 반응형 웹 개발을 위해 Media Query를 적용하여 화면 크기에 대응하는 스타일을 적용했으나, 실제 몇 가지 기종별로 테스트를 해보니 예상보다 기종별 레이아웃 출력 차이가 컸습니다.
  - 원인: 기종별 화면 크기 및 해상도 차이, 브라우저 호환성 등이 다르기 떄문입니다.
  - 해결: Chrome Toggle Device Toolbar와 크롬 확장프로그램인 Mobile Simulator - Reponsive testing tool과 같은 테스팅 및 디버깅 도구를 이용하여 기종마다 모니터링하면서 수정하였습니다. 또한 Flexbox을 활용하여 페이지 요소의 위치 및 배치를 유연하게 조절하였습니다.

## 🔷 File Tree Structure

```
📦 react_ts-bittersweet
├─ .gitignore
├─ README.md
├─ client
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  ├─ src
│  │  ├─ Api
│  │  │  ├─ PostingsApi.tsx
│  │  │  └─ UsersApi.tsx
│  │  ├─ App.test.tsx
│  │  ├─ App.tsx
│  │  ├─ components
│  │  │  ├─ about
│  │  │  │  ├─ AboutNav.styles.ts
│  │  │  │  ├─ AboutNav.tsx
│  │  │  │  ├─ BrandCoffee.styles.ts
│  │  │  │  ├─ BrandCoffee.tsx
│  │  │  │  ├─ BrandHistory.styles.ts
│  │  │  │  ├─ BrandHistory.tsx
│  │  │  │  ├─ BrandPrinciples.styles.ts
│  │  │  │  └─ BrandPrinciples.tsx
│  │  │  ├─ atoms
│  │  │  │  ├─ ScrollButton.tsx
│  │  │  │  └─ Title.tsx
│  │  │  ├─ faq
│  │  │  │  ├─ FaqSection.styles.ts
│  │  │  │  ├─ FaqSection.tsx
│  │  │  │  ├─ FormOfFaq.styles.ts
│  │  │  │  └─ FormOfFaq.tsx
│  │  │  ├─ findStore
│  │  │  │  └─ KakaoMap.tsx
│  │  │  ├─ home
│  │  │  │  ├─ HomeArticle.tsx
│  │  │  │  └─ HomeArticleStyles.ts
│  │  │  ├─ layouts
│  │  │  │  ├─ Layout.tsx
│  │  │  │  ├─ LayoutStyles.ts
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ Footer.tsx
│  │  │  │  │  └─ FooterStyles.ts
│  │  │  │  └─ header
│  │  │  │     ├─ Header.tsx
│  │  │  │     ├─ HeaderLogin.tsx
│  │  │  │     └─ HeaderStyles.ts
│  │  │  ├─ menu
│  │  │  │  ├─ FormOfMenu.tsx
│  │  │  │  ├─ MenuCategorization.tsx
│  │  │  │  ├─ MenuNav.styles.ts
│  │  │  │  ├─ MenuNav.tsx
│  │  │  │  └─ menuDetail
│  │  │  │     ├─ FormOfMenuDetail.styles.ts
│  │  │  │     ├─ FormOfMenuDetail.tsx
│  │  │  │     ├─ MenuDetailNav.styles.ts
│  │  │  │     └─ MenuDetailNav.tsx
│  │  │  ├─ mypage
│  │  │  │  └─ Withdrawal.tsx
│  │  │  └─ notice
│  │  │     ├─ NoticeTable.styles.ts
│  │  │     └─ NoticeTable.tsx
│  │  ├─ data
│  │  │  ├─ faqList.ts
│  │  │  └─ menuData.json
│  │  ├─ features
│  │  │  ├─ store.ts
│  │  │  └─ userSlice.ts
│  │  ├─ index.tsx
│  │  ├─ logo.svg
│  │  ├─ pages
│  │  │  ├─ about
│  │  │  │  └─ AboutUs.tsx
│  │  │  ├─ faq
│  │  │  │  └─ Faq.tsx
│  │  │  ├─ findStore
│  │  │  │  ├─ FindStore.styles.ts
│  │  │  │  └─ FindStore.tsx
│  │  │  ├─ home
│  │  │  │  └─ Home.tsx
│  │  │  ├─ login
│  │  │  │  ├─ Login.styles.ts
│  │  │  │  └─ Login.tsx
│  │  │  ├─ menu
│  │  │  │  ├─ Menu.styles.ts
│  │  │  │  ├─ Menu.tsx
│  │  │  │  ├─ MenuBeverage.tsx
│  │  │  │  ├─ MenuCoffee.tsx
│  │  │  │  ├─ MenuTea.tsx
│  │  │  │  └─ menuDetail
│  │  │  │     ├─ MenuDetail.styles.ts
│  │  │  │     └─ MenuDetail.tsx
│  │  │  ├─ myPage
│  │  │  │  ├─ MyPage.tsx
│  │  │  │  ├─ Mypage.styles.ts
│  │  │  │  ├─ UpdateProfile.styles.ts
│  │  │  │  └─ UpdateProfile.tsx
│  │  │  ├─ notice
│  │  │  │  ├─ Notice.styles.ts
│  │  │  │  ├─ Notice.tsx
│  │  │  │  ├─ NoticeDetail.styles.ts
│  │  │  │  ├─ NoticeDetail.tsx
│  │  │  │  ├─ NoticeEdit.tsx
│  │  │  │  ├─ NoticeWrite.styles.ts
│  │  │  │  └─ NoticeWrite.tsx
│  │  │  └─ register
│  │  │     ├─ Register.styles.ts
│  │  │     └─ Register.tsx
│  │  ├─ react-app-env.d.ts
│  │  ├─ reportWebVitals.ts
│  │  ├─ setupProxy.js
│  │  ├─ setupTests.ts
│  │  ├─ styles
│  │  │  ├─ GlobalStyles.ts
│  │  │  ├─ colors.ts
│  │  │  └─ index.css
│  │  └─ utils
│  │     ├─ constants.ts
│  │     └─ types.ts
│  └─ tsconfig.json
└─ server
   ├─ .dockerignore
   ├─ Dockerfile
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ fly.toml
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Posting.js
   │  └─ User.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      ├─ postings.js
      └─ users.js
```
