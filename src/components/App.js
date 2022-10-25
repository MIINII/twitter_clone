import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import AppRouter from './Router';
import { authService } from '../fBase';
import { initializeApp } from 'firebase/app';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // NOTE firebase 공식문서를 보면 currentUser의 기본값은 null
  console.log('🚀 ⁝ App ⁝ authService.currentUser', authService.currentUser);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "초기화하는중..."}
      <footer>&copy; Ntwitter{new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
