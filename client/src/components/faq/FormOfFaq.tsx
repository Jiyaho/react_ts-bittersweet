import { BiSolidDownArrow } from 'react-icons/bi';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { useState } from 'react';

const Button = styled.button`
  width: 70%;
  margin: auto;
  background-color: ${colors.faqButtonsBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: none;
  outline: none;
  font-size: 20px;
  color: ${colors.textLight};
  font-weight: 700;
  cursor: pointer;
`;
const Div = styled.div`
  text-align: center;
`;

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
      <Button>
        <span>Q.{question}</span>
        <span>
          <BiSolidDownArrow />
        </span>
      </Button>
      <Div>A.{answer}</Div>
    </>
  );
}
export default FormOfFaq;
