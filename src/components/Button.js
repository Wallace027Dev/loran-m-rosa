import styled from 'styled-components'

export default styled.button`
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background: var(--primary);
  border-radius: 1.25rem;
  border: none;
  color: var(--light-font);
  font-size: 1.2rem;
  height: 4rem;
  margin-bottom: 1.5rem;
  max-width: 50rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  &::placeholder {
    color: var(--tertiary);
    font-weight: bold;
  }
`
