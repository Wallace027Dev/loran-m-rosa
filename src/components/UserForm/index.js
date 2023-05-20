import PropTypes from 'prop-types'
import { useState } from 'react'

import isEmailValid from '../../utils/isEmailValid'
import useErrors from '../../hooks/useErrors'

import { Form } from './styles'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default function UserForm ({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange (e) {
    setName(e.target.value)
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name')
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

  function handleSubmit (e) {
    e.preventDefault()

    console.log({
      name,
      email,
      phone,
      category
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          value={name}
          placeholder='Nome'
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          value={email}
          placeholder='Email'
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          placeholder='Telefone'
          onChange={e => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <option value=''>Categoria</option>
          <option value='instagram'>Instagram</option>
          <option value='Facebook'>Facebook</option>
          <option value='Facebook e Instagram'>Facebook e Instagram</option>
        </Select>
      </FormGroup>

      <Button type='submit'>{buttonLabel}</Button>
    </Form>
  )
}

UserForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
