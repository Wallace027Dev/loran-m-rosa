import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm';
import toast from '../../utils/toast';

import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function NewUser() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(formData) {
    try {
      const user = {
        name: formData.name,
        instagram: formData.instagram,
        facebook: formData.facebook,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      await signUp(user);

      toast({
        type: 'success',
        text: 'Usuário cadastrado com sucesso!',
      });

      navigate('.././users');
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

      <UserForm onSubmit={handleSubmit} buttonLabel="Cadastrar" />
    </>
  );
}
