import { Link, useNavigate } from 'react-router-dom';
import { forwardRef, useRef } from 'react';

import { Container } from './styles';

import UserForm from '../../components/UserForm';
import UsersService from '../../services/UsersService';
import toast from '../../utils/toast';

const Signup = forwardRef((props, ref) => {
  const userFormRef = useRef(null);
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

      await UsersService.createUser(user);

      userFormRef.current;
      console.log(userFormRef.current);

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
      <UserForm ref={ref} onSubmit={handleSubmit} buttonLabel="Cadastrar" />

      <div>
        <span>Já tem uma conta?</span>
        <Link className="lnk" to="/login">
          Logue-se
        </Link>
      </div>
    </Container>
  );
});

export default Signup;
