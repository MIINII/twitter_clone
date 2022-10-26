import React, { useState } from 'react';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Profile from 'routes/Profile';

const AppRouter = ({ isLoggedIn }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Home /> : <Auth />} />
        <Route path='/profile' element={isLoggedIn ? <Profile /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
