import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    main: '#1c90f4',
    mainLight: 'hsl(210deg 66% 33%)',
    error: '#D32F2F',
    background: '#292d38',
    textMain: '#fff',
    textSecondary: '#727b88',
    backgroundSecondary: '#3d404a',
    backgroundGradient: `linear-gradient(
      45deg,
      rgba(41, 45, 56, 1) 0%,
      rgba(41, 43, 56, 1) 65%,
      rgba(41, 43, 56, 0.5979342420561975) 100%
    )`,
    input: {
      background: 'hsl(227deg 16% 23%)',
      backgroundSecondary: '#3d404a',
    },
  },
};

export default theme;
