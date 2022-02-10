import { createGlobalStyle } from 'styled-components';

import NunitoRegular from 'assets/fonts/Nunito-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: normal;
    src:
      url('${NunitoRegular}') format('ttf'),
  }
 
  html, body {
    font-family: 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;
