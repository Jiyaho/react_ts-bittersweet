import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3%;
  gap: 10vh;
  @media (max-width: 768px) {
    gap: 3vh;
  }
`;
