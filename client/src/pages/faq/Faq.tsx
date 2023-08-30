import ScrollButton from '../../components/atoms/ScrollButton';
import Title from '../../components/atoms/Title';
import FaqSection from '../../components/faq/FaqSection';
import Layout from '../../components/layouts/Layout';

function Faq() {
  return (
    <Layout>
      <ScrollButton />
      <Title title="자주하는 질문" />
      <FaqSection />
    </Layout>
  );
}
export default Faq;
