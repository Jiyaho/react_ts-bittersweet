import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import MenuNav from '../../components/menu/MenuNav';
import MenuCategorization from '../../components/menu/MenuCategorization';

function MenuTea() {
  return (
    <Layout>
      <ScrollButton />
      <Title title="MENU" />
      <MenuNav />
      <MenuCategorization category="tea" />
    </Layout>
  );
}
export default MenuTea;
