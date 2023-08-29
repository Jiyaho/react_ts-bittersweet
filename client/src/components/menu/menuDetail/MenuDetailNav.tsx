import { Link } from 'react-router-dom';
import { MenuDetailType } from '../../../utils/types';
import { Nav } from './MenuDetailNav.styles';

function MenuDetailNav({ cateBtnLinkTo, cateBtn }: MenuDetailType) {
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
