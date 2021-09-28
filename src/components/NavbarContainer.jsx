import { useState } from "react";
import styled from "styled-components";

import Logo from '../assets/logo.png'
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'

const Navbarmain = styled.div`
    height: 75%;
    width: 100%;
    position: fixed;
    bottom: 0;
    overflow: hidden;
`

const Navicons = styled.div`
    height: 13.35%;
    background-color: lightgray;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212529;
`

const Navtext = styled.div`
    height: 100%;
    background-color: black;
    width: 100%;
    transform: translateY(${({ naviconsState }) => naviconsState ? "0" : "100%"});
    transition: transform 0.5s ease-in-out;
`

const IconContainer = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavbarContainer = () => {
  const [naviconsState, setNaviconsState] = useState(false)

  return (
    <Navbarmain>
      <Navtext naviconsState={naviconsState} />
      <Navicons>
        <img src={Logo} alt="" />
        <IconContainer>
          {
            naviconsState ?
              <BsFileArrowDown
                style={{ fontSize: "1.8rem" }}
                onClick={() => { setNaviconsState(!naviconsState) }}
              /> :
              <BsFileArrowUp
                style={{ fontSize: "1.8rem" }}
                onClick={() => { setNaviconsState(!naviconsState) }}
              />
          }
        </IconContainer>
      </Navicons>
    </Navbarmain>
  )
}

export default NavbarContainer;