import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 80%;
  margin-bottom: 30px;
  font-size: 1.3em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 70%;
    margin-bottom: 10px;
    font-size: 1.1em;
  }
`;
