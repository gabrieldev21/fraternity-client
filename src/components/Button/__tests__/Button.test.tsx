import * as React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/helperTest';
import Button from '..';

describe('<Button />', () => {
  it('Should render children', () => {
    const textChildren = 'My Button';
    renderWithProviders(<Button>{textChildren}</Button>);
    expect(screen.getByText(textChildren)).toBeInTheDocument();
  });
});
