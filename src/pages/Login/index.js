import { Link, useNavigate } from "react-router-dom";
import { Inpt } from "../../components/Inpt";
import { Container } from "./styles";
import { useAuth } from "../../context/authContext";
import { useState } from "react";

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
    <Container>
      <p>Administre a sua conta</p>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <Inpt
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Insira seu email..."
        />
        <div className="spc-around">
          <label>Senha</label>
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
        <button disable={loading} className="btn btnImg">
          Login
        </button>
      </form>
      <div className="spc-around">
        <span style={{ color: "var(--tertiary)" }}>Não tem uma conta?</span>
        <Link className="lnk" to="/signup">
          Inscreva-se
        </Link>
      </div>
    </Container>
  );
}

export default Login;
