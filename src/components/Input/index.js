import styled, { css } from 'styled-components';

export default styled.input`
  background-color: var(--secondary);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid var(--secondary);
  color: var(--font);
  font-size: 1.2rem;
  justify-content: center;
  height: 4rem;
  max-width: 50rem;
  outline: 0;
  padding: 0 1.6rem;
  width: 100%;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border: 2px solid var(--primary);
  }

  &::placeholder {
    color: var(--tertiary);
    font-weight: bold;
  }

  &[disabled] {
    color: var(--tertiary);
    border-color: var(--tertiary);
    background-color: var(--secondary);
  }

  ${({ error }) =>
    error &&
    css`
      color: var(--danger);
      border-color: var(--danger) !important;
    `};
`;
