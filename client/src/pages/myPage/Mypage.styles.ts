import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: ${colors.textDark};
      font-size: 1.1em;
      margin-top: 20px;
      margin-bottom: 12px;
      &:hover {
        color: ${colors.accent};
      }
    }
    button {
      width: 110px;
      margin: auto;
      font-size: 1.1em;
      border: none;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        color: ${colors.accent};
      }
    }
  }
`;
