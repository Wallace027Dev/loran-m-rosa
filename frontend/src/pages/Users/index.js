import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListHeader,
  ErrorContainer
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg';

import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';

import UsersService from '../../services/UsersService'

export default function Users() {
  const [users, setUsers] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredUsers = useMemo(() => users.filter((user) => (
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [users, searchTerm]);

  async function loadUsers() {
    try {
      setIsLoading(true);

      const usersList = await UsersService.listUsers(orderBy);
      setUsers(usersList);

      setHasError(false)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
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

  function handleTryAgain() {
    loadUsers();
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

      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {filteredUsers.length}
            {filteredUsers.length === 1 ? ' usuário' : ' usuários'}
          </strong>
        )}
        <Link to="../user/new">Novo Usuário</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad Status" />

          <div className='datails'>
            <strong>Ocorreu um erro ao obter os seus usuários.</strong>

            <Button type='button' onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredUsers.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </ListHeader>
          )}

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
        </>
      )}

    </Container>
  );
}
