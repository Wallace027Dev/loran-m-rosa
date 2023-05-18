import styled from "styled-components";

export const Container = styled.main`
  margin-bottom: 1.2rem;
	
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
    label {
      color: var(--primary);
      font-weight: bold;
      font-size: 1.6rem;
    }
    button {
      margin-top: 5rem;
    }
  }

  .spc-around {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 30rem;
  }
`;
