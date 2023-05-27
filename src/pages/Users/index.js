import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo, useCallback } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListHeader,
  ErrorContainer,
  EmptyListContainer,
  SeachNotFoundContainer
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg';
import emptyBox from '../../assets/images/icons/emptyBox.svg';
import magnifierQuestion from '../../assets/images/icons/magnifierQuestion.svg';

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

  const loadUsers = useCallback(async () => {
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
  }, [orderBy]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  };

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  };

  function handleTryAgain() {
    loadUsers();
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {users.length > 0 && (
        <InputSearchContainer>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Pesquise por nome..."
          />
        </InputSearchContainer>)}

      <Header justifyContent={
        hasError
          ? 'flex-end'
          : (
            users.length > 0
              ? 'space-between'
              : 'center'
          )
      }>
        {(!hasError && users.length > 0) && (
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
          {(users.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {(users.length > 0 && filteredUsers.length < 1) && (
            <SeachNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <span>
                Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>
              </span>
            </SeachNotFoundContainer>
          )}

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
