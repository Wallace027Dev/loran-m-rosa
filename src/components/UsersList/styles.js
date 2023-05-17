import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3.2rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: var(--dark-font);
    font-size: 1.5rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 800;
    border: 2px solid var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: var(--primary);
      color: var(--light-font);
    }
  }
`

export const ListContainer = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;

  header {
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
    }

    span {
      margin-right: 0.5rem;
      font-weight: 800;
      color: var(--primary);
    }
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

      small {
        background: var(--tertiary);
        color: var(--primary);
        font-weight: 800;
        text-transform: uppercase;
        padding: 0.4rem;
        border-radius: 0.4rem;
        margin-left: 0.8rem;
      }
    }
    span {
      display: block;
      font-size: 1rem;
      color: var(--tertiary);
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
