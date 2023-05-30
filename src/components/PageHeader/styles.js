import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 2.4rem;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      font-size: 1.6rem;
      color: var(--primary);
      font-weight: bold;
    }

    img {
      margin-right: 0.8rem;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 2.4rem;
  }

  .link-container {
  display: flex;
  align-items: center;
  }

  .link-container a {
    display: flex;
    align-items: center;
  }

`;
