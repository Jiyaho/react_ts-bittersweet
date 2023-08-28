import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import KakaoMap from '../../components/findStore/KakaoMap';

function FindStore() {
  return (
    <Layout>
      <Title title="FIND A STORE" />
      <H2>🔍 가까운 매장을 찾아보세요.</H2>
      <KakaoMap />
    </Layout>
  );
}
export default FindStore;

const H2 = styled.h2`
  color: ${colors.textMd};
  font-size: 1.3em;
  text-align: center;
  border-bottom: 2px solid gray;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 3px;
`;
