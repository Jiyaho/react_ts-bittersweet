import { Link } from 'react-router-dom';
import { MenuDetailType } from '../../../utils/types';

function MenuDetailNav({ cateBtnLinkTo, cateBtn }: MenuDetailType) {
  return (
    <nav>
      <Link to={`/`}>HOME</Link>
      <span> ► </span>
      <Link to={`/menu`}>MENU</Link>
      <span> ► </span>
      <Link to={cateBtnLinkTo}>{cateBtn}</Link>
    </nav>
  );
}
export default MenuDetailNav;
