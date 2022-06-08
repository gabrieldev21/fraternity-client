import React from 'react';
import NewConversation from '.';

export default {
  title: 'Chat/NewConversation',
  component: NewConversation,
};

export const NewConversationComponent = () => {
  return (
    <div style={{ background: '#292D38', padding: 30 }}>
      <NewConversation />
    </div>
  );
};
