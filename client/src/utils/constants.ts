export const baseUrl = process.env.PUBLIC_URL;
export const postingsUrl = `${process.env.REACT_APP_HOST}/api/postings`;
export const usersUrl = `${process.env.REACT_APP_HOST}/api/users`;

export const pages = [
  {
    id: 1,
    route: '/',
    name: 'HOME',
  },
  {
    id: 2,
    route: '/about',
    name: 'ABOUT US',
  },
  {
    id: 3,
    route: '/menu',
    name: 'MENU',
  },
  {
    id: 4,
    route: '/store',
    name: 'STORE',
  },
  {
    id: 5,
    route: '/faq',
    name: 'FAQ',
  },
  {
    id: 6,
    route: '/notice',
    name: 'NOTICE',
  },
  {
    id: 7,
    route: '/mypage',
    name: 'MYPAGE',
  },
];

export const menuNav = [
  {
    name: 'ALL',
    value: '',
  },
  {
    name: 'COFFEE',
    value: 'coffee',
  },
  {
    name: 'BEVERAGE',
    value: 'beverage',
  },
  {
    name: 'TEA',
    value: 'tea',
  },
];
