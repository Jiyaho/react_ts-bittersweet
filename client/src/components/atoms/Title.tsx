import styled from 'styled-components';
import { colors } from '../../styles/colors';

type TitleType = {
  title: string;
};

function Title({ title }: TitleType) {
  return <H1>{title}</H1>;
}
export default Title;

const H1 = styled.h1`
  text-align: center;
  color: ${colors.accent};
  font-size: 2.2em;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    font-size: 1.7em;
    margin: 30px 0px 50px 0px;
  }
`;
