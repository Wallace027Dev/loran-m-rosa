import { Link } from 'react-router-dom'

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListContainer
} from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

function Users () {
  return (
    <Container>
      <InputSearchContainer>
        <input type='text' placeholder='Pesquise por nome...' />
      </InputSearchContainer>

      <Header>
        <strong>3 usuários</strong>
        <Link to='../user/new'>Novo Usuário</Link>
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
          <Link to='..user/edit/123'>
            <img src={edit} alt='Edit' />
          </Link>
          <button type='button'>
            <img src={trash} alt='Delete' />
          </button>
        </div>
      </Card>
    </Container>
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
