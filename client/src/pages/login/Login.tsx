import { Link, useNavigate } from 'react-router-dom';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { Section } from './Login.styles';
import { useEffect, useState } from 'react';
import { usersUrl } from '../../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth } from '../../features/userSlice';
import { RootState } from '../../features/store';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const onChangeEmail = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };
  const onChangePassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };
      const response = await axios.post(`${usersUrl}/login`, body, { withCredentials: true });
      if (response.data.loginSuccess) {
        console.log(response.data);
        dispatch(
          setUserAuth({
            isAuth: true,
            name: response.data.userName,
            isAdmin: response.data.role === 0 ? false : true,
            email: response.data.email,
          })
        );
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // 인증된 사용자(로그인한 유저)는 로그인 페이지 접속 시 홈으로 리다이렉트
    if (isAuth) navigate('/');
  }, [isAuth]);
  return (
    <Layout>
      <Title title="LOGIN" />
      <Section>
        <form onSubmit={onSubmitHandler}>
          <input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
          <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
          <div>
            <button type="submit">Login</button>
            <Link to={'/register'}>
              <button>Sign up</button>
            </Link>
          </div>
        </form>
      </Section>
    </Layout>
  );
}
export default Login;
