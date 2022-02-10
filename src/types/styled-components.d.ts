import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    size: {
      iconHeader: string;
      titleText: string;
    };
    colors: {
      main: string;
      dark: string;
      light: string;
      white: string;
      error: string;
    };
  }
}
