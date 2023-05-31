import styled from 'styled-components';

export const OverLay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 45rem;
  width: 100%;
  background: var(--bg);
  border-radius: 15px;
  padding: 2.4rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  > h1 {
    font-size: 2.4rem;
    color: ${({ danger }) => (danger ? 'var(--danger)' : 'var(--primary)')};
  }

  .modal-body {
    margin-top: 3.2rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    margin-right: 2.4rem;
    color: var(--tertiary);
    font-size: 1.2rem;
  }

  .delete-button {
    width: 10rem;
  }
`;
