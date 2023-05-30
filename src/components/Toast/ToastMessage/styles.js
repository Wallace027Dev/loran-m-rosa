import styled from 'styled-components';

export const Container = styled.div`
padding: 1.6rem 3.32rem;
background: var(--primary);
color: var(--bg);
border-radius: 15px;
box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
display: flex;
align-items: center;
justify-content: center;

strong {
  font-size: 1.6rem;
  margin-left: 0.8rem;
}

& + & {
  margin-top: 1.2rem;
}
`;