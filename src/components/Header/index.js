import { Container } from './styles'

import bakoads from '../../assets/images/bakoads.png'

export default function Header () {
  return (
    <Container>
      <img src={bakoads} alt='Bakoads' width='200' />
    </Container>
  )
}
