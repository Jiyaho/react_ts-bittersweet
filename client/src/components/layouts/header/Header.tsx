import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';
import { useLogout, useAuth } from '../../../Api/UsersApi';
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../../features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const [toggleButton, setToggleButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState<null | string>(null);
  const setLogout = useLogout();
  const { data: authData } = useAuth(); // 현재의 사용자 인증 데이터

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  const handleLogout = async () => {
    try {
      const response = await setLogout.mutateAsync();
      if (response.status === 200) {
        dispatch(
          setUserAuth({
            isAuth: false, // 인증 여부: false
            name: null, // 사용자 이름 null로 초기화
            isAdmin: false,
          })
        );
        window.location.reload();
      }
    } catch (error) {
      console.log('Logout failed: ' + error);
    }
  };

  // 사용자 인증 상태 얻기위한 함수
  const getAuthState = () => {
    // 인증된 사용자(로그인한 상태의 사용자)
    if (authData?.isAuth) {
      setIsLogin(true);
      setLoginUserName(authData.name);
    } else {
      setIsLogin(false);
      setLoginUserName('🔓LOG-IN');
    }
  };

  useEffect(() => {
    getAuthState();
    // 인증된 사용자(로그인한 유저) 상태를 dispatch하여 업데이트
    if (authData) {
      dispatch(
        setUserAuth({
          isAuth: authData.isAuth,
          name: authData.name,
          isAdmin: authData.isAdmin,
        })
      );
    }
  }, [authData]);

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

        <S.LoginDiv className={toggleButton ? 'on' : 'off'}>
          {isLogin ? <button onClick={handleLogout}>{loginUserName} 님</button> : <Link to={'/login'}>🔓LOG-IN</Link>}
        </S.LoginDiv>

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
