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

export const faqList = [
  {
    idx: '1',
    q: '첫번째로 자주하는 질문이 뭔가요?',
    a: '첫번째 질문에 대한 대답입니다.',
  },
  {
    idx: '2',
    q: '두번째로 자주하는 질문이 뭔가요?',
    a: '두번째 질문에 대한 대답입니다',
  },
  {
    idx: '3',
    q: '세번째로 자주하는 질문이 뭔가요?',
    a: '세번째 질문에 대한 대답입니다',
  },
  {
    idx: '4',
    q: '네번째로 자주하는 질문이 뭔가요?',
    a: '네번째 질문에 대한 대답입니다',
  },
  {
    idx: '5',
    q: '다섯번째로 자주하는 질문이 뭔가요?',
    a: '다섯번째 질문에 대한 대답입니다',
  },
  {
    idx: '6',
    q: '여섯번째로 자주하는 질문이 뭔가요?',
    a: '여섯번째 질문에 대한 대답입니다',
  },
  {
    idx: '7',
    q: '일곱번째로 자주하는 질문이 뭔가요?',
    a: '일곱번째 질문에 대한 대답입니다',
  },
  {
    idx: '8',
    q: '여덟번째로 자주하는 질문이 뭔가요?',
    a: '여덟번째 질문에 대한 대답입니다',
  },
  {
    idx: '9',
    q: '아홉번째로 자주하는 질문이 뭔가요?',
    a: '아홉번째 질문에 대한 대답입니다',
  },
  {
    idx: '10',
    q: '열번째로 자주하는 질문이 뭔가요?',
    a: '열번째 질문에 대한 대답입니다',
  },
];
