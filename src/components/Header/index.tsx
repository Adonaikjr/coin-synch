import {
  ContainerHeader,
  NavigateBack,
  Nav,
  ContainerAnimated,
  ContainerHamburger,
  ContentHeader,
  NewLink,
} from './styled'
import logo from '../../assets/tmp/logo.svg'
import { useContext, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { ContentContext } from '../../hook/context'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { handleSign, handleSignUp }: any = useContext(ContentContext)

  return (
    <ContainerHeader>
      <ContentHeader>
        <span>
          <img src={logo} alt="logo" />
          <NavigateBack>
            <p>About us</p>
            <p>Top Cryptos</p>
          </NavigateBack>
        </span>

        {isOpen ? (
          <ContainerAnimated>
            <section>
              <ul>
                <li onClick={handleSign}>Sign in</li>
                <li onClick={handleSignUp}>Sign up</li>
              </ul>
              <div>
                <img src={logo} height={50} alt="logo" />
              </div>
            </section>
          </ContainerAnimated>
        ) : (
          <Nav>
            <NewLink onClick={handleSign}>Sign in</NewLink>
            <NewLink active onClick={handleSignUp}>
              Sign up
            </NewLink>
          </Nav>
        )}

        <ContainerHamburger>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            rounded
            label="menu"
            hideOutline={false}
            duration={0.8}
            distance="sm"
            color="orange"
          />
        </ContainerHamburger>
      </ContentHeader>
    </ContainerHeader>
  )
}
