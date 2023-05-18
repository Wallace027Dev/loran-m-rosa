import styled from 'styled-components'
import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListContainer
} from './styles'

import arrow from '../../assets/icons/arrow.svg'
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'

const Main = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
`

function Users () {
  return (
    <Main>
      <div>
        <Container>
          <InputSearchContainer>
            <input type='text' placeholder='Pesquise por nome...' />
          </InputSearchContainer>

          <Header>
            <strong>3 usuários</strong>
            <a href='/'>Novo Usuário</a>
          </Header>

          <ListContainer>
            <header>
              <button type='button'>
                <span>Nome</span>
                <img src={arrow} alt='Arrow' />
              </button>
            </header>
          </ListContainer>

          <Card>
            <div className='info'>
              <div className='user-name'>
                <strong>Wallace Vieira</strong>
                <small>Instagram</small>
              </div>
              <span>wallaceofc@hotmail.com</span>
              <span>2799999-9999</span>
            </div>
            <div className='actions'>
              <a href='/'>
                <img src={edit} alt='Edit' />
              </a>
              <button type='button'>
                <img src={trash} alt='Delete' />
              </button>
            </div>
          </Card>
          <Card>
            <div className='info'>
              <div className='user-name'>
                <strong>Wallace Vieira</strong>
                <small>Instagram</small>
              </div>
              <span>wallaceofc@hotmail.com</span>
              <span>2799999-9999</span>
            </div>
            <div className='actions'>
              <a href='/'>
                <img src={edit} alt='Edit' />
              </a>
              <button type='button'>
                <img src={trash} alt='Delete' />
              </button>
            </div>
          </Card>
          <Card>
            <div className='info'>
              <div className='user-name'>
                <strong>Wallace Vieira</strong>
                <small>Instagram</small>
              </div>
              <span>wallaceofc@hotmail.com</span>
              <span>2799999-9999</span>
            </div>
            <div className='actions'>
              <a href='/'>
                <img src={edit} alt='Edit' />
              </a>
              <button type='button'>
                <img src={trash} alt='Delete' />
              </button>
            </div>
          </Card>
        </Container>
      </div>
    </Main>
  )
}

/*
fetch('http://localhost:3001/users')
.then(async (response) => {
  const json = await response.json();
  console.log('RESPONSE:', response)
  console.log('JSON:', json)

}).catch((error) => {
  console.log('ERROR:', error)
})
*/

export default Users
