/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Authenticated from 'components/templates/Authenticated';
import ChatConversations from 'components/ChatConversations';
import ChatMessage from 'components/ChatMessage';
import { useSelector, RootStateOrAny } from 'react-redux';
import socket from 'utils/socket';
import api from 'utils/api';

import * as S from './styleds';
import { conversations, defaultMessages, photo } from './mocks';

const Chat = () => {
  // eslint-disable-next-line no-underscore-dangle
  const me = useSelector((state: RootStateOrAny) => state.user._id);
  const [active, setActive] = useState('');
  const [to, setTo] = useState<{ firstName: string, lastName: string, photo: string, _id: string }>();
  const [messages, setMessages] = useState(defaultMessages);

  const handleSubmit = (content: string) => {
    setMessages([...messages, { content, sentByMe: true, photo: '', id: messages.length + 1 }]);
    socket.emit('send-message', { to: active, content });
  };

  useEffect(() => {
    api.get('/chat').then((res) => {
      const [user] = res.data;
      // eslint-disable-next-line no-underscore-dangle
      setActive(user?._id);
      setTo(user);
    });
  }, []);

  useEffect(() => {
    socket.on(me, (content: string) => {
      setMessages([...messages, { content, sentByMe: false, photo, id: messages.length + 1 }]);
    });
  }, [messages, me]);

  const conversationsArray = to
    ? [
        {
          id: to._id,
          message: messages[messages.length - 1].content,
          name: `${to.firstName} ${to.lastName}`,
          photo: to.photo,
        },
        ...conversations,
      ]
    : conversations;

  return (
    <Authenticated>
      <S.Container>
        <ChatConversations conversations={conversationsArray} active="0001" onSelect={setActive} />
        <ChatMessage to="Gabriel Pereira" messages={messages} onSubmit={handleSubmit} />
      </S.Container>
    </Authenticated>
  );
};

export default Chat;
