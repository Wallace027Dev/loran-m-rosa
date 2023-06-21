import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1.6rem;
  }

  small {
    color: var(--danger);
    font-size: 1.2rem;
    margin-top: 0.8rem;
    display: block;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      right: 1.6rem;
      top: 1.2rem;
    }
  }
`;
