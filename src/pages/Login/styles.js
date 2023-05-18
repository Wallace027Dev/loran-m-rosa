import styled from 'styled-components'

export const Container = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  button {
    margin-top: 5rem;
  }

  .spc-around {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 30rem;
  }

  h2 {
    max-width: 60vw;
    color: var(--primary);
    font-weight: bold;
  }
`
