import React from 'react';
import * as S from './styleds';


export interface ChatUsersProps{
  conversations: {
    id: string
    name: string
    photo: string
    message: string
  }[]
  active: string
  onSelect : (id: string) => void
}

const ChatUsers = ({conversations, active, onSelect}:ChatUsersProps) => {
  return (
    <S.CardStyled>
      <S.Header>
        <S.TitleHeader>Chats</S.TitleHeader>
      </S.Header>
      <S.Body>
        {conversations.map((conversation) => (
          <S.Item onClick={()=> onSelect(conversation.id)} active={conversation.id === active} key={conversation.id}>
            {active === conversation.id && <S.SelectedBar />}
            <S.Avatar src={conversation.photo} />
            <S.UserContent>
              <S.Name>{conversation.name}</S.Name>
              <S.Message>{conversation.message}</S.Message>
            </S.UserContent>
          </S.Item>
        ))}
      </S.Body>
    </S.CardStyled>
  );
};

export default ChatUsers;
