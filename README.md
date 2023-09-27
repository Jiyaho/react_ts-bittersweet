# Bittersweet Korea

## 🔷 URL

- Web Site: https://bittersweet-korea.vercel.app
- Github Repository: https://github.com/Jiyaho/react_ts-bittersweet

## 🔷 Description

- ‘Bittersweet Korea’라는 임의의 커피 브랜드를 만들어 해당 브랜드 관련 내용을 소개 및 안내하는 웹 페이지를 구현하였습니다.

- 웹 페이지에는 신 메뉴를 홍보하는 메인 페이지를 비롯하여 브랜드 소개, 판매하는 제품 메뉴 안내, 자주 묻는 질문 정리, 공지사항 안내 게시판 및 해당 브랜드의 오프라인 매장 위치 찾기를 위한 지도 API 등을 포함합니다.

- 클라이언트는 CRA(Create React App)를 통해, 서버는 Node.js로 환경을 구축하기 위해 Express 프레임워크를 사용하였다. 로그인 및 게시판 CRUD 기능의 구현을 위해 Database는 MongoDB와 Mongoose를 사용하였습니다.

## 🔷 사용 스택 및 스킬

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
    <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" />
    <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" />
</div>

## 🔷 Screenshot

<img src="https://i.ibb.co/vss551w/01-home.png" alt="01-home" border="0" />
<img src="https://i.ibb.co/qJrX3RM/02-about.png" alt="02-about" border="0" />
<img src="https://i.ibb.co/fQdjxCm/03-menu.png" alt="03-menu" border="0" />
<img src="https://i.ibb.co/Zh3t7H6/04-menu-detail.png" alt="04-menu-detail" border="0" />
<img src="https://i.ibb.co/Lp0wspj/05-find-a-store.png" alt="05-find-a-store" border="0" />
<img src="https://i.ibb.co/L9jTyMW/06-faq.png" alt="06-faq" border="0" />
<img src="https://i.ibb.co/4TRq3dK/07-notice.png" alt="07-notice" border="0" />
<img src="https://i.ibb.co/1nF4JXq/08-notice-detail.png" alt="08-notice-detail" border="0" />
<img src="https://i.ibb.co/gjWdhvF/09-notice-write.png" alt="09-notice-write" border="0 /">
<img src="https://i.ibb.co/MhvDfhw/10-login.png" alt="10-login" border="0" />
<img src="https://i.ibb.co/vJ8ssHM/11-register.png" alt="11-register" border="0" />
<img src="https://i.ibb.co/YN9DhFM/13-mypage-update.png" alt="13-mypage-update" border="0" />

## 🔷 Video Link

- PC 구동 화면 동영상: https://www.youtube.com/watch?v=B3EoPTIUNEw

- Mobile 구동 화면 동영상: https://www.youtube.com/watch?v=_YukDvSstx0

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
