import { useEffect, useState } from 'react';
import { BiSolidToTop } from 'react-icons/bi';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

function ScrollButton() {
  const [toggleButton, setToggleButton] = useState(false);

  const handleScroll = () => {
    window.scrollY > 350 ? setToggleButton(true) : setToggleButton(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {toggleButton ? (
        <Button onClick={scrollToTop}>
          <BiSolidToTop />
        </Button>
      ) : null}
    </>
  );
}
export default ScrollButton;

const Button = styled.button`
  position: fixed;
  font-size: 2em;
  border: none;
  color: ${colors.textDark};
  background-color: ${colors.textLight};
  padding: 5px 5px 0px 5px;
  border-radius: 10px;
  margin-left: 91%;
  margin-top: 500px;
  cursor: pointer;
`;
