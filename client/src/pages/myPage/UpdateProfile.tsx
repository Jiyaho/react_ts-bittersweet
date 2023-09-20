import React, { useState } from 'react';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { useAuth, useCheckSameEmail, useUpdateProfile } from '../../Api/UsersApi';
import { UserProfileType } from '../../utils/types';
import { Section } from './UpdateProfile.styles';

function UpdateProfile() {
  const navigate = useNavigate();
  const updateProfile = useUpdateProfile();
  const { data: authUser } = useAuth();
  const { mutateAsync: checkSameEmail } = useCheckSameEmail();
  const [email, setEmail] = useState(authUser ? authUser.email : '');
  const [name, setName] = useState(authUser ? authUser.name : '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailCheckResult, setEmailCheckResult] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailCheckResult('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  // 포커스가 떠날 때 이메일 중복 체크 실행
  const handleEmailBlur = async () => {
    try {
      const response = await checkSameEmail(email);
      if (authUser.email !== email && response.isDuplicate) {
        setEmailCheckResult('❌ 이미 사용 중인 이메일');
      } else if (!email.length) {
        setEmailCheckResult('.');
      } else {
        setEmailCheckResult('✅ 사용 가능한 이메일');
      }
    } catch (error) {
      console.error('이메일 중복 확인 중 오류가 발생했습니다.', error);
      setEmailCheckResult('오류 발생');
    }
  };

  // 회원 정보 수정 및 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    try {
      const body: UserProfileType = {
        name,
        email,
        password,
      };
      await updateProfile.mutateAsync(body);
      alert('회원 정보가 수정되었습니다.');
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <Layout>
      <Title title="회원 정보 관리" />
      <Section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">이름:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="이름을 입력하세요" required />
            <div className="check">최대 10자</div>
          </div>
          <div>
            <label htmlFor="email">이메일:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="이메일을 입력하세요"
              required
            />
            <div className="check" style={{ color: emailCheckResult.startsWith('❌') ? 'red' : 'green' }}>
              {emailCheckResult}
            </div>
          </div>

          <div>
            <label htmlFor="password">새 비밀번호:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="새 비밀번호를 입력하세요"
              required
            />
            <div className="check">최대 10자</div>
          </div>
          <div>
            <label htmlFor="confirmPassword">비밀번호 확인:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="비밀번호 확인을 입력하세요"
              required
            />
            {password.length === 0 ? (
              <div className="check"></div>
            ) : password === confirmPassword ? (
              <div className="check match">✅ 비밀번호 일치</div>
            ) : (
              <div className="check unmatch">❌ 비밀번호 불일치</div>
            )}
          </div>
          <button type="submit">저장</button>
        </form>
      </Section>
    </Layout>
  );
}
export default UpdateProfile;
