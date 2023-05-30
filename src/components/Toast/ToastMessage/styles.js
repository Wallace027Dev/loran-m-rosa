import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: var(--primary);
`,
  success: css`
    background: var(--success);
`,
  danger: css`
    background: var(--danger);
`,
};

export const Container = styled.div`
  padding: 1.6rem 3.32rem;
  background: var(--primary);
  color: var(--bg);
  border-radius: 15px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  strong {
    font-size: 1.6rem;
  }
  
  img {
    margin-right: 0.8rem;
  }

  & + & {
    margin-top: 1.2rem;
  }
`;