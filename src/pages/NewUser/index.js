import PageHeader from '../../components/PageHeader'

import Select from '../../components/Select'
import Input from '../../components/Input'

export default function NewUser () {
  return (
    <>
      <PageHeader title='Novo Usuário' />
      <Input type='text' placeholder='Nome' />
      <Select>
        <option value='123'>Instagram</option>
      </Select>
    </>
  )
}
