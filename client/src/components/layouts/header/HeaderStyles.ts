import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  nav {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.background};
    opacity: 80%;
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
  }
`;

export const LogoDiv = styled.div`
  color: ${colors.accent};
  display: flex;
  width: 20vh;
  gap: 2px;

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
    font-size: 1.2em;
  }
  a {
    font-size: 1.1em;
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
    font-size: 1.1em;
    width: 120px;
    white-space: nowrap; /* 텍스트가 한 줄에 표시되도록 설정 */
    display: flex;
    div {
      max-width: 70px; /* 최대 너비를 조절 (원하는 크기로 조절) */
      overflow: hidden; /* 넘치는 텍스트를 숨김 */
      text-overflow: ellipsis; /* 넘치는 텍스트에 '...'을 표시 */
    }
    &:hover {
      color: ${colors.accent};
    }
  }
  a {
    &:hover {
      color: ${colors.accent};
    }
  }

  @media (max-width: 768px) {
    button {
      font-size: 1em;
      width: 110px;
    }
    &.off {
      margin-top: -3px;
      overflow: none;
    }
    &.on {
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
      margin-top: -111px;
    }
  }
`;
