import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import { logout } from 'store/modules/user';
import Authenticated from 'components/templates/Authenticated';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <Authenticated>
      <h1>Hello World!!</h1>
      <h1>Hello World!!</h1>

      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Authenticated>
  );
};

export default Home;
