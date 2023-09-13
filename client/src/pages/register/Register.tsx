import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useState } from 'react';
import { Section } from './Register.styles';
import { usersUrl } from '../../utils/constants';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
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
    setName(target.value);
  };

  const onChangePassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setConfirmPassword(target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    try {
      const body = {
        name,
        email,
        password,
      };
      const response = await axios.post(`${usersUrl}/register`, body);
      if (response.status === 201) {
        alert('회원가입 완료!');
        navigate('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        // DB에 이미 존재하는 이메일인 경우(status code 409인 경우)
        if (axiosError.response && axiosError.response.status === 409) {
          alert('이미 존재하는 이메일 주소입니다.');
        }
      } else {
        console.log(error);
      }
    }
  };
  return (
    <Layout>
      <Title title="REGISTER" />
      <Section>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="Name" value={name} onChange={onChangeName} />
          <input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
          <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onChangeConfirmPassword} />
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </Section>
    </Layout>
  );
}
export default Register;
