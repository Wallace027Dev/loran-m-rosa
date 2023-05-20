import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../../context/authContext'
import isEmailValid from '../../utils/isEmailValid'
import isPhoneValid from '../../utils/isPhoneValid'

import { Container } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'
import useErrors from '../../hooks/useErrors'
import FormGroup from '../../components/FormGroup'

function Subscribe () {
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange (e) {
    setName(e.target.value)
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name')
    }
  }

  function handleCellphoneChange (e) {
    setPhone(e.target.value)

    if (!e.target.value && !isPhoneValid(e.target.value)) {
      setError({ field: 'phone', message: 'Contato inválido.' })
    } else {
      removeError('phone')
    }
  }

  function handleEmailChange (e) {
    setEmail(e.target.value)
    // Checks if the user has typed something in the
    // 'email' field and validates using regex
    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError('email')
    }
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value)
    if (!e.target.value) {
      setError({ field: 'password', message: 'Senha é obrigatório.' })
    } else {
      removeError('name')
    }
  }

  async function handleSubmit (e) {
    e.preventDefault()
    setLoading(true)

    let regexMaiuscula = /[A-Z]/ // verifica se tem letra maiúscula
    let regexMinuscula = /[a-z]/ // verifica se tem letra minúscula
    let regexNumero = /[0-9]/ // verifica se tem número

    if (
      !(
        regexMaiuscula.test(password) &&
        regexMinuscula.test(password) &&
        regexNumero.test(password)
      )
    ) {
      alert('Sua senha deve conter letra maiúscula, minúscula e número')
      return
    }

    if (password.length < 6) {
      alert('Sua senha deve ter no mínimo 6 caracteres!')
      return
    }

    if (password !== confirmPassword) {
      alert('As senhas não conferem!')
      return
    }

    try {
      await signUp(email, password)
      navigate('/login')
    } catch (error) {
      alert('Ocorreu um erro ao tentar criar o usuário')
    }
    setLoading(false)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit}>
        <label>Marca</label>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='Insira o nome de sua marca..'
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Contato</label>
        <FormGroup error={getErrorMessageByFieldName('phone')}>
          <Input
            type='tel'
            value={phone}
            onChange={handleCellphoneChange}
            placeholder='Insira seu número de telefone...'
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Email</label>
        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Insira seu email...'
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Senha</label>
        <FormGroup onChange={handlePasswordChange}>
          <Input
            type='password'
            value={password}
            placeholder='Insira sua senha...'
          />
        </FormGroup>

        <label style={{ marginTop: 12 }}>Confirme sua Senha</label>
        <FormGroup>
          <Input
            type='password'
            value={confirmPassword}
            placeholder='Insira sua senha novamente...'
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </FormGroup>

        <Button disable={loading}>Cadastre-se</Button>
      </form>

      <div className='spc-betwn'>
        <span style={{ color: 'var(--tertiary)' }}>Já tem uma conta?</span>
        <Link className='lnk' to='/login'>
          Logue-se
        </Link>
      </div>
    </Container>
  )
}

export default Subscribe
