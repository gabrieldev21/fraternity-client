import React from 'react';
import Loading from '.';

export default {
  title: 'Loading',
  component: Loading,
};

export const LoadingDarkBackground = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 100,
    }}
  >
    <Loading />
  </div>
);

export const LoadingWhiteBackground = () => (
  <div
    style={{
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 100,
    }}
  >
    <Loading />
  </div>
);
