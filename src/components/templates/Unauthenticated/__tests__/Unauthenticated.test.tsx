import { screen } from '@testing-library/dom';
import React from 'react';
import { renderWithProviders } from 'utils/helperTest';
import Template, { Title, Subtitle, LinkStyled } from '..';

describe('<Template />', () => {
  it('Should render template with title, subtitle, link and children', () => {
    const textChildren = 'TEST_TEMPLATE';
    const textTitle = 'TEST_TITLE';
    const textSubtitle = 'TEST_SUBTITLE';
    const textLink = 'TEST_LINK';
    renderWithProviders(
      <Template>
        <Title>{textTitle}</Title>
        <Subtitle>{textSubtitle}</Subtitle>
        <LinkStyled to="/">{textLink}</LinkStyled>
        {textChildren}
      </Template>,
    );
    expect(screen.getByText(textChildren)).toBeInTheDocument();
    expect(screen.getByText(textTitle)).toBeInTheDocument();
    expect(screen.getByText(textSubtitle)).toBeInTheDocument();
    expect(screen.getByText(textLink)).toBeInTheDocument();
  });

  it('Should render template with loading', () => {
    const textChildren = 'TEST_TEMPLATE';
    renderWithProviders(<Template loading>{textChildren}</Template>);
    expect(screen.getByText(textChildren)).toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
