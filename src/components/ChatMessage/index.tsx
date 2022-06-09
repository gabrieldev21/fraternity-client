import React, { useEffect, useRef, useState } from 'react';

import sendchat from 'assets/svgs/send-chat.svg';
import * as S from './styleds';

export interface IChatMessage {
  to: string;
  messages: {
    id: number,
    content: string,
    photo?: string,
    sentByMe: boolean,
  }[];
  onSubmit: (content: string) => void;
}

const ChatMessage = ({ to, messages, onSubmit }: IChatMessage) => {
  const [content, setContent] = useState('');
  const refContainer = useRef<HTMLDivElement>(null);
  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };
  useEffect(() => {
    refContainer.current?.scrollTo({
      top: refContainer.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [refContainer, messages]);

  return (
    <S.Container>
      <S.Header>
        <S.Username>Chat com {to}</S.Username>
        <S.Preview>online</S.Preview>
      </S.Header>
      <S.BodyWrapper ref={refContainer}>
        {messages.map((message) =>
          message.sentByMe ? (
            <S.SendMessage key={message.id}>
              <S.TextMessage>{message.content}</S.TextMessage>
            </S.SendMessage>
          ) : (
            <S.ReceivedWrapper key={message.id}>
              <S.ReceivedMessage>{message.content}</S.ReceivedMessage>
              <S.Avatar src={message.photo} />
            </S.ReceivedWrapper>
          ),
        )}
      </S.BodyWrapper>
      <S.Footer>
        <S.TextArea
          placeholder="Escreva sua mensagem"
          value={content}
          onChange={(evt) => setContent(evt.currentTarget.value)}
          onKeyPress={(evt) => evt.ctrlKey && evt.code === 'Enter' && handleSubmit()}
          rows={2}
        />
        <S.Actions>
          <S.ClipBoard />
          <S.IconButton onClick={() => handleSubmit()}>
            <img src={sendchat} alt="" />
          </S.IconButton>
        </S.Actions>
      </S.Footer>
    </S.Container>
  );
};

export default ChatMessage;
