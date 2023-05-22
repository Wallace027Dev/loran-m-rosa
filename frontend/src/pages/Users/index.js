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
import Input from '../../components/Input'
import { useEffect, useState } from 'react'

export default function Users () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(async (response) => {
        const json = await response.json();
        setUsers(json)
    })
    .catch((error) => {
      console.log('ERROR:', error)
    })
  }, [])

  return (
    <Container>
      <InputSearchContainer>
        <Input type='text' placeholder='Pesquise por nome...' />
      </InputSearchContainer>

      <Header>
        <strong>
          {users.length} 
          {users.length === 1 ? ' usuário' : ' usuários'}
          </strong>
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

    {
      users.map((users) =>(
        <Card key={users.id}>
        <div className='info'>
          <div className='user-name'>
            <strong>{users.name}</strong>
            {users.category_name && <small>{users.category_name}</small>}
          </div>
          <span>{users.email}</span>
          <span>{users.phone}</span>
        </div>
        <div className='actions'>
          <Link to={`../../user/edit/${users.id}`}>
            <img src={edit} alt='Edit' />
          </Link>
          <button type='button'>
            <img src={trash} alt='Delete' />
          </button>
        </div>
      </Card>
      ))
    }
    </Container>
  )
}
