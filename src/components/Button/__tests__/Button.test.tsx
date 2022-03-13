import { screen } from '@testing-library/dom';
import React from 'react';
import { renderWithProviders } from 'utils/helperTest';
import Button from '..';

describe('<Button />', () => {
  it('Should render button with children', () => {
    const textChildren = 'TEST_BUTTON_CHILDREN';
    renderWithProviders(<Button>{textChildren}</Button>);
    expect(screen.getByText(textChildren)).toBeInTheDocument();
  });
  it('Should render disabled button', () => {
    const textChildren = 'TEST_BUTTON_CHILDREN';
    renderWithProviders(
      <Button variant="secondary" disabled>
        {textChildren}
      </Button>,
    );
    expect(screen.getByRole('button', { name: textChildren })).toBeDisabled();
  });
});
