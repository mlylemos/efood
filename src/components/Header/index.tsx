import logo from '../../assets/logo.png'
import { HeaderBar, Nav, Cart, Logo } from './styles'
import Container from '../Container/styles'

const Header = () => (
  <HeaderBar>
    <Container>
      <Nav>Restaurantes</Nav>
      <Logo src={logo} alt="efood logo" />
      <Cart>0 produto(s) no carrinho</Cart>
    </Container>
  </HeaderBar>
)
export default Header