import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const InputSearchContainer = styled.div`
  max-width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 3.2rem;
  border-bottom: 2px solid var(--secondary);
  padding-bottom: 1.6rem;

  strong {
    color: var(--font);
  }

  a {
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
  }
`;

export const LinkStyle = styled.div`
  a {
    border: 2px solid var(--primary);
    border-radius: 4px;
    color: var(--primary);
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover {
      background: var(--primary);
      color: var(--bg);
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 0.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  img {
    transform: ${({ orderBy }) =>
      orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s ease-in;
  }
`;

export const Card = styled.div`
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
    .user-name {
      display: flex;
      align-items: center;

      a {
        color: #222;
      }

      strong {
        font-size: 1.6rem;
      }

      small {
        background: var(--tertiary);
        color: var(--primary);
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.4rem;
        border-radius: 0.4rem;
        margin-left: 0.8rem;
        font-size: 1.3rem;
      }
    }

    span {
      display: block;
      color: var(--tertiary);
      font-size: 1.3rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    button {
      background: transparent;
      border: none;
    }
    a {
      margin-right: 0.8rem;
      font-size: 0.8rem;
      color: var(--edit);
      border-color: var(--edit);
      &:hover:not(:has(img)) {
        background: var(--edit);
        color: var(--bg);
      }
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;

  .datails {
    margin-left: 2.4rem;

    strong {
      color: var(--danger);
      display: block;
    }

    button {
      max-width: 15rem;
      margin-top: 0.8rem;
    }
  }
`;
export const EmptyListContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--tertiary);
    text-align: center;
    margin-top: 0.8rem;

    strong {
      font-size: 1.6rem;
      color: var(--primary);
    }
  }
`;

export const SeachNotFoundContainer = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: flex-start;

  span {
    color: var(--tertiary);
    margin-left: 2.4rem;
    word-break: break-word;
  }
  span,
  strong {
    font-size: 1.6rem;
  }
`;
