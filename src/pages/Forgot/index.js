import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { useState } from 'react'
import { Container } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

function Forgot () {
  const navigate = useNavigate()
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()

    setLoading(true)

    try {
      await resetPassword(email)
      alert('Foi enviado um link para seu email')
      navigate('/login')
    } catch {
      alert('ocorreu um erro')
    }

    setLoading(false)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit}>
        <label>Email</label>
        <Input
          type='email'
          value={email}
          placeholder='Insira seu email...'
          onChange={e => setEmail(e.target.value)}
        />
        <Button disable={loading}>Recuperar senha</Button>
      </form>
      <div className='spc-around'>
        <span style={{ color: 'var(--tertiary)' }}>Já tem uma conta?</span>
        <Link className='lnk' to='/login'>
          Logue-se
        </Link>
      </div>
      <div className='spc-around'>
        <span style={{ color: 'var(--tertiary)' }}>Não tem uma conta?</span>
        <Link className='lnk' to='/signup'>
          Cadastre-se
        </Link>
      </div>
    </Container>
  )
}

export default Forgot
