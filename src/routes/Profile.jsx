import React from 'react';
import { authService } from './../fBase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const onLogOut = () => authService.signOut();

  return (
    <>
      <span onClick={navigate('/profile')}>Profile</span>
      <button onClick={onLogOut}>๋ก๊ทธ์์</button>
    </>
  );
};

export default Profile;
