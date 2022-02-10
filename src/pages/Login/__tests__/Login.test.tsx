import * as React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'utils/helperTest';
import Login from '..';

describe('<Login />', () => {
  it('Should render Login', () => {
    renderWithProviders(<Login />);
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/senha/i)).toBeInTheDocument();
    expect(screen.getByText(/entrar/i)).toBeInTheDocument();
  });

  it('Should validate if email is valid', async () => {
    renderWithProviders(<Login />);

    userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), 'email@test');
    userEvent.click(screen.getByText(/entrar/i));
    await waitFor(() => {
      expect(screen.getByText('E-mail inválido')).toBeInTheDocument();
    });
  });

  it('Should validate if email and password is required', async () => {
    renderWithProviders(<Login />);
    userEvent.click(screen.getByText(/entrar/i));
    await waitFor(() => {
      expect(screen.getAllByText('Campo obrigatório')).toHaveLength(2);
    });
  });
});
