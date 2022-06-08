import React, { useState } from 'react';
import ChatMessage from '.';

export default {
  title: 'ChatMessage',
  component: ChatMessage,
};

const defaultMessages = [
  {
    id: 1,
    content: 'acho que hoje vamos terminar tudo',
    photo:
      'https://media-exp1.licdn.com/dms/image/C4D03AQF56johHTDiXg/profile-displayphoto-shrink_800_800/0/1652218834579?e=1659571200&v=beta&t=KPK-rCPJJegCU-SChkuIyqz_Bdujo072CX3COBhOT48',
    sentByMe: false,
  },
  {
    id: 2,
    content: 'teremos de terminar tudooooo',
    photo: '',
    sentByMe: true,
  },
];

export const CardComponent = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const handleSubmit = (content: string) => {
    setMessages([...messages, { content, sentByMe: true, photo: '', id: messages.length + 1 }]);
  };

  return (
    <div style={{ background: 'rgb(41, 45, 56)', padding: 100, height: '655px', overflow: 'hidden' }}>
      <ChatMessage to="Gabriel Pereira" messages={messages} onSubmit={handleSubmit} />
    </div>
  );
};
