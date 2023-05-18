import { Link, useNavigate } from "react-router-dom";
import { Inpt } from "../../components/Inpt";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { Container } from "./styles";

function Forgot() {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await resetPassword(email);
      alert("Foi enviado um link para seu email");
      navigate("/login");
    } catch {
      alert("ocorreu um erro");
    }

    setLoading(false);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <Inpt
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Insira seu email..."
        />
        <button disable={loading} className="btn btnImg">
          Recuperar senha
        </button>
      </form>
      <div className="spc-around">
        <span style={{ color: "var(--tertiary)" }}>Já tem uma conta?</span>
        <Link className="lnk" to="/login">
          Logue-se
        </Link>
      </div>
      <div className="spc-around">
        <span style={{ color: "var(--tertiary)" }}>Não tem uma conta?</span>
        <Link className="lnk" to="/signup">
          Cadastre-se
        </Link>
      </div>
    </Container>
  );
}

export default Forgot;
