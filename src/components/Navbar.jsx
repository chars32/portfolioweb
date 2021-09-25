import Logo from '../assets/logo.png'
import { BsFileArrowUp } from 'react-icons/bs'

import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #212529;
  width: 100%;
  height: 10%;
  bottom: 0;
`

const NavbarLogoToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconContainer = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BsFileArrowUp3 = styled(BsFileArrowUp)`
  font-size: 1.5rem;
`

const NavbarMenu = styled.div`
  background-color: red;
`
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogoToggle>
        <img src={Logo} alt="" />
        <IconContainer>
          <BsFileArrowUp3 />
        </IconContainer>
      </NavbarLogoToggle>

      <NavbarMenu>
        algo
      </NavbarMenu>

    </NavbarContainer>
  )
}

export default Navbar;