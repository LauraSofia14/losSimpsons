import * as React from 'react';
import CustomNavbar from './components/navbar';
import styled from 'styled-components';
import Imagen from './components/fondo';
import Text from './components/text';



const AppWrapper = styled.div `
background-color: #e3e3e3; `;

function App() {
  return (
    <AppWrapper>
      <CustomNavbar></CustomNavbar> 
      <Imagen></Imagen>
      <Text></Text>
    </AppWrapper>
  );

}

export default App;