import { useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm';
import UsersService from '../../services/UsersService';
import toast from '../../utils/toast';

export default function NewUser() {
  const userFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const user = {
        name: formData.name,
        instagram: formData.instagram,
        facebook: formData.facebook,
        phone: formData.phone,
        email: formData.email,
      };

      await UsersService.createUser(user);

      userFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Usuário cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o usuário!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Usuário" path={'../../users'} />

      <UserForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Cadastrar"
      />
    </>
  );
}
