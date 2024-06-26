import React from 'react';
import styled from "styled-components";
import bg from './img/bg.jpeg';
import { MainLayout } from "./styles/layout";
import Orb from './components/orb/Orb';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <AppStyled backgroundImage={bg} className="App" role="main">
      <Orb />
      <MainLayout>
        <Navigation/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh; // Sets the height of the div to the height of the device screen
  background-image: url(${({ backgroundImage }) => backgroundImage});
  position: relative; // Positions background image relative to the device screen
  background-repeat: no-repeat; // Prevents the image from repeating
  background-size: cover; // Covers the entire area without stretching the image
  background-position: center; // Centers the background image
`;

export default App;
