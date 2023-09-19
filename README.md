## 기존 React - Bittersweet Web Site 리팩토링 진행 중

---

### 진행 예정 사항

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
