import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Table = styled.table`
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  text-align: center;
  th {
    border-top: 3px solid ${colors.textDark};
    border-bottom: 3px solid ${colors.textDark};
  }
  td {
    border-bottom: 1px solid ${colors.textMd};
  }
  th,
  td {
    padding: 17px;
  }
  th:nth-child(1) {
    width: 7%;
  }
  th:nth-child(2) {
    width: 49%;
  }
  th:nth-child(3) {
    width: 24%;
  }
  @media (max-width: 768px) {
    width: 90%;
    th {
      border-top: 3px solid ${colors.textDark};
      border-bottom: 3px solid ${colors.textDark};
    }
    td {
      border-bottom: 1px solid ${colors.textMd};
    }
    th,
    td {
      padding: 17px;
    }
    th:nth-child(1) {
      width: 7%;
    }
    th:nth-child(2) {
      width: 49%;
    }
    th:nth-child(3) {
      width: 24%;
    }
    td:nth-child(4) {
      font-size: 0.8em;
    }
  }
`;
