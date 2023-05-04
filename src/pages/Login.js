import { Link, useNavigate } from "react-router-dom";
import { Btn } from "../components/Btn";
import styled from "styled-components";
import { Inpt } from "../components/Inpt";
import { useAuth } from "../context/authContext";
import { useState } from "react";

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
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (password.length < 6) {
      alert("Sua senha deve ter no mínimo 6 caracteres!");
      return;
    }

    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao tentar efetuar o login");
    }

    setLoading(false);
  }

  return (
    <Body className="center">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Email</h3>
            <Inpt
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Insira seu email..."
            />
          </div>
          <div>
            <div className="spc-around">
              <h3>Senha</h3>
              <Link className="lnk" to="/forgot">
                Esqueceu sua senha?
              </Link>
            </div>
            <Inpt
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Insira sua senha..."
            />
          </div>
          <Btn disable={loading} className="btnImg">
            <h3>Login</h3>
          </Btn>
        </form>
        <div className="spc-around">
          <h3 style={{ color: "var(--tertiary)" }}>Não tem uma conta?</h3>
          <Link className="lnk" to="/signup">
            Inscreva-se
          </Link>
        </div>
      </div>
    </Body>
  );
}

export default Login;
