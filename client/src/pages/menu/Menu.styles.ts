import styled from 'styled-components';

export const Article = styled.article`
  width: 68%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5%;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2%;

    img {
      width: 260px;
      margin-top: 20px;
      margin-bottom: 15px;
      transform: sacle(1);
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transition: all 0.4s ease-in-out;
      &:hover {
        transform: sacle(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
      }
    }
  }
`;
