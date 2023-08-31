import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const FirstArticle = styled.article`
  position: sticky;
  margin-bottom: -4px;
  @keyframes slide-leftToRight {
    from {
      left: -100px;
      opacity: 0;
    }
    to {
      left: 150px;
      opacity: 1;
    }
  }
  @keyframes slide-leftToRight_m {
    from {
      left: -100px;
      opacity: 0;
    }
    to {
      left: 80px;
      opacity: 1;
    }
  }
  h1 {
    font-size: 2.8em;
    color: ${colors.textDark};
    font-family: sans-serif;
    position: absolute;
    top: 80px;
    left: 150px;
    color: ${colors.textLight};
    animation: slide-leftToRight 1s ease-out;
  }

  ul {
    font-size: 1.1em;
    position: absolute;
    color: white;
    top: 160px;
    left: 150px;
    list-style: none;
    padding-left: 0;
    animation: slide-leftToRight 1s ease-out;
    li {
      padding-bottom: 5px;
    }
  }

  img {
    width: 100%;
  }
`;

export const SecondArticle = styled.article`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 1.3em;
    position: absolute;
    color: ${colors.textLight};
    align-items: center;
    font-weight: bold;
  }
  img {
    background: fixed;
    width: 100%;
  }
`;

export const LastArticle = styled.article`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: orange;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;

  p {
    font-weight: bold;
    font-size: 1.3em;
    color: ${colors.textLight};
  }

  Link {
    text-decoration: none;
  }

  button {
    width: 130px;
    height: 35px;
    display: block;
    margin: auto;
    font-size: 1em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
`;

export const IconDiv = styled.div`
  margin-bottom: -10px;
  color: ${colors.accent};
  font-size: 3.2em;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.accent};
  font-weight: bold;
`;
