import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/Button';
import { logout } from 'store/modules/user';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello World!!</h1>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  );
};

export default Home;
