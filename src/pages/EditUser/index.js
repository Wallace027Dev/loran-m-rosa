import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm';
import Loader from '../../components/Loader'

import toast from '../../utils/toast'
import UsersService from '../../services/UsersService';

export default function EditUser() {
  const [isLoading, setIsLoading] = useState(true);
  const userFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function loadUsers() {
      try {
        const user = await UsersService.getUserById(
          id,
        );

        console.log('EditUser', userFormRef);
        console.log({ user });
        setIsLoading(false);
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


  function handleSubmit(formData) {
    //
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title="Editar Wallace Vieira"
      />
      <UserForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar Alterações"
      />
    </>
  );
};
