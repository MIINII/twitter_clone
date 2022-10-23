import React, { useState } from 'react';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Home from '../routes/Home';
import Auth from '../routes/Auth';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLoggedIn? (<Home />): <Auth/>} />
      </Routes>
    </BrowserRouter>
  );
};      

export default AppRouter;
