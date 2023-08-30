import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`;

export const MenuDescDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;
  width: 55%;
  margin-right: 3%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-right: 40px;
    width: 59%;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: -25px;
    }
    li:nth-child(1) {
      font-size: 1.3em;
      border-bottom: 2px solid black;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    li:nth-child(2) {
      font-size: 2.3em;
    }
    li:nth-child(3) {
      font-size: 1.4em;
      color: ${colors.accent};
      margin-bottom: 10px;
    }
    li:nth-child(4) {
      font-size: 1.15em;
      margin-bottom: 50px;
    }
  }
  div {
    width: 70%;
    @media (max-width: 768px) {
      width: 100%;
    }
    img {
      width: 100%;
      display: block;
      border-radius: 15px;
    }
  }
`;

export const MenuSizeDiv = styled.div`
  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 3px;
      font-size: 1em;
    }
    li:nth-child(1) {
      font-size: 1.2em;
      font-weight: bold;
      border-bottom: 2px solid ${colors.textDark};
      padding-bottom: 5px;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }
  h3 {
    border-bottom: 2px solid ${colors.textDark};
    font-size: 1.2em;
    font-weight: bold;
    padding-bottom: 5px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;

export const KcalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ul {
    list-style: none;
    padding-left: 0;
    li {
      font-size: 1em;
      margin-bottom: 3px;
    }
  }
`;

export const NumbersUl = styled.ul`
  text-align: right;
`;
