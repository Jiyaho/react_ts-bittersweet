import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Article = styled.article`
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
  ul {
    text-align: center;
    margin: auto;
    width: 85%;
    margin-top: 40px;
    margin-bottom: 45px;
    list-style: none;
    font-size: 1em;
    padding-left: 0;
  }
  li {
    margin-bottom: 4px;
  }
  img {
    width: 950px;
    display: block;
    margin: auto;
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.4em;
    }
    h2 {
      font-size: 0.9em;
    }
    img {
      width: 85%;
    }
  }
`;
