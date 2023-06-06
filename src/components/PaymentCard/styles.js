import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--primary);
  border-radius: 1.5rem;
  max-width: 50rem;
  padding: 2.7rem;
  margin: 0.8rem;

  h2 {
    font-size: 1.2rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;

    .card {
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin: 0.8rem 0rem;

      .check-box {
        margin-right: 0.8rem;
      }
      .card-inputs{
        display: flex;
        flex-direction: column;
        label {
          font-size: 1.6rem;
          color: var(--bg);
        }
        .card-number {
          font-size: 1.2rem;
          margin: 0.8rem 0rem;
        }
        .cvv {
          font-size: 1.6rem;
        }
      }
    }
  }

  img {
    width:  10rem;
  }
`;
