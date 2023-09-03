import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Article = styled.article`
  @keyframes easeOut {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  margin-top: 20px;
  top: 150px;
  animation: easeOut 2s ease-out;

  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 45px;
  }
  h2 {
    color: ${colors.accent};
    text-align: center;
    margin: auto;
    font-style: italic;
    font-size: 1.1em;
    font-weight: bold;
  }
  img {
    width: 70%;
    display: block;
    margin: auto;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    img {
      width: 95%;
    }
  }
`;
