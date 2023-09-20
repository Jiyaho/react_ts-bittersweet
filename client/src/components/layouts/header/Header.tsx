import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';
import HeaderLogin from './HeaderLogin';

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <header>
      <S.Nav className={toggleButton ? 'on' : 'off'}>
        <S.LogoDiv className={toggleButton ? 'on' : 'off'}>
          <div>
            <FaDroplet />
          </div>
          <Link to={'/'}>Bittersweet Korea</Link>
        </S.LogoDiv>
        <S.NavPagesDiv className={toggleButton ? 'on' : 'off'}>
          {pages.map((page) => (
            <Link key={page.id} to={page.route}>
              {page.name}
            </Link>
          ))}
        </S.NavPagesDiv>

        <HeaderLogin className={toggleButton ? 'on' : 'off'} />

        <Link to={'#'} onClick={handleToggleButton}>
          <S.FaBarsDiv className={toggleButton ? 'on' : 'off'}>
            <FaBars />
          </S.FaBarsDiv>
        </Link>
      </S.Nav>
    </header>
  );
}
export default Header;
