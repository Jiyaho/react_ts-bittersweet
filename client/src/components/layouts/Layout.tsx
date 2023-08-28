import { Main } from './LayoutStyles';
import Footer from './footer/Footer';
import Header from './header/Header';

function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}
export default Layout;
