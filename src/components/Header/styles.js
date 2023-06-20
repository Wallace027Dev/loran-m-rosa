import styled from 'styled-components';

export const Container = styled.header`
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--secondary);
    box-shadow: 0px 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 1.5rem 6rem;

    .logo {
      img {
        width: 16rem;
      }
    }

    .nav-list {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        justify-content: center;
        list-style: none;

        .nav-item {
          margin: 0 1.5rem;
        }
      }
    }
  }

  .nav-link {
    color: var(--primary);
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .mobile-menu-icon {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4.8rem;
    margin-bottom: 7.2rem;

    img {
      width: 25rem;
    }
  }

  @media screen and (max-width: 730px) {
    .nav-bar {
      padding: 1.5rem 4rem;
    }

    .nav-item {
      display: none;
    }

    .mobile-menu-icon {
      display: block !important;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }

    .mobile-menu {
      ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;

        .nav-item {
          display: block !important;
          padding-top: 1.2rem;
        }
      }
    }

    .open {
      display: block !important;
    }

    .icon {
      width: 5rem;
      height: 5rem;
    }
  }
`;
