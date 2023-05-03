import { Link } from "react-router-dom";
import { Btn } from "../components/Btn";
import styled from "styled-components";
import { Inpt } from "../components/Inpt";

const Body = styled.body`
  margin-top: 32rem;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  button {
    margin-top: 5rem;
  }

  .spc-around {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 30rem;
  }
`;

function Login() {
  return (
    <Body className="center">
      <div>
        <form>
          <div>
            <h3>Email</h3>
            <Inpt type="mail" placeholder="Insira seu email..." />
          </div>
          <div>
            <div className="spc-around">
              <h3>Senha</h3>
              <Link className="lnk" to="/forgot">
                Esqueceu sua senha?
              </Link>
            </div>
            <Inpt type="password" placeholder="Insira sua senha..." />
          </div>
          <Btn className="btnImg">
            <h3>Login</h3>
          </Btn>
        </form>
        <div className="spc-around">
          <h3 style={{ color: "var(--tertiary)" }}>Não tem uma conta?</h3>
          <Link className="lnk" to="/subscribe">
            Inscreva-se
          </Link>
        </div>
      </div>
    </Body>
  );
}

export default Login;
