import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import { useAuth } from '../../context/authContext';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
    // Checks if the user has typed something in the
    // 'email' field and validates using regex
    if ((e.target.value && !e.target.value) || !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);

    // check if it has 6 characters or more
    // check if you have a number
    // check if it has a capital letter
    if (
      !e.target.value.match(/.{6,}/)
      || !e.target.value.match(/[0-9]{1,}/)
      || !e.target.value.match(/[A-Z]{1,}/)
    ) {
      setError({
        field: 'password',
        message:
          'Senha deve conter mais de 6 caracteres, número, letra maíuscula e minúscula.',
      });
    } else {
      removeError('password');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError({
        field: 'password',
        message: 'Algo está incorreto.',
      });
    }

    setLoading(false);
  }

  return (
    <Container>
      <p>Administre a sua conta</p>
      <form noValidate onSubmit={handleSubmit}>
        <label>Email</label>

        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type="email"
            value={email}
            style={{ marginBottom: 12 }}
            onChange={handleEmailChange}
            placeholder="Insira seu email..."
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <div className="spc-betwn">
          <label>Senha</label>
          <Link className="lnk" to="/forgot">
            Esqueceu sua senha?
          </Link>
        </div>

        <FormGroup error={getErrorMessageByFieldName('password')}>
          <Input
            type="password"
            value={password}
            placeholder="Insira sua senha..."
            onChange={handlePasswordChange}
            error={getErrorMessageByFieldName('password')}
          />
        </FormGroup>
        <Button disable={loading}>Login</Button>
      </form>

      <div className="spc-betwn">
        <span style={{ color: 'var(--tertiary)' }}>Não tem uma conta?</span>
        <Link className="lnk" to="/signup">
          Inscreva-se
        </Link>
      </div>
    </Container>
  );
}

export default Login;
