import React from 'react';
import Card from '.';

export default {
  title: 'Card',
  component: Card,
};

export const CardComponent = () => (
  <div style={{ background: 'rgb(41, 45, 56)', padding: 100 }}>
    <Card>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
    </Card>
  </div>
);
