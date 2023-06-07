import styled from "styled-components";

export const CardContainer = styled.div`
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
`;

export const PixContainer = styled.div`
  margin-top: 2.4rem;
  .pix {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      height: 15rem;
      width: 15rem;
      border: 0.5rem solid var(--primary);
      border-radius: 0.5rem;
    }

    h2 {
      color: var(--bg);
      background: var(--primary);
      padding: 0.5rem 1.5rem;
      border-radius: 1rem;
    }
  }
`;
