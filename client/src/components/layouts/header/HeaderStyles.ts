import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  opacity: 90%;
  padding: 5px 20px;
  position: sticky;
  top: 0;
`;

export const IconDiv = styled.div`
  color: ${colors.accent};
  margin-right: 5px;
  display: flex;
`;

export const FaDropletDiv = styled.div`
  font-size: 1.5em;
`;

export const LogoLink = styled(Link)`
  font-size: 1.3em;
  text-decoration: none;
  font-weight: bold;
  color: ${colors.textDark};
  &:hover {
    color: ${colors.accent};
  }
`;

export const PageLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  color: ${colors.textDark};
  &:hover {
    color: ${colors.accent};
  }
`;

type StyledUlProps = { toggle: any };

export const Ul = styled.ul<StyledUlProps>`
  li {
    padding: 8px 40px;
    font-size: 19px;
  }

  ${({ toggle }) => {
    return toggle
      ? ` 
        display: none;
        color: ${colors.accent};
        position: absolute;
        right: 32px;
        font-size: 24px;
      `
      : `
        display: flex;
        list-style: none;
        padding-left: 0;
      `;
  }}
`;

export const FaBarsDiv = styled.div`
  color: ${colors.accent};
  font-size: 24px;
  margin-right: 5px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
