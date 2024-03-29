import styled, { createGlobalStyle } from 'styled-components';
import Image from './images/backgroundImage.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${Image});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size : 2rem;
    margin: 0;
  }
  
  .start, .next {
    background: white;
    height: 40px;
    box-shadow: 1px 2px;  
    width: 90%;
    border-radius: 10px;
  }
`