import { Btn } from "../components/Btn";
import bakoads from "../assets/bakoads.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.main`
  .btnSign {
    color: var(--font-light);
  }

  .btnImg {
    background-color: var(--secondary);
    h3 {
      position: absolute;
    }
    img {
      position: relative;
      left: -40%;
      height: 2rem;
    }
  }

  .logo {
    img {
      width: 30rem;
      margin-bottom: 15rem;
    }
    h2 {
      position: absolute;
      max-width: 60vw;
      top: 30%;
      color: var(--primary);
      font-weight: 800;
    }
  }
`;

function Welcome() {
  return (
    <Container className="center">
      <div>
        <div className="logo">
          <img src={bakoads} alt="Bakoads Logo" />
          <h2>
            Crie a sua conta para anunciar com a <u>Bakoads</u> e mostre seus
            produtos e serviços para mulhares de pessoas
          </h2>
        </div>
        <div>
          <Link className="lnk btnSign" to="/signup">
            <Btn>
              <h3>Inscreva-se</h3>
            </Btn>
          </Link>
          <Link className="lnk txt-center" to="/login">
            Entrar com Email e senha
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
