import { useState } from "react";
import styled from "styled-components";

import Logo from '../assets/logo.png'
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'

const Navbarmain = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    overflow: hidden;
`

const Navicons = styled.div`
    height: 10%;
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
  color: white;
  width: 100%;
  height: 70%;
  background-color: black;
  position: absolute;
  bottom: 10%;
  transform: translateY(${({ naviconsState }) => naviconsState ? "0" : "100%"});
  transition: transform 0.5s ease-in-out;
  `
// padding: 1rem 0.75rem;

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
      <Navtext naviconsState={naviconsState}>
        {/* <div style={{
          padding: "1rem 0.815rem",
          display: "flex",
          alignItems: "center",
          fontSize: "20px",
        }}>
          <BsFileArrowUp />
          <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
        </div> */}
        <div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>1</div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>2</div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>3</div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>4</div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>5</div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>6</div>
          <div style={{ height: '14.28%', fontSize: '15px' }}>7</div>
        </div>
        <div>
          socials
        </div>
      </Navtext>
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