import { useEffect, useState } from 'react';
import menuData from '../../data/menuData.json';
import { MenuType } from '../../utils/types';
import { Article } from '../../pages/menu/Menu.styles';
import FormOfMenu from './FormOfMenu';
import { baseUrl } from '../../utils/constants';
import { Beverage, Coffee, Tea } from '../../assets/images/menu';

function MenuCategorization({ category }: { category: string }) {
  const [menu, setMenu] = useState<MenuType[] | null>(null);
  const data = menuData.data;
  // const addUrl = '/images/menu/';
  // const URL = baseUrl + addUrl;

  const filteredCategory = (cate: string) => {
    const menuList = data.filter((menu) => menu.category === cate);
    return menuList;
  };

  useEffect(() => {
    setMenu(filteredCategory(category));
  }, []);

  return (
    <Article>
      {menu &&
        menu.map((menu) => (
          <div key={menu.idx}>
            {/* <FormOfMenu LinkTo={`${menu.idx}`} menuName={menu.name_ko} imgsrc={URL + menu.url} imgalt={menu.url} /> */}
            <FormOfMenu
              LinkTo={`${menu.idx}`}
              menuName={menu.name_ko}
              imgsrc={menu.url === 'menu-coffee.jpg' ? Coffee : 'menu-tea.jpg' ? Tea : Beverage}
              imgalt={menu.url}
            />
          </div>
        ))}
    </Article>
  );
}
export default MenuCategorization;
