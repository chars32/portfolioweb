import { useState } from "react";
import styled from "styled-components";

import Logo from '../assets/logo.png'
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { AiOutlineLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";

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
  padding: 1.0625rem 0.8125rem;
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
      <Navtext naviconsState={naviconsState}>
        <div style={{ height: '90%' }}>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
          <div style={{
            height: '14.28%',
            fontSize: '20px',
            display: "flex",
            alignItems: "center",
          }}>
            <BsFileArrowUp />
            <span style={{ marginLeft: '0.5rem' }}>Introducing</span>
          </div>
        </div>
        <div style={{ height: '10%' }}>
          <div style={{ height: '100%', fontSize: '25px', display: 'flex', justifyContent: 'space-evenly' }}>
            <AiOutlineLinkedin style={{ height: '100%', fontSize: '25px' }} />
            <AiFillFacebook style={{ height: '100%', fontSize: '25px' }} />
            <AiFillGithub style={{ height: '100%', fontSize: '25px' }} />
          </div>
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