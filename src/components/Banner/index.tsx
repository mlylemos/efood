import logo from '../../assets/logo.png'
import { Background, Container, Title, Logo } from './styles'

const Banner = () => (
  <Background>
    <Container>
      <Logo src={logo} alt="efood logo" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Container>
  </Background>
)

export default Banner
