import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  input {
    width: 100%;
    height: 40px;
    text-align: center;
    border: none;
    border-bottom: 2px solid ${colors.textMd};
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 30px;
    /* &:focus {
    outline: none;
    place-content: none;
    color: transparent;
  } */
  }

  article {
    width: 70%;
    margin: auto;
    @media (max-width: 768px) {
      width: 85%;
    }
  }
`;
