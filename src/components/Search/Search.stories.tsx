import React from 'react';

import Search from '.';

export default {
  title: 'Search',
  component: Search,
};

export const Searchs = () => (
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
    <br />
    <Search />
    <br />
  </div>
);
