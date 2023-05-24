import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const InputSearchContainer = styled.div`
  max-width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.2rem;

  strong {
    color: var(--font);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.6rem;
    border: 2px solid var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: var(--primary);
      color: var(--bg);
    }
  }
`

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
    transform: ${({orderBy}) => orderBy ==='asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s ease-in;
  }
`

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
      font-size: 1rem;
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
      margin-left: 0.8rem;
    }
  }
`
