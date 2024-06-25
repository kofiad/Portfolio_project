import styled from "styled-components";
import bg from './img/bg.jpeg';

function App() {
  return (
    <AppStyled bg={bg} className="App">
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
`;

export default App;
