import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/quiz-background-image.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height : 100%;
  }

  body {
    background-image : url(${BGImage});
  }
`;
