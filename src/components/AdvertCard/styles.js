import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1.6rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1.6rem;
  }

  .info {
    strong {
      font-size: 1.6rem;
    }

    .advert-name {
      margin-top: 0.8rem;
      display: flex;
      align-items: center;

      small {
        background: var(--tertiary);
        color: var(--primary);
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.4rem;
        border-radius: 0.4rem;
        font-size: 1.2rem;
      }

      .card-info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        color: var(--tertiary);

        div {
          margin-top: 0.8rem;
          text-align: center;
          padding: 0.4rem;
        }

        strong {
          font-size: 1.6rem;
        }

        span {
          display: block;
          color: var(--tertiary);
          font-size: 1.1rem;
        }
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    button {
      background: transparent;
      border: none;
      margin-left: 0.8rem;
    }
  }
`;
