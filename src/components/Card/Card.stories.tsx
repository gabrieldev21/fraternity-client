import React from 'react';
import Card from '.';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card style={{ height: '400px', width: '400px' }}>
    <span>Lorem Ipsum</span>
  </Card>
);
