import { Link } from 'react-router-dom';
import { Container, Buttons } from './styles';
import Button from '../../components/Button';

function Welcome() {
  return (
    <Container>
      <p>
        Crie a sua conta para anunciar com a <u>Bakoads</u> e mostre seus
        produtos e serviços para milhares de pessoas
      </p>
      <Buttons>
        <Link className="lnk" to="/signup">
          <Button>Inscreva-se</Button>
        </Link>
        <Link className="lnk txt-center" to="/login">
          Entrar com Email e senha
        </Link>
      </Buttons>
    </Container>
  );
}

export default Welcome;
