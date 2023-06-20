import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';

export default function UserForm({ buttonLabel, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(e) {
    setName(e.target.value);
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleInstagramChange(e) {
    setInstagram(e.target.value);
  }

  function handleFacebookChange(e) {
    setFacebook(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (
      !e.target.value.match(/.{6,}/) ||
      !e.target.value.match(/[0-9]{1,}/) ||
      !e.target.value.match(/[A-Z]{1,}/)
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

    setIsSubmitting(true);

    await onSubmit({
      name,
      instagram,
      facebook,
      email,
      phone,
      password,
    });

    setIsSubmitting(false);

    setName('');
    setInstagram('');
    setFacebook('');
    setEmail('');
    setPhone('');
    setPassword('');
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          value={name}
          placeholder="Nome *"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          value={instagram}
          disabled={isSubmitting}
          onChange={handleInstagramChange}
          placeholder="Insira o nome de seu instagram.."
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          value={facebook}
          disabled={isSubmitting}
          onChange={handleFacebookChange}
          placeholder="Insira o nome de seu facebook.."
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="tel"
          maxLength={15}
          value={phone}
          placeholder="Telefone"
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('password')}>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Insira sua senha..."
          error={getErrorMessageByFieldName('password')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('confirmPassword')}>
        <Input
          type="password"
          value={confirmPassword}
          placeholder="Insira sua senha novamente..."
          onChange={handleConfirmPasswordChange}
          error={getErrorMessageByFieldName('confirmPassword')}
        />
      </FormGroup>

      <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
        {buttonLabel}
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
