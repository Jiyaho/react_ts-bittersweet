import AboutNav from '../../components/about/AboutNav';
import BrandCoffee from '../../components/about/BrandCoffee';
import BrandHistory from '../../components/about/BrandHistory';
import BrandPrinciples from '../../components/about/BrandPrinciples';
import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';
import styled from 'styled-components';

function AboutUs() {
  return (
    <Layout>
      <ScrollButton />
      <Section>
        <Title title="ABOUT BITTERSWEET" />
        <AboutNav />
        <BrandHistory />
        <BrandPrinciples />
        <BrandCoffee />
      </Section>
    </Layout>
  );
}
export default AboutUs;

const Section = styled.section`
  margin-top: 50px;
  width: 100%;
`;
