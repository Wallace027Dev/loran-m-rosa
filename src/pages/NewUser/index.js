import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm'
import UsersService from '../../services/UsersService';
import toast from '../../utils/toast'

export default function NewUser() {
  async function handleSubmit(formData) {
    try {
      const user = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await UsersService.createUser(user);

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
      <PageHeader
        title="Novo Usuário"
      />

      <UserForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
};
