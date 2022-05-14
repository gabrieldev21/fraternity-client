import React, { useState } from 'react';

import DatePicker from '.';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const DatePickers = () => {
  const [value, onChange] = useState<Date>();

  return (
    <div
      style={{
        background: 'rgb(41, 45, 56)',
        width: 300,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
        flexDirection: 'column',
      }}
    >
      <DatePicker value={value} name="date" label="Data de nascimento" onChange={onChange} />
    </div>
  );
};
