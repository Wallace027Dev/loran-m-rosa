import PropTypes from 'prop-types'
import { useState } from 'react'

import isEmailValid from '../../utils/isEmailValid'

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
  const [errors, setErrors] = useState([])

  function handleNameChange (e) {
    setName(e.target.value)
    // Checks if the user has typed something in the 'name' field
    if (!e.target.value) {
      setErrors(prevState => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório.' }
      ])
    } else {
      setErrors(prevState => prevState.filter(error => error.field !== 'name'))
    }
  }

  function handleEmailChange (e) {
    setEmail(e.target.value)
    // Checks if the user has typed something in the
    // 'email' field and validates using regex
    if (e.target.value && !isEmailValid(e.target.value)) {
      // Checks if there is already an object with error
      // 'email.field' = 'email' in the 'errors' object
      const errorAlreadyExists = errors.find(error => error.field === 'email')
      // if exists, execution stops
      if (errorAlreadyExists) {
        return
      }
      // otherwise, insert this object
      setErrors(prevState => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido.' }
      ])
    } else {
      setErrors(prevState => prevState.filter(error => error.field !== 'email'))
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

  function getErrorMessageByFieldName (fieldName) {
    // look in the error array and look for an object with
    // field equal to field using THIS function
    return errors.find(error => error.field === fieldName)?.message
    //the '?', checks if the value exists and is valid,
    // and if so, returns the 'message'
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
