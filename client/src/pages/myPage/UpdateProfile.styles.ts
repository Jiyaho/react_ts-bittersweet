import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  form {
    width: 40%;
    margin: auto;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 25px;
      gap: 20px;
      height: 50px;
      label {
        font-size: 1.1em;
        width: 22%;
      }
      input {
        width: 40%;
        height: min-content;
        border: none;
        border-bottom: 1px solid black;
        font-size: 1.15em;
      }
    }
  }
  .check {
    width: 32%;
  }
  .match {
    color: green;
  }
  .unmatch {
    color: red;
  }
  .buttons_wrap {
    display: flex;
    justify-content: center;
    button {
      width: 30%;
      height: 40px;
      cursor: pointer;
      font-size: 1em;
      a {
        text-decoration: none;
        color: ${colors.textDark};
      }
    }
  }
  @media (max-width: 768px) {
    form {
      width: 90%;
      div {
        gap: 8px;
        margin-bottom: 10px;
        label {
          font-size: 0.9em;
          width: 26%;
        }
        input {
          width: 49%;
          height: min-content;
          border: none;
          border-bottom: 1px solid black;
          font-size: 1.1em;
          &::placeholder {
            font-size: 0.8em;
          }
        }
      }
      .check {
        width: 23%;
        font-size: 0.8em;
      }
    }
  }
`;
