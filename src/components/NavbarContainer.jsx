import { useState } from "react";
import styled from "styled-components";

const Navbarmain = styled.div`
    height: 70%;
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
`

const Navtext = styled.div`
    height: 100%;
    background-color: lightgreen;
    width: 100%;
    transform: translateY(100%);
    transform: translateY(${({ naviconsState }) => naviconsState ? '0' : '100%'});
`

const NavbarContainer = () => {
    const [naviconsState, setNaviconsState] = useState(false)

    return (
        <Navbarmain>
            <Navtext />
            <Navicons
                onClick={() => setNaviconsState(!naviconsState)}
            />
        </Navbarmain>
    )
}

export default NavbarContainer;