import React from 'react';
import Input from 'components/Input';
import { BsFillCalendarFill } from 'react-icons/bs';

export interface IDatePicker {
  label: string;
  name: string;
}

const DatePicker: React.FC<IDatePicker> = ({ label, name }) => {
  return <Input name={name} label={label} icon={<BsFillCalendarFill />} />;
};

export default DatePicker;
