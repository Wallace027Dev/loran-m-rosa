import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm';
import Loader from '../../components/Loader';

import UsersService from '../../services/UsersService';
import toast from '../../utils/toast';
import Container from './styles';

export default function EditUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');

  const userFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      try {
        const user = await UsersService.getUserById(id);

        userFormRef.current.setFieldsValues(user);

        setIsLoading(false);
        setUserName(user.name);
      } catch {
        navigate('../../users');
        toast({
          type: 'danger',
          text: 'Usuário não encontrado!',
        });
      }
    }

    loadUsers();
  }, [id, navigate]);

  async function handleSubmit(formData) {
    try {
      const user = {
        name: formData.name,
        instagram: formData.instagram,
        facebook: formData.facebook,
        email: formData.email,
        phone: formData.phone,
      };

      await UsersService.updateUser(id, user);

      toast({
        type: 'success',
        text: 'Usuário editado com sucesso!',
      });
    } catch (error) {
      console.log(error);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o usuário!',
      });
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${userName}`}
        path={'../../users'}
      />
      <UserForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar Alterações"
      />
    </Container>
  );
}
