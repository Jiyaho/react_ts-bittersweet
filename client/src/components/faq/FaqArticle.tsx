import { useEffect, useState } from 'react';
import { faqList } from '../../utils/constants';
import { FaqType } from '../../utils/types';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import FormOfFaq from './FormOfFaq';

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

function FaqArticle() {
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
    <>
      <Input onChange={inputChange} value={inputValue} placeholder="🔍 검색할 내용을 입력해 주세요."></Input>;
      <article>
        {filteredQuestion.map((qna) => (
          <div key={qna.idx}>
            <FormOfFaq question={qna.q} answer={qna.a} />
          </div>
        ))}
      </article>
    </>
  );
}
export default FaqArticle;
