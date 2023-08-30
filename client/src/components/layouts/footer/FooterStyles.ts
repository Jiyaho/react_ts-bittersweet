import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Footer = styled.footer`
  width: 100%;
  height: min-content;
  padding: 15px;
  background-color: ${colors.accent};
  font-size: 0.9em;
`;

export const Ul = styled.ul`
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

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    li {
      list-style: none;
    }
  }
`;

export const Div = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${colors.textLight};
`;
