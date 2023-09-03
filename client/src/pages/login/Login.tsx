import { Link } from 'react-router-dom';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { Section } from './Login.styles';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };
  const onChangePassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };
  return (
    <Layout>
      <Title title="LOGIN" />
      <Section>
        <form>
          <input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
          <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
        </form>
        <div>
          <button type="submit">Login</button>
          <Link to={'/register'}>
            <button>Sign up</button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
export default Login;
