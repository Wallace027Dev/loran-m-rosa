import styled from "styled-components";
import Header from "../components/Header";

const Main = styled.main`

  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
`;

function Users() {
  return (
    <Main className="center">
      <div>
        <Header />
      </div>
      <div>
      </div>
    </Main>
  );
}

/*
fetch('http://localhost:3001/users')
.then(async (response) => {
  const json = await response.json();
  console.log('RESPONSE:', response)
  console.log('JSON:', json)

}).catch((error) => {
  console.log('ERROR:', error)
})
*/

export default Users;
