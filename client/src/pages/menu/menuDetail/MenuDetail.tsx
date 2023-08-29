import { useEffect, useState } from 'react';
import Layout from '../../../components/layouts/Layout';
import FormOfMenuDetail from '../../../components/menu/menuDetail/FormOfMenuDetail';
import { useParams } from 'react-router-dom';
import menuData from '../../../data/menuData.json';
import { MenuType } from '../../../utils/types';
import { baseUrl } from '../../../utils/constants';
import MenuDetailNav from '../../../components/menu/menuDetail/MenuDetailNav';
import { Section } from './MenuDetail.styles';

function MenuDetail() {
  const [menu, setMenu] = useState<MenuType[]>([]);
  const { id } = useParams();
  const data = menuData.data;
  const addUrl = '/images/menu/';
  const URL = baseUrl + addUrl;

  useEffect(() => {
    setMenu(data);
  }, []);

  const filteredMenu = menu.filter((v) => v.idx === id);

  return (
    <Layout>
      {filteredMenu?.map((menu) => (
        <Section key={menu.idx}>
          <MenuDetailNav cateBtn={menu.category.toUpperCase()} cateBtnLinkTo={menu.category} />
          <FormOfMenuDetail
            cateBtn={menu.category}
            cateBtnLinkTo={`/menu/${menu.category}`}
            temperature={menu.temperature === 'HOT' ? `${menu.temperature} 🔥` : `${menu.temperature} ❄️`}
            menuName_ko={menu.name_ko}
            menuName_en={menu.name_en}
            menuDesc={menu.desc}
            imgsrc={URL + menu.url}
            imgalt={menu.url}
            열량={menu.열량}
            나트륨={menu.나트륨}
            포화지방={menu.포화지방}
            단백질={menu.단백질}
            당류={menu.당류}
            카페인={menu.카페인}
          />
        </Section>
      ))}
    </Layout>
  );
}
export default MenuDetail;
