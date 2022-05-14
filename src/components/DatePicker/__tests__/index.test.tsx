import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import moment from 'moment';

import { renderWithProviders } from 'utils/helperTest';
import Datepicker from '..';

moment.locale('pt-BR');

describe('<Datepicker />', () => {
  it('Should render input with label', () => {
    const textLabel = 'TEST_LABEL';
    renderWithProviders(<Datepicker label={textLabel} name="test" onChange={jest.fn()} />);
    expect(screen.getByText(textLabel)).toBeInTheDocument();
  });

  it('Should change date', () => {
    const onChange = jest.fn();
    const textLabel = 'TEST_LABEL';
    renderWithProviders(<Datepicker label={textLabel} name="test" onChange={onChange} />);
    userEvent.click(screen.getByText(textLabel));
    expect(screen.getByText(moment().format('MMMM [de] YYYY').toLocaleLowerCase())).toBeInTheDocument();
    userEvent.click(screen.getByText('15'));
    expect(onChange).toBeCalled();
  });
});
