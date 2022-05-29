import React from 'react';
import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
};

export const UserProfile = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: '98vw',
      paddingTop: '300px',
      position: 'relative',
      height: '100vh',
    }}
  >
    <Footer />
  </div>
);
