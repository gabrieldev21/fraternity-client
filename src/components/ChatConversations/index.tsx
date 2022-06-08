import ChatNewConversation from 'components/ChatNewConversation';
import ChatUsers, { ChatUsersProps } from 'components/ChatUsers';
import React from 'react';
import * as S from './styleds';

type ChatConversationsProps = ChatUsersProps;

const ChatConversations = (props: ChatConversationsProps) => {
  return (
    <S.Container>
      <ChatUsers {...props} />
      <ChatNewConversation />
    </S.Container>
  );
};

export default ChatConversations;
