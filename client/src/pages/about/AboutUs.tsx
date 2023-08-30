import AboutNav from '../../components/about/AboutNav';
import BrandCoffee from '../../components/about/BrandCoffee';
import BrandHistory from '../../components/about/BrandHistory';
import BrandPrinciples from '../../components/about/BrandPrinciples';
import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import Layout from '../../components/layouts/Layout';

function AboutUs() {
  return (
    <Layout>
      <ScrollButton />
      <section>
        <Title title="ABOUT BITTERSWEET" />
        <AboutNav />
        <BrandHistory />
        <BrandPrinciples />
        <BrandCoffee />
      </section>
    </Layout>
  );
}
export default AboutUs;
