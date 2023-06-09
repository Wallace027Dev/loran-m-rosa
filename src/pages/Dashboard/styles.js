import styled from 'styled-components';

export const Header = styled.header`
  small {
    margin-right: 0.8rem;
    font-size: 1.6rem;
  }

  & option,
  select {
    font-size: 1.2rem;
  }

  h1 {
    color: var(--primary);
    margin: 3.6rem 0 1.2rem 0;
  }
`;

export const Card = styled.div`
  background: var(--secondary);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1.6rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .ad-name {
    display: flex;
    align-items: center;

    small {
      background: var(--tertiary);
      color: var(--primary);
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.4rem;
      border-radius: 0.4rem;
      margin-right: 1.2rem;
      font-size: 1.3rem;
    }

    h1 {
      font-size: 1.6rem;
      max-width: 30rem;
    }
  }

  .card-info {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    color: var(--tertiary);

    strong {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }

    div {
      margin-top: 0.8rem;
      max-width: 16rem;
    }
  }
`;
