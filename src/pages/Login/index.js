import { Link, useNavigate } from 'react-router-dom'
import { Btn } from '../../components/Btn'
import { Inpt } from '../../components/Inpt'
import { Container } from './styles'
import { useAuth } from '../../context/authContext'
import { useState } from 'react'

function Login () {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()

    setLoading(true)

    if (password.length < 6) {
      alert('Sua senha deve ter no mínimo 6 caracteres!')
      return
    }

    try {
      await signIn(email, password)
      navigate('/home')
    } catch (error) {
      console.log(error)
      alert('Ocorreu um erro ao tentar efetuar o login')
    }

    setLoading(false)
  }

  return (
    <Container>
      <div>
        <div>
          <h2>Administre a sua conta</h2>
        </div>
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
          <div>
            <div className='spc-around'>
              <h3>Senha</h3>
              <Link className='lnk' to='/forgot'>
                Esqueceu sua senha?
              </Link>
            </div>
            <Inpt
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              placeholder='Insira sua senha...'
            />
          </div>
          <Btn disable={loading} className='btnImg'>
            <h3>Login</h3>
          </Btn>
        </form>
        <div className='spc-around'>
          <h3 style={{ color: 'var(--tertiary)' }}>Não tem uma conta?</h3>
          <Link className='lnk' to='/signup'>
            Inscreva-se
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Login
