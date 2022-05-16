import React, { useCallback, useState } from 'react';
import { BsFillCalendarFill } from 'react-icons/bs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import Input from 'components/Input';
import * as S from './styleds';

moment.locale('pt-BR');

export interface IDatePicker {
  label: string;
  name: string;
  format?: string;
  value?: Date;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<IDatePicker> = ({ label, name, format, value, onChange }) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleCalendarChange = useCallback(
    (newValue: Date) => {
      onChange(newValue);
      setOpenCalendar(false);
    },
    [onChange],
  );

  const valueText = value ? moment(value).format(format) : '';

  return (
    <S.Wrapper>
      <Input
        name={name}
        value={valueText}
        label={label}
        onClick={() => setOpenCalendar(true)}
        icon={<BsFillCalendarFill />}
        readOnly
      />
      {openCalendar && <Calendar locale="pt-BR" value={value} onChange={handleCalendarChange} />}
    </S.Wrapper>
  );
};

DatePicker.defaultProps = {
  format: 'L',
  value: undefined,
};

export default DatePicker;
