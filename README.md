# Bittersweet Korea

## 🔷 URL

- Web Site: https://bittersweet-korea.vercel.app
- Github Repository: https://github.com/Jiyaho/react_ts-bittersweet

## 🔷 Description

- ‘Bittersweet Korea’라는 임의의 커피 브랜드를 만들어 해당 브랜드 관련 내용을 소개 및 안내하는 웹 페이지를 구현한다.

- 웹 페이지에는 신 메뉴를 홍보하는 메인 페이지를 비롯하여 브랜드 소개, 판매하는 제품 메뉴 안내, 자주 묻는 질문 정리, 공지사항 안내 게시판 및 해당 브랜드의 오프라인 매장 위치 찾기를 위한 지도 API 등을 포함한다.

- 클라이언트는 CRA(Create React App)를 통해, 서버는 Node.js로 환경을 구축하기 위해 Express 프레임워크를 사용하였다. 로그인 및 게시판 CRUD 기능의 구현을 위해 Database는 MongoDB와 Mongoose를 사용하였다.

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

<img src="https://i.ibb.co/C54GSdp/bittersweet-thumbnail.png" alt="bittersweet-thumbnail" />
<img src="https://i.ibb.co/986cpNc/bittersweet10.png" alt="bittersweet10" />
<img src="https://i.ibb.co/nfVF8z8/bittersweet13.png" alt="bittersweet13" />
<img src="https://i.ibb.co/R6ds1cN/bittersweet15.png" alt="bittersweet15" />
<img src="https://i.ibb.co/xJpn9SW/bittersweet20.png" alt="bittersweet20" />

## 🔷 Video Link

[![video](https://img.youtube.com/vi/aBwga7D4Bac/0.jpg)](https://www.youtube.com/watch?v=aBwga7D4Bac&t=24s)

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
