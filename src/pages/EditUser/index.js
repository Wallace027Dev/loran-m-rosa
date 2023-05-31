import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm';
import Loader from '../../components/Loader'

import toast from '../../utils/toast'

import UsersService from '../../services/UsersService';

export default function EditUser() {
  const [isLoading, setIsLoading] = useState(true);


  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function loadUsers() {
      try {
        const userData = await UsersService.getUserById(
          id,
        );

        console.log({ userData })
        setIsLoading(false)
      } catch {
        navigate('../../users');
        toast({
          type: 'danger',
          text: 'Usuário não encontrado!',
        })
      }
    }

    loadUsers()
  }, [id])


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
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};
