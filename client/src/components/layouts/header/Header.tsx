import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';
import { useLogout } from '../../../Api/UsersApi';

function Header() {
  const navigate = useNavigate();
  const [toggleButton, setToggleButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState('');
  const setLogInOut = useLogout();

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  const handleLogout = async () => {
    try {
      const response = await setLogInOut.mutateAsync();
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log('Logout failed: ' + error);
    }
  };

  const getUserName = () => {};

  useEffect(() => {
    getUserName();
  }, [isLogin, loginUserName]);

  return (
    <header>
      <S.Nav className={toggleButton ? 'on' : 'off'}>
        <S.IconDiv className={toggleButton ? 'on' : 'off'}>
          <div>
            <FaDroplet />
          </div>
          <Link to={'/'}>Bittersweet Korea</Link>
        </S.IconDiv>
        <S.NavDiv className={toggleButton ? 'on' : 'off'}>
          {pages.map((page) => (
            <Link key={page.id} to={page.route}>
              {page.name}
            </Link>
          ))}
        </S.NavDiv>
        {isLogin ? (
          <S.Button className={toggleButton ? 'on' : 'off'} onClick={handleLogout} value={loginUserName}>
            {loginUserName}
          </S.Button>
        ) : (
          <Link to={'/login'} className={toggleButton ? 'on' : 'off'}>
            🔓LOG-IN
            {/* <S.Button className={toggleButton ? 'on' : 'off'} onClick={onClickLogButton} value={loginUserName}>
              🔓LOG-IN
            </S.Button> */}
          </Link>
        )}
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
