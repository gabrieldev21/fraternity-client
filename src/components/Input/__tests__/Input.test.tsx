import { screen } from '@testing-library/dom';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'utils/helperTest';
import Input from '..';

describe('<Input />', () => {
  it('Should render input with label and Icon', () => {
    const textLabel = 'TEST_LABEL';
    const icon = <span data-testid="icon-test">I</span>;
    renderWithProviders(<Input name="test" label={textLabel} icon={icon} />);
    expect(screen.getByText(textLabel)).toBeInTheDocument();
    expect(screen.getByTestId('icon-test')).toBeInTheDocument();
  });

  it('Should render input with error message', () => {
    const textLabel = 'TEST_LABEL';
    const errorMessage = 'Error message';
    const icon = <span data-testid="icon-test">I</span>;
    renderWithProviders(<Input name="test" error={errorMessage} label={textLabel} icon={icon} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('Should render input with icon to change password for text', () => {
    renderWithProviders(<Input name="test" label="password" type="password" />);
    const input = screen.getByLabelText('password');
    expect(input).toHaveAttribute('type', 'password');
    userEvent.click(screen.getByRole('button'));
    expect(input).toHaveAttribute('type', 'text');
    userEvent.click(screen.getByRole('button'));
    expect(input).toHaveAttribute('type', 'password');
  });
});
