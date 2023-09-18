import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';
import { useLogout, useAuth } from '../../../Api/UsersApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store';
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../../features/userSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const authUserName = useSelector((state: RootState) => state.user.name);
  const [toggleButton, setToggleButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState<null | string>(null);
  const setLogout = useLogout();
  const { data: authData } = useAuth();

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  const handleLogout = async () => {
    try {
      const response = await setLogout.mutateAsync();
      if (response.status === 200) {
        dispatch(
          setUserAuth({
            isAuth: false,
            name: null, // 필요한 사용자 정보
          })
        );
        window.location.reload();
      }
    } catch (error) {
      console.log('Logout failed: ' + error);
    }
  };

  const getAuthState = () => {
    if (authData?.isAuth) {
      setIsLogin(true);
      setLoginUserName(authData.name);
    } else {
      setIsLogin(false);
      setLoginUserName('🔓LOG-IN');
    }
  };

  useEffect(() => {
    console.log(authData);

    getAuthState();
  }, [authData, isLogin, loginUserName]);

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
