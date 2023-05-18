import styled from 'styled-components'

export default styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background: var(--primary);
  border-radius: 1.25rem;
  border: 2px solid var(--primary);
  color: var(--light-font);
  font-size: 1.2rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  max-width: 50rem;
  width: 100%;
  transition: 0.2s ease-in;

  &::placeholder {
    color: var(--tertiary);
    font-weight: bold;
  }

  &:hover {
    background: var(--light-font);
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
`

//border: 2px solid var(--secondary);
