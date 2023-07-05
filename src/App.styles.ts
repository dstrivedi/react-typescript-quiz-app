import styled, { createGlobalStyle } from 'styled-components';

import BGImage from '../images/quiz-background-image';

export const GlobalStyle = createGlobalStyle`
  html {
    height : 100%;
  }

  body {
    background-image : url(${BGImage});
  }
`;
