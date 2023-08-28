import * as S from './BrandCoffee.styles';
import { baseUrl } from '../../utils/constants';

function BrandCoffee() {
  const addUrl = '/images/about/';
  const URL = baseUrl + addUrl;
  return (
    <S.Article>
      <h1>COFFEE</h1>
      <h2>최고의 커피는 최상의 원두로부터 나옵니다.</h2>
      <S.FirstDiv>
        <p>
          비터스윗의 아라비카 원두는 고품질, 그 이상의 의미를 갖습니다. <br />
          최상의 품질을 위한 최선의 노력들이 모든 단계에서 이뤄집니다.
        </p>
        <img src={URL + 'coffee-bean1.jpg'} alt="coffeeBean1" />
      </S.FirstDiv>

      <hr />

      <S.Divs>
        <img src={URL + 'coffee-bean2.jpg'} alt="coffeeBean2" />
        <div>
          <h3>"고품질을 위한, 고지대를 향한”</h3>
          <p>
            고품질의 아라비카 원두는 고도가 높은 곳에서 재배됩니다. <br />큰 일교차로 당도가 높고 밀도가 단단한 원두는 깊고
            복합적인 풍미를 냅니다.
          </p>
        </div>
      </S.Divs>

      <S.Divs>
        <div>
          <h3>“커피 농가와 지속적인 관계”</h3>
          <p>
            비터스윗은 커피 농부들과 공정한 커피 거래를 하며, <br /> 커피 농가와 지역사회가 커피 산업으로 지속 가능한 삶을
            영위하도록 노력하고 있습니다.
          </p>
        </div>
        <img src={URL + 'coffee-bean3.jpg'} alt="coffeeBean3" />
      </S.Divs>

      <S.Divs>
        <img src={URL + 'coffee-bean4.jpg'} alt="coffeeBean4" />
        <div>
          <h3>“까다롭고 엄격한 수확 과정”</h3>
          <p>
            비터스윗은 잘 익은 커피 열매만 수확합니다. <br />
            그리고 크기, 색깔 및 밀도를 기준으로 최상의 열매를 한 번 더 골라냅니다. <br />
            보다 까다롭고 엄격한 수확 과정이 곧 훌륭한 커피를 탄생시킵니다.
            <br />
            까다롭고 엄격한 수확 과정을 거쳐야 비로소 최상의 커피 맛을 구현할 수 있습니다.
          </p>
        </div>
      </S.Divs>
    </S.Article>
  );
}
export default BrandCoffee;
