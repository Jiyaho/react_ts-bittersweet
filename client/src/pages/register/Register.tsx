import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useState } from 'react';
import { Section } from './Register.styles';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeEmail = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  const onChangeName = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  const onChangePassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
  };
  return (
    <Layout>
      <Title title="REGISTER" />
      <Section>
        <form onSubmit={onSubmitHandler}>
          <input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
          <input type="text" placeholder="Name" value={name} onChange={onChangeName} />
          <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onChangeConfirmPassword} />
        </form>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </Section>
    </Layout>
  );
}
export default Register;
