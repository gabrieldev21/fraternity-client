import React, { useState } from 'react';
import Authenticated from 'components/templates/Authenticated';
import ChatConversations from 'components/ChatConversations';
import ChatMessage from 'components/ChatMessage';
import * as S from './styleds';
import { conversations, defaultMessages } from './mocks';

const Chat = () => {
  const [active, setActive] = useState('0001');
  const [messages, setMessages] = useState(defaultMessages);
  const handleSubmit = (content: string) => {
    setMessages([...messages, { content, sentByMe: true, photo: '', id: messages.length + 1 }]);
  };

  return (
    <Authenticated>
      <S.Container>
        <ChatConversations conversations={conversations} active={active} onSelect={setActive} />
        <ChatMessage to="Gabriel Pereira" messages={messages} onSubmit={handleSubmit} />
      </S.Container>
    </Authenticated>
  );
};

export default Chat;
