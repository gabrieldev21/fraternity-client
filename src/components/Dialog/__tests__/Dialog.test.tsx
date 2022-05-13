import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithProviders } from 'utils/helperTest';
import Dialog from '..';

describe('<Dialog />', () => {
  it('Should render children and button', () => {
    const textChildren = 'TEST_CHILDREN';
    renderWithProviders(
      <Dialog isOpen onClose={() => false}>
        {textChildren}
      </Dialog>,
    );
    expect(screen.getByText(textChildren)).toBeInTheDocument();
  });
});
