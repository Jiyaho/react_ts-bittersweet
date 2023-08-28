import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';

type ToggleType = { toggleButton: boolean };

function Header() {
  // const navigate = useNavigate();
  const [toggleButton, setToggleButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState('');

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  const handleOnClick = () => {};

  const getUserName = () => {};

  useEffect(() => {
    getUserName();
  }, [isLogin, loginUserName]);

  return (
    <header>
      <S.Nav>
        <S.IconDiv>
          <S.FaDropletDiv>
            <FaDroplet />
          </S.FaDropletDiv>
          <S.LogoLink to={'/'}>Bittersweet Korea</S.LogoLink>
        </S.IconDiv>

        <S.Ul toggle={toggleButton}>
          {pages.map((page) => (
            <li key={page.id}>
              <S.PageLink to={page.route}>{page.name}</S.PageLink>
            </li>
          ))}
        </S.Ul>

        {isLogin ? (
          <Link to={'/login'}>
            <button onClick={handleOnClick} value={loginUserName}>
              {loginUserName}
            </button>
          </Link>
        ) : (
          <button onClick={handleOnClick} value={loginUserName}>
            🔓LOG-OUT
          </button>
        )}
        <Link to={'#'} onClick={handleToggleButton}>
          <S.FaBarsDiv>
            <FaBars />
          </S.FaBarsDiv>
        </Link>
      </S.Nav>
    </header>
  );
}
export default Header;
