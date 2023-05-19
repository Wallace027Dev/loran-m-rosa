import PropTypes from 'prop-types'

import { Form } from './styles'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default function UserForm ({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder='Nome' />
      </FormGroup>
      <FormGroup error='O formato do e-mail é inválido.'>
        <Input placeholder='Email' error />
      </FormGroup>
      <FormGroup>
        <Input placeholder='Telefone' />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value='instagram'>Instagram</option>
          <option value='Facebook'>Facebook</option>
        </Select>
      </FormGroup>

      <Button type='submit'>{buttonLabel}</Button>
    </Form>
  )
}

UserForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
