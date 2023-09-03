import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  table {
    margin: auto;
    margin-bottom: 50px;
    text-align: left;
    width: 70%;
    border-collapse: collapse;
    th {
      border-top: 3px solid ${colors.textDark};
      border-bottom: 3px solid ${colors.textDark};
    }
    th,
    td {
      padding: 17px;
    }
    th:nth-child(1) {
      width: 60%;
    }
    th:nth-child(2) {
      width: 20%;
      text-align: center;
    }
    th:nth-child(3) {
      width: 20%;
      text-align: center;
    }
  }
  div {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    button {
      width: 20%;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
      &:focus {
        outline-color: ${colors.accent};
      }
    }
  }
  @media (max-width: 768px) {
    table {
      width: 90%;
      th,
      td {
        padding: 15px 0px 15px 10px;
      }
      th:nth-child(1) {
        width: 50%;
        /* background-color: pink; */
      }
      th:nth-child(2) {
        width: 25%;
        text-align: center;
        font-size: 0.9em;
        /* background-color: red; */
      }
      th:nth-child(3) {
        width: 25%;
        text-align: center;
        /* background-color: blue; */
        font-size: 0.8em;
      }
    }
    div {
      button {
        width: 30%;
      }
    }
  }
`;
