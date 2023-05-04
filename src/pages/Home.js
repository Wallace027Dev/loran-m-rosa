import styled from "styled-components";

const Main = styled.main`
  margin-top: 44.5rem;
  flex-direction: column;
  text-align: center;
`;

function Home() {
  return (
    <Main className="center">
      <h1>Hello User</h1>
    </Main>
  );
}

export default Home;
