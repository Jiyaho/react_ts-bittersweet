import { useEffect } from 'react';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Section } from './Mypage.styles';
import { Link } from 'react-router-dom';
import Withdrawal from '../../components/mypage/Withdrawal';

function MyPage() {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const userName = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    // 인증된 사용자(로그인한 유저)는 로그인 페이지 접속 시 홈으로 리다이렉트
    if (!isAuth) navigate('/login');
  }, [isAuth]);
  return (
    <Layout>
      <Title title="MY PAGE" />
      <Section>
        <h2>{userName}님 환영합니다.</h2>
        <div>
          <Link to="/mypage/update-profile">개인 정보 수정</Link>
          <Withdrawal />
        </div>
      </Section>
    </Layout>
  );
}
export default MyPage;
