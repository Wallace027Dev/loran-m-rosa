import { Container, Footer, OverLay } from './styles'
import Button from '../Button'

export default function Modal () {
  return (
    <OverLay>
      <Container>
        <h1>Título do Modal</h1>
        <p>Corpo do Modal</p>

        <Footer>
          <button type='button' className='cancel-button'>
            Cancelar
          </button>
          <Button type='button' className='delete-button'>
            Deletar
          </Button>
        </Footer>
      </Container>
    </OverLay>
  )
}
