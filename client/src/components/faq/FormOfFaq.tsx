import { BiSolidDownArrow } from 'react-icons/bi';
import { useState } from 'react';
import * as S from './FormOfFaq.styles';

interface FormOfFaq {
  question: string;
  answer: string;
}

function FormOfFaq({ question, answer }: FormOfFaq) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <S.Button onClick={handleToggle}>
        <span className={toggle ? 'on' : 'off'}>Q.{question}</span>
        <span className={toggle ? 'on' : 'off'}>
          <BiSolidDownArrow />
        </span>
      </S.Button>
      <S.Div className={toggle ? 'on' : 'off'}>A.{answer}</S.Div>
    </>
  );
}
export default FormOfFaq;
