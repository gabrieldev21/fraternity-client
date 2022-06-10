import React from 'react';
import NewPost from '.';

export default {
  title: 'Feed/NewPost',
  component: NewPost,
};

export const NewPostComponent = () => {
  return (
    <div style={{ padding: 30, background: 'rgb(41, 45, 56)' }}>
      <NewPost
        onSubmit={() => {
          'hellow';
        }}
      />
    </div>
  );
};
