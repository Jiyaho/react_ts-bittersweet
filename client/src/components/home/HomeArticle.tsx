import { FaDroplet } from 'react-icons/fa6';
import * as S from './HomeArticleStyles';
import { Link } from 'react-router-dom';
import { ColdBrew, CoffeeBean } from '../../assets/images/home';

function HomeArticle() {
  const baseUrl = process.env.PUBLIC_URL;
  const addUrl = '/images/home/';
  const URL = baseUrl + addUrl;

  return (
    <S.Section>
      <S.FirstArticle>
        <h1>NEW COLD BREW</h1>
        <ul>
          <li>Bittersweet 바리스타의 정성으로 탄생한,</li>
          <li>최상급 원두로 차가운 물로 14시간 동안 추출한 콜드 브루.</li>
          <li>깊은 풍미의 새로운 커피를 즐겨 보세요.</li>
        </ul>
        {/* <img src={URL + 'cold-brew.jpg'} alt="cold-brew" /> */}
        <img src={ColdBrew} alt="cold-brew" />
      </S.FirstArticle>

      <S.SecondArticle>
        <div>
          <span>Bittersweet의 다양한 프리미엄 원두, 원하는 원두를 선택해 주문하세요.</span>
          {/* <img src={URL + 'coffee-bean.jpg'} alt="coffee-bean" loading="lazy" /> */}
          <img src={CoffeeBean} alt="coffee-bean" loading="lazy" />
        </div>
      </S.SecondArticle>

      <S.LastArticle>
        <div>
          <div className="icon">
            <FaDroplet />
          </div>
          <p>가까이 있는 Bittersweet 매장을 찾아보세요.</p>
          <button>
            <Link to={'/store'}>🔍 매장 검색하기</Link>
          </button>
        </div>
      </S.LastArticle>
    </S.Section>
  );
}
export default HomeArticle;
