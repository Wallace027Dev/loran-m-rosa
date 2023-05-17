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
