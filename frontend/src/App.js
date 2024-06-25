import styled from "styled-components";
import bg from './img/bg.jpeg';

function App() {
  return (
    <AppStyled backgroundImage={bg} className="App" role="main">
    </AppStyled>
  );
}

const AppStyled = styled.main`
  min-height: 100vh; // Ensures the element covers the full height of the viewport
  width: 100%; // Ensures the element covers the full width of the viewport
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover; // Ensures the background covers the entire div
  background-position: center; // Centers the background image
  background-repeat: no-repeat; // Prevents the image from repeating
`;

export default App;
