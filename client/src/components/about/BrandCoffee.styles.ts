import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Article = styled.article`
  padding: 50px 0px 50px 0px;

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
    width: 70%;
    margin-top: 40px;
    margin-bottom: 45px;
    list-style: none;
    font-size: 1em;
    padding-left: 0;
  }
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    justify-content: center;
    width: 950px;
    margin: 30px 0px 50px 0px;
  }
  @media (max-width: 768px) {
    img {
      width: 85%;
      margin-bottom: 20px;
    }
  }
`;

export const Divs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  img {
    width: 450px;
    margin: 45px 0px 20px 0px;
  }
  div {
    width: 450px;
    margin: 45px 0px 20px 0px;

    h3 {
      color: ${colors.accent};
      font-size: 1.2em;
    }
    p {
      font-size: 0.9em;
    }
  }
  @media (max-width: 768px) {
    gap: -0px;
    margin-top: -55px;
    margin-bottom: -30px;
    img {
      width: 85%;
    }
  }
`;
