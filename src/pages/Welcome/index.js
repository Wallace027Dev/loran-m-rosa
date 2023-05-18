import { Btn } from '../../components/Btn'
import { Link } from 'react-router-dom'
import { Container } from './style'

function Welcome () {
  return (
    <Container className='center'>
      <div>
        <div className='slogan center'>
          <h2>
            Crie a sua conta para anunciar com a <u>Bakoads</u> e mostre seus
            produtos e serviços para milhares de pessoas
          </h2>
        </div>
        <div>
          <Link className='lnk btnSign' to='/signup'>
            <Btn>
              <h3>Inscreva-se</h3>
            </Btn>
          </Link>
          <Link className='lnk txt-center' to='/login'>
            Entrar com Email e senha
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Welcome
