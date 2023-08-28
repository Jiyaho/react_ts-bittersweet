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
  temperature?: string;
  menuName_ko?: string;
  menuName_en?: string;
  menuDesc?: string;
  imgsrc?: string;
  imgalt?: string;
  열량?: string;
  나트륨?: string;
  포화지방?: string;
  단백질?: string;
  당류?: string;
  카페인?: string;
  cateBtn?: string;
  cateBtnLinkTo: string;
}
