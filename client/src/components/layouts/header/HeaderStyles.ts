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
  @media (max-width: 768px) {
    &.off {
      height: 55px;
    }
    &.on {
      height: 100%;
    }
  }
`;

export const IconDiv = styled.div`
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

export const NavDiv = styled.div`
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

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 100px;
  @media (max-width: 768px) {
    &.off {
      width: 170px;
      margin-right: 7px;
    }
    &.on {
      margin-right: -36px;
      margin-top: -198px;
      width: 90px;
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
    &.on {
      margin-top: -112.5px;
    }
  }
`;
