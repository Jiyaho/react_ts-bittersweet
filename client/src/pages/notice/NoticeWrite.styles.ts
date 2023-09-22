import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  width: 70%;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      border-bottom: 1px solid black;
      font-size: 1.1em;
      margin-bottom: 15px;
      padding: 10px 0px 5px 10px;
      &:focus {
        outline: none;
      }
    }
    input,
    textArea {
      &:focus::placeholder {
        color: transparent;
      }
    }
    textArea {
      margin-bottom: 15px;
      padding: 10px;
      margin-top: 5px;
      font-size: 1.3em;
      &:focus {
        outline-color: ${colors.accent};
      }
    }
    div {
      width: 100%;
      margin: auto;
      display: flex;
      button {
        width: 100%;
        margin: 10px;
        font-size: 1.2em;
        border-radius: 5px;
        background-color: ${colors.accent};
        color: ${colors.textLight};
        border: none;
        padding: 5px;
        cursor: pointer;
        &:focus {
          outline-color: ${colors.textDark};
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 85%;
  }
`;
