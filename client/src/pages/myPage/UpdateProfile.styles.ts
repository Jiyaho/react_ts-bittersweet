import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  form {
    width: 40%;
    /* max-width: 400px; */
    margin: auto;

    div {
      /* background-color: pink; */
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
`;
