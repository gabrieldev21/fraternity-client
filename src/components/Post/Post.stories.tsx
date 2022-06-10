import React from 'react';
import Post from '.';

export default {
  title: 'Feed/Post',
  component: Post,
};
const user = {
  photo:
    'https://media-exp1.licdn.com/dms/image/C4D03AQF56johHTDiXg/profile-displayphoto-shrink_800_800/0/1652218834579?e=1659571200&v=beta&t=KPK-rCPJJegCU-SChkuIyqz_Bdujo072CX3COBhOT48',
  name: 'Gabriel Pereira',
  role: 'Estudante',
};

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const media =
  'https://scontent.fgig4-1.fna.fbcdn.net/v/t39.30808-6/286593930_10158357131367471_7318342332042482261_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2c4854&_nc_eui2=AeGLoc7mgUsjH9KZ4HHjPYxvLzt5ZoYD_I0vO3lmhgP8jQWvVVNxYtXKW0BfBPFt6qjWbEx5x7wVC1-9p_VH0Wgo&_nc_ohc=lP-Z3bWXo5QAX8JEg84&_nc_ht=scontent.fgig4-1.fna&oh=00_AT8uNfCSjcNKMu9BcxXeobWqEgnGFh0Hc1hCnD-5-ExVAw&oe=62A77A3F';

export const PostComponent = () => {
  return (
    <div style={{ padding: 30, background: 'rgb(41, 45, 56)' }}>
      <Post likes={12} comments={7} user={user} content={{ text, media }} />
    </div>
  );
};

export const PostText = () => {
  return (
    <div style={{ padding: 30, background: 'rgb(41, 45, 56)' }}>
      <Post likes={12} comments={7} user={user} content={{ text }} />
    </div>
  );
};

export const PostMedia = () => {
  return (
    <div style={{ padding: 30, background: 'rgb(41, 45, 56)' }}>
      <Post likes={12} comments={7} user={user} content={{ media }} />
    </div>
  );
};
