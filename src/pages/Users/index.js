import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo, useCallback } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SeachNotFoundContainer,
  LinkStyle,
} from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifierQuestion.svg';

import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import UsersService from '../../services/UsersService';

import toast from '../../utils/toast';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [userBeingDeleted, setUserBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredUsers = useMemo(() => {
    if (!Array.isArray(users)) {
      return [];
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const usersList = await UsersService.listUsers();
      setUsers(usersList);

      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const token = localStorage.getItem('token');
  useEffect(() => {
    loadUsers();
  }, [loadUsers, token]);

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleTryAgain() {
    loadUsers();
  }

  function handleDeleteUser(user) {
    setUserBeingDeleted(user);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setUserBeingDeleted(null);
  }

  async function handleConfirmDeleteUser() {
    try {
      setIsLoadingDelete(true);

      await UsersService.deleteUser(userBeingDeleted.id);

      setUsers((prevState) =>
        prevState.filter((user) => user.id !== userBeingDeleted.id)
      );

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Usuário deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o usuário!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o usuário "${userBeingDeleted?.name}"?`}
        confirmLabel={'Deletar'}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteUser}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {users.length > 0 && (
        <InputSearchContainer>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Pesquise por nome..."
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError ? 'flex-end' : users.length > 0 ? 'space-between' : 'center'
        }
      >
        {!hasError && users.length > 0 && (
          <strong>
            {filteredUsers.length}
            {filteredUsers.length === 1 ? ' usuário' : ' usuários'}
          </strong>
        )}
        <LinkStyle>
          <Link to="../user/new">Novo Usuário</Link>
        </LinkStyle>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad Status" />

          <div className="datails">
            <strong>Ocorreu um erro ao obter os seus usuários.</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {users.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
                <strong>”Novo contato”</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {users.length > 0 && filteredUsers.length < 1 && (
            <SeachNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <span>
                Nenhum resultado foi encontrado para{' '}
                <strong>{searchTerm}</strong>
              </span>
            </SeachNotFoundContainer>
          )}

          {filteredUsers.map((user) => (
            <Card key={user.id}>
              <div className="info">
                <div className="user-name">
                  {user && <strong>{user.name}</strong>}
                  {user.instagram && <small>{user.instagram}</small>}
                  {user.facebook && <small>{user.facebook}</small>}
                </div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
              <div className="actions">
                <LinkStyle>
                  <Link to={`../../advert/new/${user.id}`}>Novo Anúncio</Link>
                </LinkStyle>
                <Link to={`../../user/edit/${user.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>
                <button type="button" onClick={() => handleDeleteUser(user)}>
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
