import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Button = styled.button`
  width: 100%;
  margin: auto;
  background-color: ${colors.faqButtonsBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border: none;
  outline: none;
  font-size: 1.2em;
  color: ${colors.textLight};
  font-weight: 700;
  cursor: pointer;

  span:nth-child(2) {
    &.on {
      color: ${colors.accent};
      transform: rotate(180deg);
      transition: all ease 1s;
    }
    &.off {
      transition: transform 0.5s ease-in;
    }
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
export const Div = styled.div`
  opacity: 0;
  line-height: 1.5;
  overflow: hidden;
  margin-bottom: 5px;
  height: 0px;

  &.on {
    background-color: ${colors.faqButtonsBg};
    border-top: 3px dotted white;
    color: ${colors.accent};
    font-size: 1.2em;
    font-weight: bold;
    max-height: 200px;
    opacity: 1;
    padding: 10px 0px 0px 16px;
    margin-bottom: 5px;
    transition: height 0.5s ease;
    height: 40px;
    @media (max-width: 768px) {
      font-size: 1em;
      height: 34px;
    }
  }
  &.off {
    transition: all 0.5s ease;
  }
`;
