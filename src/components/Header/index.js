import { Container, InputSearchContainer } from './styles'

import icon from '../../assets/icon.png'

export default function Header () {
  return (
    <Container>
      <img src={icon} alt='Bakoads Icon' width='100' />

      <InputSearchContainer>
        <input type='text' placeholder='Pesquise por nome...' />
      </InputSearchContainer>
    </Container>
  )
}
