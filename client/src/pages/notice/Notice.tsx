import { useNavigate } from 'react-router-dom';
import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import NoticeTable from '../../components/notice/NoticeTable';
import { Button } from './Notice.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

function Notice() {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const handleButton = () => {
    // 로그인하지 않은 사용자는 로그인 페이지로 리다이렉트
    if (!isAuth) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else {
      navigate('/notice-write');
    }
  };

  return (
    <Layout>
      <Title title="NOTICE" />
      <ScrollButton />
      <section>
        <Button onClick={handleButton}>📝 WRITE</Button>
        <article>
          <NoticeTable />
        </article>
      </section>
    </Layout>
  );
}
export default Notice;
