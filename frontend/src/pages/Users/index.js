import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListHeader,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Loader from '../../components/Loader';
import Input from '../../components/Input';

import UsersService from '../../services/UsersService'

export default function Users() {
  const [users, setUsers] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredUsers = useMemo(() => users.filter((user) => (
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [users, searchTerm]);

  useEffect(() => {
    async function loadUsers() {
      try {
        setIsLoading(true);

        const usersList = await UsersService.listUsers(orderBy);

        setUsers(usersList);
      } catch (error) {
        console.log('Name: ', error);
        console.log('Message: ', error.message);
        console.log('Response: ', error.response);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUsers();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Pesquise por nome..."
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredUsers.length}
          {filteredUsers.length === 1 ? ' usuário' : ' usuários'}
        </strong>
        <Link to="../user/new">Novo Usuário</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        {filteredUsers.length > 0 && (
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        )}
      </ListHeader>

      {filteredUsers.map((user) => (
        <Card key={user.id}>
          <div className="info">
            <div className="user-name">
              <strong>{user.name}</strong>
              {user.category_name && <small>{user.category_name}</small>}
            </div>
            <span>{user.email}</span>
            <span>{user.phone}</span>
          </div>
          <div className="actions">
            <Link to={`../../user/edit/${user.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
