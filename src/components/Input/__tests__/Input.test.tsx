import { screen } from '@testing-library/dom';
import React from 'react';
import { renderWithProviders } from 'utils/helperTest';
import Input from '..';

describe('<Input />', () => {
  it('Should render input with label and Icon', () => {
    const textLabel = 'TEST_LABEL';
    const icon = <span data-testid="icon-test">I</span>;
    renderWithProviders(<Input label={textLabel} icon={icon} />);
    expect(screen.getByText(textLabel)).toBeInTheDocument();
    expect(screen.getByTestId('icon-test')).toBeInTheDocument();
  });

  it('Should render input with error message', () => {
    const textLabel = 'TEST_LABEL';
    const errorMessage = 'Error message';
    const icon = <span data-testid="icon-test">I</span>;
    renderWithProviders(<Input error={errorMessage} label={textLabel} icon={icon} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
