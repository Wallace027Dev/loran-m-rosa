import styled, { css } from 'styled-components'

export default styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background: var(--primary);
  border-radius: 1.25rem;
  border: 2px solid var(--primary);
  color: var(--bg);
  font-size: 1.2rem;
  font-weight: bold;
  height: 4rem;
  margin: 2.4rem 0;
  max-width: 50rem;
  width: 100%;
  transition: 0.2s ease-in;
  appearance: none;

  &::placeholder {
    color: var(--tertiary);
  }

  &:hover {
    background: var(--bg);
    color: var(--primary);
  }

  &:active {
    background: var(--secondary);
    color: var(--primary);
  }

  &[disabled] {
    background: var(--tertiary);
    cursor: default;
  }

  ${({ danger }) =>
    danger &&
    css`
      background: var(--danger);
      border: 2px solid var(--danger);

      &:hover {
        background: var(--danger-light);
        border: 2px solid var(--danger-light);
        color: var(--tertiary);
      }

      &:active {
        background: var(--bg);
        color: var(--font);
      }
    `}
`
