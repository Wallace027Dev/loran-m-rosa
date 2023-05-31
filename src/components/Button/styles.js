import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
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
  max-width: 50rem;
  padding: 0 1.6rem;
  transition: 0.2s ease-in;
  appearance: none;

  &[disabled] {
    background: var(--tertiary) !important; 
    border-color: var(--tertiary) !important;
    cursor: default !important;
  }

  &::placeholder {
    color: var(--tertiary);
  }

  &:not([disabled]):hover {
    background: var(--bg);
    color: var(--primary);
  }

  &:active {
    background: var(--secondary);
    color: var(--primary);
  }

  ${({ danger }) => danger && css`
      background: var(--danger);
      border: 2px solid var(--danger);

      &:hover {
        background: var(--danger-light !important);
        border: 2px solid var(--danger-light) !important;
        color: var(--danger-light) !important;
      };

      &:active {
        background: var(--bg);
        color: var(--font);
      };
  `};
`;
