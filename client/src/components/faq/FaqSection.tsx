import { useEffect, useState } from 'react';
import { faqList } from '../../utils/constants';
import { FaqType } from '../../utils/types';
import FormOfFaq from './FormOfFaq';
import { Section } from './FaqSection.styles';

function FaqSection() {
  const [faqs, setFaqs] = useState<FaqType[]>([]);
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };

  useEffect(() => {
    setFaqs(faqList);
  }, []);

  const filteredQuestion = faqs.filter((faq) => {
    return faq.q.includes(inputValue);
  });

  return (
    <Section>
      <input onChange={inputChange} value={inputValue} placeholder="🔍 검색할 내용을 입력해 주세요."></input>
      <article>
        {filteredQuestion.map((qna) => (
          <div key={qna.idx}>
            <FormOfFaq question={qna.q} answer={qna.a} />
          </div>
        ))}
      </article>
    </Section>
  );
}
export default FaqSection;
