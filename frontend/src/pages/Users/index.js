import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListHeader
} from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

import Input from '../../components/Input'

export default function Users () {
  const [users, setUsers] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((users) => (
    users.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  useEffect(() => {
    fetch(`http://localhost:3001/users?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json();
        setUsers(json)
    })
    .catch((error) => {
      console.log('ERROR:', error)
    })
  }, [orderBy])

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <Container>
      <InputSearchContainer>
        <Input
        type='text' 
        value={searchTerm}
        onChange={handleChangeSearchTerm} 
        placeholder='Pesquise por nome...' 
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredUsers.length} 
          {filteredUsers.length === 1 ? ' usuário' : ' usuários'}
          </strong>
        <Link to='../user/new'>Novo Usuário</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
          {filteredUsers.length > 0 && <button type='button' onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt='Arrow' />
          </button>} 
      </ListHeader>

    {filteredUsers.map((users) =>(<Card key={users.id}>
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
      </Card>))}

    </Container>
  )
}
