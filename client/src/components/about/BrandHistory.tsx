import * as S from './BrandHistory.styles';
import { baseUrl } from '../../utils/constants';

function BrandHistory() {
  const addUrl = '/images/about/';
  const URL = baseUrl + addUrl;

  return (
    <S.Article>
      <h1>HISTORY</h1>
      <h2>커피에 언제나 진심이었던 비터스윗은 성장하고 있습니다.</h2>
      <img src={URL + 'history.jpg'} alt="history" />
    </S.Article>
  );
}
export default BrandHistory;
