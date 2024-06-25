import styled from "styled-components";
import bg from './img/bg.jpeg';
import { MainLayout } from "./styles/layout";

function App() {
  return (
    <AppStyled backgroundImage={bg} className="App" role="main">
      <MainLayout>
        <h1>App</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.main`
  height: 100vh; // Sets the height of the div to the height of the device screen
  background-image: url(${({ backgroundImage }) => backgroundImage});
  position: relative; // Positions background image relative to the device screen
  background-repeat: no-repeat; // Prevents the image from repeating
`;

export default App;
