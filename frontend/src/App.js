import styled from "styled-components";
import bg from './img/bg.jpeg';

function App() {
  return (
    <AppStyled backgroundImage={bg} className="App" role="main">
    </AppStyled>
  );
}

const AppStyled = styled.main`
  height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover; // Ensures the background covers the entire div
  background-position: center; // Centers the background image
`;

export default App;
