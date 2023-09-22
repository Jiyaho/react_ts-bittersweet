import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  width: 100%;
  margin-top: 150px;
  form {
    width: 270px;
    display: flex;
    flex-direction: column;
    margin: auto;
    label {
      text-align: center;
      font-size: 1.2em;
    }
    input {
      padding: 8px;
      height: 25px;
      font-size: 1.1em;
      margin-bottom: 10px;
      border: none;
      border-bottom: 1px solid ${colors.textDark};
      &:focus {
        outline: none;
      }
      &:focus::placeholder {
        color: transparent;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 270px;
      height: 40px;
      font-size: 1.1em;
      margin: 5px;
      cursor: pointer;
      &:focus {
        outline-color: ${colors.accent};
      }
    }
    a {
      &:focus {
        outline-color: ${colors.accent};
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;
