import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoginDiv } from './HeaderStyles';
import { useLogout, useAuth } from '../../../Api/UsersApi';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth } from '../../../features/userSlice';
import { RootState } from '../../../features/store';

function HeaderLogin({ className }: { className: string }) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const userName = useSelector((state: RootState) => state.user.name);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState<null | string>(null);
  const setLogout = useLogout();
  const { data: authData } = useAuth(); // 현재의 사용자 인증 데이터

  const handleLogout = async () => {
    try {
      await setLogout.mutateAsync();
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
          email: authData.email,
        })
      );
    }
  }, [authData]);

  return (
    <LoginDiv className={className}>
      {isLogin ? (
        <button onClick={handleLogout}>
          <div>{loginUserName}</div>님🔐
        </button>
      ) : (
        <Link to={'/login'}>LOGIN</Link>
      )}
    </LoginDiv>
  );
}
export default HeaderLogin;
