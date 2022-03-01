import { screen } from '@testing-library/dom';
import React from 'react';
import { renderWithProviders } from 'utils/helperTest';
import Template from '..';

describe('<Template />', () => {
  it('Should render template with children', () => {
    const textChildren = 'TEST_TEMPLATE';
    renderWithProviders(<Template>{textChildren}</Template>);
    expect(screen.getByText(textChildren)).toBeInTheDocument();
  });

  it('Should render template with loading', () => {
    const textChildren = 'TEST_TEMPLATE';
    renderWithProviders(<Template loading>{textChildren}</Template>);
    expect(screen.getByText(textChildren)).toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
