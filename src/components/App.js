import React, { useState } from 'react';
import { ReactDOM } from 'react';
import AppRouter from './Router';
import { authService } from '../fBase';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  // NOTE firebase 공식문서를 보면 currentUser의 기본값은 null
  console.log('🚀 ⁝ App ⁝ authService.currentUser', authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Ntwitter{new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
