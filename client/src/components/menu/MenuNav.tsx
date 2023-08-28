import { menuNav } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { Nav } from './MenuNav.styles';

function MenuNav() {
  return (
    <Nav>
      {menuNav.map((category, idx) => (
        <div key={idx}>
          <Link to={`/menu/${category.value}`}>{category.name}</Link>
        </div>
      ))}
    </Nav>
  );
}
export default MenuNav;
