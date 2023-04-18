import logo from '@/assets/logo.png'
import { Cart, Location } from '@/components'
import {
  LogoImage,
  NavBarContainer,
  NavBarContent,
  NavBarWrapper,
} from './styles'

function NavBar() {
  return (
    <NavBarContainer>
      <NavBarContent>
        <LogoImage
          src={logo}
          alt="Copo de café com um foguete se sobrepondo ao mesmo e o nome Coffee Delivery"
        />
        <NavBarWrapper>
          <Location />
          <Cart />
        </NavBarWrapper>
      </NavBarContent>
    </NavBarContainer>
  )
}

export { NavBar }
