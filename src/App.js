import Navbar from './components/Navbar';

import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #031633;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
`
function App() {
  return (
    <MainContainer className="App">
      <Navbar />
    </MainContainer>
  );
}

export default App;
