import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Nav = styled.nav`
  border-bottom: 2px solid gray;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 0;
    gap: 9%;
  }

  li {
    width: 180px;
    text-align: center;
    list-style: none;
    margin-bottom: -10px;
    font-size: 1.2em;
    &:hover {
      border-bottom: 5px solid ${colors.accent};
      margin-bottom: -19px;
      cursor: pointer;
    }
  }
`;
