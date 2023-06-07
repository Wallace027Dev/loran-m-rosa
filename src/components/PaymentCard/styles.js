import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 1.2rem;
  }
  .card-inputs {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 0.8rem;
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--primary);
    }
    .card-input {
      font-size: 1.2rem;
    }
  }
  button {
    width: 100%;
    margin-top: 1.6rem;
  }

  img {
    width: 10rem;
  }
`;
