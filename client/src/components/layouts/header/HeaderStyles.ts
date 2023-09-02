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
  width: 40vh;

  @media (max-width: 768px) {
    width: 73vh;
    /* margin-top: -210px; */
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
  margin-left: -50px;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8%;

  li {
    font-size: 19px;
    list-style: none;

    a {
      font-size: 1em;
      text-decoration: none;
      color: ${colors.textDark};
      &:hover {
        color: ${colors.accent};
      }
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
      align-items: center;
      margin-left: 64%;
      margin-top: 13%;
      width: 50%;
      list-style: none;
      padding-left: 0;
      li {
        padding: 4.5%;
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 35%;
  margin-right: -140px;
  @media (max-width: 768px) {
    &.off {
      margin-right: 0px;
    }
    &.on {
      margin-left: 17%;
      margin-top: -236px;
      width: 21%;
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
      margin-top: -132px;
    }
  }
`;
