import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // onChange Function 두개 안만들어도됨 ㅋ
  const onChange = e => {
    const {
      target: { name, defaultValue },
    } = e;
    if (name === 'email') {
      setEmail(defaultValue);
    } else if (name === 'password') {
      setPassword(defaultValue);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name='email' type='text' placeholder='Email' required defaultValue={email} onChange={onChange} />
        <input name='password' type='password' placeholder='Password' required defaultValue={password} onChange={onChange} />
        <input type='submit' defaultValue='로그인' />
      </form>
      <div>
        <button>구글로 로그인하기</button>
        <button>깃허브로 로그인하기</button>
      </div>
    </>
  );
};

export default Auth;
