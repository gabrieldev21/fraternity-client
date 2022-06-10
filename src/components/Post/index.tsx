import React, { useState } from 'react';
import menuIcon from 'assets/svgs/menu-post.svg';
import Like from 'components/SVG/Like';
import Comment from 'components/SVG/Comment';
import Share from 'components/SVG/Share';

import * as S from './styleds';

export interface PostProps {
  likes: number;
  comments: number;
  user: { photo: string, name: string, role: string };
  content: { text?: string, media?: string };
}

const Post = ({ likes, comments, user, content }: PostProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <S.Wrapper>
      <S.Header>
        <img src={menuIcon} alt="menu post" />
      </S.Header>
      <S.Content>
        <S.UserContainer>
          <S.Avatar src={user.photo} />
          <div>
            <S.Name>{user.name}</S.Name>
            <S.Role>{user.role}</S.Role>
          </div>
        </S.UserContainer>
        {content.text && <S.TextContent>{content.text}</S.TextContent>}
        {content.media && <S.MediaContent src={content.media} />}
      </S.Content>
      <S.Footer>
        <S.ItemLeft onClick={() => setLiked(!liked)} isActive={liked}>
          <Like />
          <span>{likes + (liked ? 1 : 0)}</span>
        </S.ItemLeft>
        <S.ItemLeft>
          <Comment />
          <span>{comments}</span>
        </S.ItemLeft>
        <S.ItemRight>
          <Share />
          <span>Compartilhar</span>
        </S.ItemRight>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Post;
