import { Link } from 'react-router-dom';
import { Nav } from './MenuDetailNav.styles';

interface MenuDeatilNavProps {
  cateBtnLinkTo: string;
  cateBtn: string;
}

function MenuDetailNav({ cateBtnLinkTo, cateBtn }: MenuDeatilNavProps) {
  return (
    <Nav>
      <Link to={`/`}>HOME</Link>
      <span> ► </span>
      <Link to={`/menu`}>MENU</Link>
      <span> ► </span>
      <Link to={cateBtnLinkTo}>{cateBtn}</Link>
    </Nav>
  );
}
export default MenuDetailNav;
