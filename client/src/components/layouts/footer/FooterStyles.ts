import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FooterStyle = styled.footer`
  height: min-content;
  padding: 15px;
  background-color: ${colors.accent};
  font-size: 0.9em;
  ul {
    padding-left: 0;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    color: ${colors.textLight};
    li {
      list-style: square;
    }
  }
  div {
    margin-top: 10px;
    text-align: center;
    color: ${colors.textLight};
  }
  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      text-align: center;
      li {
        list-style: none;
      }
    }
  }
`;
