import styled from "styled-components";

const Body = styled.body`
  margin-top: 44.5rem;
  flex-direction: column;
  text-align: center;
`;

function Home() {
  return (
    <Body className="center">
      <h1>Hello User</h1>
    </Body>
  );
}

export default Home;
