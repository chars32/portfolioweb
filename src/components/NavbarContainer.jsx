import { useEffect, useState } from "react";
import styled from "styled-components";

import Logo from '../assets/logo.png'
import { BsFileArrowUp, BsFileArrowDown } from 'react-icons/bs'
import { AiOutlineLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { respondTo } from "../mediaquery/_respondTo";

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
  ${respondTo.md`
      width: 10%;
      height: 100%;
      background-color: black;
    `}
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

const NavBarTextContainer = styled.div`
  height: 90%
`

const NavBarItem = styled.div`
  height: 14.28%;
  font-size: 18px;
  display: flex;
  align-items: center;
`

const NavBarIconsContainer = styled.div`
  height: 10%;
`

const NavBarIconsBox = styled.div`
  height: 100%;
  font-size: 25px;
  display: flex;
  justify-content: space-evenly
`

const LogoContainer = styled.img`
  display: ${({ widthquery }) => widthquery > 992 ? "none" : "block"};
`


const NavbarContainer = () => {
  const [naviconsState, setNaviconsState] = useState(false)
  const [widthquery, setWidthquery] = useState()

  useEffect(() => { setWidthquery(window.innerWidth) }, [widthquery])

  const sections = [
    'Introducing',
    'Somethings about me',
    'What can I do',
    'My personal projects',
    'Career path & Experience',
    'Testimonials & Certificates',
    'Contact me'
  ]

  console.log(widthquery)
  return (
    <Navbarmain>
      <Navtext naviconsState={naviconsState}>
        <NavBarTextContainer>
          {
            sections.map((section) =>
              <NavBarItem>
                <BsFileArrowUp />
                <span style={{ marginLeft: '0.5rem' }}>{section}</span>
              </NavBarItem>
            )
          }
        </NavBarTextContainer>
        <NavBarIconsContainer>
          <NavBarIconsBox>
            <AiOutlineLinkedin style={{ height: '100%', fontSize: '25px' }} />
            <AiFillFacebook style={{ height: '100%', fontSize: '25px' }} />
            <AiFillGithub style={{ height: '100%', fontSize: '25px' }} />
          </NavBarIconsBox>
        </NavBarIconsContainer>
      </Navtext>
      <Navicons>
        <LogoContainer src={Logo} alt="" widthquery={widthquery} />
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