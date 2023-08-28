import { useEffect, useState } from 'react';
import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import FormOfMenu from '../../components/menu/FormOfMenu';
import MenuNav from '../../components/menu/MenuNav';
import menuData from '../../data/menuData.json';
import { MenuType } from '../../utils/types';
import { Article } from './Menu.styles';
import { baseUrl } from '../../utils/constants';

function Menu() {
  const [allMenu, setAllMenu] = useState<MenuType[] | null>(null);
  const data = menuData.data;
  const addUrl = '/images/menu/';
  const URL = baseUrl + addUrl;

  useEffect(() => {
    setAllMenu(data);
  }, []);

  return (
    <Layout>
      <ScrollButton />
      <Title title="MENU" />
      <MenuNav />
      <Article>
        {allMenu &&
          allMenu.map((menu) => (
            <div key={menu.idx}>
              <FormOfMenu
                LinkTo={`${menu.category}/${menu.idx}`}
                menuName={menu.name_ko}
                imgsrc={URL + menu.url}
                imgalt={menu.url}
              />
            </div>
          ))}
      </Article>
    </Layout>
  );
}
export default Menu;
