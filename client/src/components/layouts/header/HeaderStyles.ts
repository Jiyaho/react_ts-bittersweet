import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Nav = styled.nav`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  opacity: 90%;
  padding: 5px 20px;
  position: sticky;
  top: 0;
  a {
    text-decoration: none;
    color: ${colors.textDark};
  }
  button {
    cursor: pointer;
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    &.off {
      height: 55px;
    }
    &.on {
      height: 100%;
    }
  }
`;

export const LogoDiv = styled.div`
  color: ${colors.accent};
  display: flex;
  width: 20vh;

  @media (max-width: 768px) {
    width: 73vh;
    &.off {
      display: flex;
    }
    &.on {
      display: none;
    }
  }
  div {
    font-size: 1.5em;
  }
  a {
    font-size: 1.3em;
    text-decoration: none;
    font-weight: bold;
    color: ${colors.textDark};
    &:hover {
      color: ${colors.accent};
    }
  }
`;

export const NavPagesDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9%;
  a {
    font-size: 1.1em;
    text-decoration: none;
    color: ${colors.textDark};
    &:hover {
      color: ${colors.accent};
    }
  }
  @media (max-width: 768px) {
    &.off {
      display: none;
      color: ${colors.accent};
      position: absolute;
    }
    &.on {
      display: flex;
      flex-direction: column;
      margin: 10% 0% 2% 36%;
      width: 30%;
      a {
        padding: 4%;
      }
    }
  }
`;

export const LoginDiv = styled.div`
  button {
    border: none;
    background-color: transparent;
    width: 100px;
    &:hover {
      color: ${colors.accent};
    }
  }
  a {
    font-size: 1.1em;
    &:hover {
      color: ${colors.accent};
    }
  }

  @media (max-width: 768px) {
    &.off {
      width: 170px;
      margin-right: 17.5px;
      overflow: none;
    }
    &.on {
      /* margin-right: -40px;
      margin-top: -214px;
      width: 110px; */
      display: none;
    }
  }
`;

export const FaBarsDiv = styled.div`
  color: ${colors.accent};
  font-size: 24px;
  margin-right: 5px;
  display: none;
  @media (max-width: 768px) {
    display: block;
    &.off {
    }
    &.on {
      margin-top: -122px;
    }
  }
`;
