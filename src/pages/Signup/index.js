import { Link, useNavigate } from 'react-router-dom';

import { Container, OthersOptions } from './styles';

import UserForm from '../../components/UserForm';
import toast from '../../utils/toast';

import { useAuth } from '../../context/authContext';

export default function Signup() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

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

      navigate('../login');
    } catch (error) {
      console.log(error);

      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o usuário!',
      });
    }
  }

  return (
    <Container>
      <UserForm onSubmit={handleSubmit} buttonLabel="Cadastrar" />

      <OthersOptions>
        <span>Já tem uma conta?</span>
        <Link className="lnk" to="/login">
          Logue-se
        </Link>
      </OthersOptions>
    </Container>
  );
}
