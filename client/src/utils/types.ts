export interface MenuType {
  idx: string;
  name_ko: string;
  name_en: string;
  desc: string;
  category: string;
  temperature: string;
  열량: string;
  나트륨: string;
  포화지방: string;
  단백질: string;
  당류: string;
  카페인: string;
  url: string;
}

export interface MenuDetailType {
  temperature: string;
  menuName_ko: string;
  menuName_en: string;
  menuDesc: string;
  imgsrc: string;
  imgalt: string;
  열량: string;
  나트륨: string;
  포화지방: string;
  단백질: string;
  당류: string;
  카페인: string;
  cateBtn: string;
  cateBtnLinkTo: string;
}

export interface FaqType {
  idx?: string;
  q: string;
  a: string;
}

export interface NoticeTableBodyType {
  number: string;
  _id: string;
  title: string;
  writer: string;
  date: string;
}

export interface RegisterType {
  name: string;
  email: string;
  password: string;
}

export interface PostingType {
  writer: string;
  title: string;
  content: string;
  date?: any;
  view?: string;
  id?: string;
  _id?: string;
}

export interface UserProfileType {
  name: string;
  email: string;
  password: string;
}

export interface ApiResponseType {
  success: boolean;
  message: string;
}
