import { useContext } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';

const useTheme = (): DefaultTheme => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};

export default useTheme;
