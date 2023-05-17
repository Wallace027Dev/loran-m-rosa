import { Link, useNavigate } from "react-router-dom";
import bakoads from "../assets/bakoads.png";
import { Btn } from "../components/Btn";
import styled from "styled-components";
import { Inpt } from "../components/Inpt";
import { useAuth } from "../context/authContext";
import { useState } from "react";

const Main = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  button {
    margin-top: 5rem;
  }

  img {
      width: 30rem;
      margin-bottom: 2.5rem;
    }

  .spc-around {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 30rem;
    margin-bottom: 1rem;
  }
`;

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
    <Main className="center">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <img src={bakoads} alt="Bakoads Logo" />
            <h3>Email</h3>
            <Inpt
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Insira seu email..."
            />
          </div>
          <Btn disable={loading} className="btnImg">
            <h3>Recuperar senha</h3>
          </Btn>
        </form>
        <div className="spc-around">
          <h3 style={{ color: "var(--tertiary)" }}>Já tem uma conta?</h3>
          <Link className="lnk" to="/login">
            Logue-se
          </Link>
        </div>
        <div className="spc-around">
          <h3 style={{ color: "var(--tertiary)" }}>Não tem uma conta?</h3>
          <Link className="lnk" to="/signup">
            Cadastre-se
          </Link>
        </div>
      </div>
    </Main>
  );
}

export default Forgot;
