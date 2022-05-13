import React from 'react';

import DatePicker from '.';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const DatePickers = () => (
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
    <DatePicker name="date" label="Date" />
  </div>
);
