import Logo from '../assets/logo.png'
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'

import styled from "styled-components";
import { useState } from 'react';

const NavbarContainer = styled.div`
  bottom : 0;
  position : fixed;
  width : 100%;
`

const NavbarLogoToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212529;
  width: 100%;
  height: 10%;
`

const IconContainer = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Navbar = () => {
  const [iconState, setIconState] = useState(false)
  return (
    <NavbarContainer>
      <NavbarLogoToggle>
        <img src={Logo} alt="" />
        <IconContainer>
          {
            iconState ?
              <BsFileArrowDown
                style={{ fontSize: "1.5rem" }}
                onClick={() => { setIconState(!iconState) }}
              /> :
              <BsFileArrowUp
                style={{ fontSize: "1.5rem" }}
                onClick={() => { setIconState(!iconState) }}
              />
          }
        </IconContainer>
      </NavbarLogoToggle>
    </NavbarContainer>
  )
}

export default Navbar;