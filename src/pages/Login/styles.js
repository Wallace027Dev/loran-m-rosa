import styled from 'styled-components'

export const Container = styled.main`
  p {
    text-align: center;
    margin-bottom: 3.6rem;
    color: var(--primary);
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: left;

    label {
      color: var(--primary);
      font-weight: bold;
      font-size: 1.6rem;
    }
  }

  button {
    margin-top: 4.5rem;
  }

  .spc-around {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 30rem;
  }
`
