import styled from "styled-components";

export const Inpt = styled.input`
  background-color: var(--secondary);
  border-radius: 1.25rem;
  margin-top: 1.2rem;
  margin-bottom: 2.5rem;
  border: none;
  color: var(--tertiary);
  height: 4rem;
  width: 30rem;
  display: flex;
  align-items: left;
  justify-content: center;
  padding: 0 2.5rem;
  ::placeholder {
    font-weight: 700;
    color: var(--tertiary);
  }
`;
