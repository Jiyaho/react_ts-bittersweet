import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import KakaoMap from '../../components/findStore/KakaoMap';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Input = styled.input`
  width: 100%;
  height: 40px;
  text-align: center;
  border: none;
  border-bottom: 2px solid ${colors.textMd};
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 5px;
`;

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
