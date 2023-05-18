import { Link, useNavigate } from 'react-router-dom'
import { Btn } from '../../components/Btn'
import { Inpt } from '../../components/Inpt'
import { useAuth } from '../../context/authContext'
import { useState } from 'react'
import { Container } from './styles'

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
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Email</h3>
            <Inpt
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              placeholder='Insira seu email...'
            />
          </div>
          <Btn disable={loading} className='btnImg'>
            <h3>Recuperar senha</h3>
          </Btn>
        </form>
        <div className='spc-around'>
          <h3 style={{ color: 'var(--tertiary)' }}>Já tem uma conta?</h3>
          <Link className='lnk' to='/login'>
            Logue-se
          </Link>
        </div>
        <div className='spc-around'>
          <h3 style={{ color: 'var(--tertiary)' }}>Não tem uma conta?</h3>
          <Link className='lnk' to='/signup'>
            Cadastre-se
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Forgot
