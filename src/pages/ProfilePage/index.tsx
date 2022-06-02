import React from 'react';
import { useParams } from 'react-router-dom';

import Profile from 'components/Profile';
import currentUser from './mocksCurrentUser';
import mocksIdUser from './mocksIdUser';

const ProfilePage = () => {
  const { id } = useParams();
  const data = id ? mocksIdUser : currentUser;

  return <Profile {...data} />;
};

export default ProfilePage;
