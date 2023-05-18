import { Link, useNavigate } from "react-router-dom";
import { Inpt } from "../../components/Inpt";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Container } from "./styles";

function Subscribe() {
  const { signUp } = useAuth();
  const [brand, setBrand] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let regexMaiuscula = /[A-Z]/; // verifica se tem letra maiúscula
    let regexMinuscula = /[a-z]/; // verifica se tem letra minúscula
    let regexNumero = /[0-9]/; // verifica se tem número

    if (
      !(
        regexMaiuscula.test(password) &&
        regexMinuscula.test(password) &&
        regexNumero.test(password)
      )
    ) {
      alert("Sua senha deve conter letra maiúscula, minúscula e número");
      return;
    }

    if (password.length < 6) {
      alert("Sua senha deve ter no mínimo 6 caracteres!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      alert("Ocorreu um erro ao tentar criar o usuário");
    }
    setLoading(false);
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Marca</label>
            <Inpt
              type="name"
              value={brand}
              placeholder="Insira o nome de sua marca..."
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div>
            <label>Whatsapp</label>
            <Inpt
              type="number"
              value={phone}
              placeholder="Insira seu número de telefone..."
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <Inpt
              type="email"
              value={email}
              placeholder="Insira seu email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="spc-around">
              <label>Senha</label>
            </div>
            <Inpt
              type="password"
              value={password}
              placeholder="Insira sua senha..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="spc-around">
              <label>Confirme sua Senha</label>
            </div>
            <Inpt
              type="password"
              value={confirmPassword}
              placeholder="Insira sua senha novamente..."
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button disable={loading} className="btn">
            Cadastre-se
          </button>
        </form>
        <div className="spc-around">
          <span style={{ color: "var(--tertiary)" }}>Já tem uma conta?</span>
          <Link className="lnk" to="/login">
            Logue-se
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Subscribe;
