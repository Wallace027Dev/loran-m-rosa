import PageHeader from '../../components/PageHeader';
import UserForm from '../../components/UserForm'
import UsersService from '../../services/UsersService';

export default function NewUser() {
  async function handleSubmit(formData) {
    try {
      const user = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      }

      const response = await UsersService.createUser(user); morningstar

      console.log('Response ->', response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o usuário.')
    }
  };

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
