import { Container } from './styles';

import { Link, useNavigate } from 'react-router-dom';

function Forgot() {
  const navigate = useNavigate();

  return (
    <Container>
      <main>
        <h2>
          Contacte o administrador
          <br />
          para recuperar sua conta.
        </h2>
      </main>

      <div className="spc-betwn">
        <span>Já tem uma conta?</span>
        <Link className="lnk" to="/login">
          Logue-se
        </Link>
      </div>
      <div className="spc-betwn">
        <span>Não tem uma conta?</span>
        <Link className="lnk" to="/signup">
          Cadastre-se
        </Link>
      </div>
    </Container>
  );
}

export default Forgot;
