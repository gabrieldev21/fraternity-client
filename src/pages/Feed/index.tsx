import React, { useState } from 'react';
import Authenticated from 'components/templates/Authenticated';
import NewPost from 'components/NewPost';
import Post, { PostProps } from 'components/Post';
import { RootStateOrAny, useSelector } from 'react-redux';

import { posts } from './mocks';
import * as S from './styled';

interface IMyPost extends PostProps {
  id: string;
}

const Feed = () => {
  const { photo, role, name } = useSelector((state: RootStateOrAny) => state.user);
  const [myPosts, setMyPosts] = useState<IMyPost[]>([]);

  const handleSubmit = (text: string) => {
    setMyPosts([
      {
        id: `${posts.length + myPosts.length + 1}`,
        comments: 0,
        likes: 0,
        content: { text },
        user: { name, photo, role },
      },
      ...myPosts,
    ]);
  };

  return (
    <Authenticated>
      <S.Container>
        <NewPost onSubmit={handleSubmit} />
        {[...myPosts, ...posts].map(({ id, ...post }) => (
          <Post key={id} {...post} />
        ))}
      </S.Container>
    </Authenticated>
  );
};

export default Feed;
