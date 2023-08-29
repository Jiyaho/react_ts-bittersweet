import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Nav = styled.nav`
  margin-left: 4%;
  a {
    font-size: 1.2em;
    text-decoration: none;
    color: ${colors.textDark};
    &:hover {
      color: ${colors.accent};
      border-bottom: 1px solid ${colors.accent};
    }
  }
  span {
    color: ${colors.accent};
    margin: 0px 7px 0px 7px;
  }
`;
