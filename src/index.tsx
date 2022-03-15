import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import store from 'store/';
import theme from 'utils/theme';
import GlobalStyle from 'components/Fonts';
import translation from './locale/pt';
import Routes from './Routes';

i18n.use(initReactI18next).init({
  resources: { pt: { translation } },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </ThemeProvider>
  </I18nextProvider>,
  document.getElementById('app'),
);
