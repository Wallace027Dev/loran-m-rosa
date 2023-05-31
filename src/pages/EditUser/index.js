import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm';
import Loader from '../../components/Loader'

import UsersService from '../../services/UsersService';
import toast from '../../utils/toast'

export default function EditUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');

  const userFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function loadUsers() {
      try {
        const user = await UsersService.getUserById(
          id,
        );

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

    loadUsers()
  }, [id, navigate])


  async function handleSubmit(formData) {
    try {
      const user = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const userData = await UsersService.updateUser(
        id,
        user,
      );

      setUserName(userData.name);
      toast({
        type: 'success',
        text: 'Usuário editado com sucesso!',
      });

    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o usuário!',
      });
    }
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${userName}`}
      />
      <UserForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar Alterações"
      />
    </>
  );
};
