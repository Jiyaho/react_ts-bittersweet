import * as S from './AboutNav.styles';

function AboutNav() {
  const scrollToBrandPrinciple = () => {
    window.scrollTo({ top: 580, behavior: 'smooth' });
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };
  const scrollToCoffee = () => {
    window.scrollTo({ top: 1610, behavior: 'smooth' });
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 1140, behavior: 'smooth' });
    }
  };

  return (
    <>
      <S.Nav>
        <ul>
          <li>HISTORY</li>
          <li onClick={scrollToBrandPrinciple}>BRAND PRINCIPLE</li>
          <li onClick={scrollToCoffee}>COFFEE</li>
        </ul>
      </S.Nav>
    </>
  );
}
export default AboutNav;
