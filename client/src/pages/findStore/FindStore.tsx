import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import KakaoMap from '../../components/findStore/KakaoMap';
import { Input } from './FindStore.styles';

function FindStore() {
  return (
    <Layout>
      <Title title="FIND A STORE" />
      <Input placeholder="🔍 가까운 매장을 찾아보세요.."></Input>;
      <KakaoMap />
    </Layout>
  );
}
export default FindStore;
