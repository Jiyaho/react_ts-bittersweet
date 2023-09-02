import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  text-align: center;
  border: none;
  border-bottom: 2px solid ${colors.textMd};
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
