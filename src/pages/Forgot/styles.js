import styled from 'styled-components';

export const Container = styled.main`
  h2 {
    color: var(--primary);
    font-weight: bold;
    margin-bottom: 18rem;
    text-align: center;
  }

  span {
    color: var(--tertiary);
  }

  .spc-betwn {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;
