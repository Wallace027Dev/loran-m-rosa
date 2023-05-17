import styled from 'styled-components'

export const Container = styled.header`
  margin-top: 7.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputSearchContainer = styled.div`
  margin-top: 4.8rem;
  width: 30rem;
  max-width: 50rem;

  input {
    width: 100%;
    background-color: var(--secondary);
    border: none;
    border-radius: 15px;
    height: 4rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    outline: 0;
    padding: 0 1.6rem;
    font-size: 1.2rem;
    color: var(--dark-font);
    &::placeholder {
      color: var(--tertiary);
    }
  }
`
