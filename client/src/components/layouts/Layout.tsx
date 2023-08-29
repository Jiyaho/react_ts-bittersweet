import { Main } from './LayoutStyles';
import Footer from './footer/Footer';
import Header from './header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export default Layout;
