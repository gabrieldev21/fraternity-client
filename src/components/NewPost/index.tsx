import React, { useState } from 'react';
import sendchat from 'assets/svgs/send-chat.svg';

import * as S from './styleds';

export interface INewPost {
  onSubmit: (text: string) => void;
}

const NewPost = ({ onSubmit }: INewPost) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleHeader>Novo Post</S.TitleHeader>
      </S.Header>
      <S.Content>
        <S.TextArea
          value={text}
          onChange={(evt) => setText(evt.currentTarget.value)}
          onKeyPress={(evt) => evt.ctrlKey && evt.code === 'Enter' && handleSubmit()}
          placeholder="Escreva sua mensagem"
          rows={2}
        />
        <S.ClipBoard />
        <S.IconButton onClick={handleSubmit}>
          <img src={sendchat} alt="" />
        </S.IconButton>
      </S.Content>
    </S.Wrapper>
  );
};

export default NewPost;
