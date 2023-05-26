import styled from 'styled-components';

export const Continer = styled.div`
  & + & {
    margin-top: 1.6rem;
  }
  small {
    color: var(--danger);
    font-size: 1.2rem;
    margin-top: 0.8rem;
    display: block;
  }
`;
