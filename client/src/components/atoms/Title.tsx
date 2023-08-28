import styled from 'styled-components';
import { colors } from '../../styles/colors';

function Title({ title }: { title: string }) {
  return <H1>{title}</H1>;
}
export default Title;

const H1 = styled.h1`
  text-align: center;
  color: ${colors.accent};
  font-size: 2em;
  margin-bottom: 70px;
`;
