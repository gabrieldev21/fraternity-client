import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundGradient: string;
      error: string;
      main: string;
      mainLight: string;
      textMain: string;
      textSecondary: string;
      input: {
        background: string;
        backgroundSecondary: string;
      }
    };
  }
}
