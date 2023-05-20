import PropTypes from 'prop-types'

import { Form } from './styles'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { useState } from 'react'

export default function UserForm ({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit (e) {
    e.preventDefault()

    console.log({
      name,
      email,
      phone,
      category
    })
  }

  function handleNameChange (e) {
    setName(e.target.value)

    if (!e.target.value) {
      setErrors(prevState => [
        ...prevState,
        { field: 'name', message: 'Nome é obrgatório.' }
      ])
    } else {
      setErrors(prevState => prevState.filter(error => error.field !== 'name'))
    }
  }

  console.log(errors)

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input value={name} placeholder='Nome' onChange={handleNameChange} />
      </FormGroup>

      <FormGroup>
        <Input
          value={email}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
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
