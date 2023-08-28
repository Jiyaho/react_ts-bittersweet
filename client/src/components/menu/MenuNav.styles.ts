import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Nav = styled.nav`
  border-bottom: 2px solid gray;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  div {
    width: 150px;
    text-align: center;
    &:hover {
      border-bottom: 5px solid ${colors.accent};
      cursor: pointer;
      margin-bottom: -7px;
    }
  }
  a {
    text-decoration: none;
    color: ${colors.textDark};
    font-size: 1.2em;
  }
`;
