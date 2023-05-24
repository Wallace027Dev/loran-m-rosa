import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../context/authContext';
import isEmailValid from '../../utils/isEmailValid';
import isPhoneValid from '../../utils/isPhoneValid';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../../components/FormGroup';

function Subscribe() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(e) {
    setName(e.target.value);
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handlePhoneChange(e) {
    setPhone(isPhoneValid(e.target.value));

    if (!e.target.value) {
      setError({ field: 'phone', message: 'Contato é obrigatório.' });
    } else {
      removeError('phone');
    }
  }

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

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError({
        field: 'confirmPassword',
        message: 'Sua confirmação não está batendo com sua senha.',
      });

      setLoading(false);
      return;
    }

    try {
      await signUp(email, password);
      navigate('/login');
    } catch (error) {
      setError({
        field: 'button',
        message: 'Ocorreu um erro ao tentar criar o usuário.',
      });
    }
    setLoading(false);
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit}>
        <label>Marca</label>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Insira o nome de sua marca.."
            error={getErrorMessageByFieldName('name')}
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Contato</label>
        <FormGroup error={getErrorMessageByFieldName('phone')}>
          <Input
            type="tel"
            maxLength="15"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Insira seu número de telefone..."
            error={getErrorMessageByFieldName('phone')}
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Email</label>
        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Insira seu email..."
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Senha</label>
        <FormGroup error={getErrorMessageByFieldName('password')}>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Insira sua senha..."
            error={getErrorMessageByFieldName('password')}
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Confirme sua Senha</label>
        <FormGroup error={getErrorMessageByFieldName('confirmPassword')}>
          <Input
            type="password"
            value={confirmPassword}
            placeholder="Insira sua senha novamente..."
            onChange={handleConfirmPasswordChange}
            error={getErrorMessageByFieldName('confirmPassword')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('button')}>
          <Button disabled={loading || !isFormValid}>Cadastre-se</Button>
        </FormGroup>
      </form>

      <div className="spc-betwn">
        <span style={{ color: 'var(--tertiary)' }}>Já tem uma conta?</span>
        <Link className="lnk" to="/login">
          Logue-se
        </Link>
      </div>
    </Container>
  );
}

export default Subscribe;
