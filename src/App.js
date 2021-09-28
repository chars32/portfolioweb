// import Navbar from './components/Navbar';

import styled from 'styled-components';
import ContentContainer from './components/Content';
import NavbarContainer from './components/NavbarContainer';

const MainContainer = styled.div`
  background-color: #031633;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`



function App() {
  return (
    <MainContainer className="App">
      <ContentContainer />
      <NavbarContainer />
    </MainContainer>
  );
}

export default App;
