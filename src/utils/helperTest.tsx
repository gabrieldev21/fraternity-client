import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'i18next';
import theme from 'utils/theme';
import translation from '../locale/pt';

i18n.use(initReactI18next).init({
  resources: { pt: { translation } },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
});

export const renderWithProviders = (children: React.ReactNode): RenderResult => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );
};
