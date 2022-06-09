import React, { useEffect, useState } from 'react';
import socket from 'utils/socket';
import ChatMessage from '.';

export default {
  title: 'ChatMessage',
  component: ChatMessage,
};

const photo =
  'https://media-exp1.licdn.com/dms/image/C4D03AQF56johHTDiXg/profile-displayphoto-shrink_800_800/0/1652218834579?e=1659571200&v=beta&t=KPK-rCPJJegCU-SChkuIyqz_Bdujo072CX3COBhOT48';

const defaultMessages = [
  {
    id: 1,
    content: 'acho que hoje vamos terminar tudo',
    photo,
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
  const to = '0003';
  const me = '0001';
  const [messages, setMessages] = useState(defaultMessages);
  const handleSubmit = (content: string) => {
    setMessages([...messages, { content, sentByMe: true, photo: '', id: messages.length + 1 }]);
    socket.emit('send-message', { to, content });
  };

  useEffect(() => {
    socket.on(me, (content: string) => {
      setMessages([...messages, { content, sentByMe: false, photo, id: messages.length + 1 }]);
    });
  }, [messages]);

  return (
    <div style={{ background: 'rgb(41, 45, 56)', padding: 100, height: '655px', overflow: 'hidden' }}>
      <ChatMessage to="Gabriel Pereira" messages={messages} onSubmit={handleSubmit} />
    </div>
  );
};
