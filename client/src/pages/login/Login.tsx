import { Link, useNavigate } from 'react-router-dom';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { Section } from './Login.styles';
import { useState } from 'react';
import { usersUrl } from '../../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../features/userSlice';
import { useAuth } from '../../Api/UsersApi';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: authData } = useAuth();

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
        // 로그인 성공 시 사용자 이름 저장
        dispatch(
          setUserAuth({
            isAuth: authData.isAuth,
            name: authData.name,
          })
        );
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
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
