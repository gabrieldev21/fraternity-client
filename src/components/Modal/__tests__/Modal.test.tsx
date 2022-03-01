import { screen } from '@testing-library/dom';
import React from 'react';
import { renderWithProviders } from 'utils/helperTest';
import Modal from '..';

describe('<Modal />', () => {
  it('Should render children', () => {
    const childrenText = 'CHILDREN_TEXT';
    renderWithProviders(<Modal>{childrenText}</Modal>);
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});
