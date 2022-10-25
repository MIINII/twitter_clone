import React, { useState } from 'react';
import { authService } from '../fBase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [err, setErr] = useState('');

  // onChange Function 두개 안만들어도됨 ㅋ
  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      let data;
      // const auth = getAuth();
      if (newAccount) {
        // create account
        data = await createUserWithEmailAndPassword(authService, email, password);
      } else {
        // login
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log('🚀 ⁝ onSubmit ⁝ data', data);
    } catch (err) {
      setErr(err.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name='email' type='text' placeholder='Email' required defaultValue={email} onChange={onChange} />
        <input name='password' type='password' placeholder='Password' required defaultValue={password} onChange={onChange} />
        <input type='submit' value={newAccount ? '새로운 계정 만들기' : '로그인'} />
        {err}
      </form>

      <div>
        <button>구글로 로그인하기</button>
        <button>깃허브로 로그인하기</button>
      </div>
    </>
  );
};

export default Auth;
