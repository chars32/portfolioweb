import Navbar from './components/Navbar';

import styled from 'styled-components';
import ContentContainer from './components/Content';

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
      <Navbar />
    </MainContainer>
  );
}

export default App;
