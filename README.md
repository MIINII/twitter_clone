# 🕊 Twitter Clone

## 01. Create Account

```jsx
// Auth.jsx
import { authService } from '../fBase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

try {
  let data;
  if (newAccount) {
    // create account
    data = await createUserWithEmailAndPassword(authService, email, password);
  } else {
    // login
    data = await signInWithEmailAndPassword(authService, email, password);
  }
  console.log('🚀 ⁝ onSubmit ⁝ data', data);
} catch (err) {
  console.log('🚀 ⁝ onSubmit ⁝ err', err);
}
```

### **Persistence**

> 사용자들을 어떻게 기억할지 선택하게 해줌

- `local` : 브라우저를 닫더라도 사용자 정보가 기억됨 -> 초기값
- `session` : 브라우저가 열려있는 동안만 사용자 정보를 기억
- `none` : 유저 기억안함 ㅋ (리프레시하면 로그아웃)

어플리케이션이 로드 될때 firebase는 사용자가 로그인 되었는지 아닌지를 기다릴 시간이 읎음 -> **어플리케이션이 시작되면 바로 로그아웃됨 **
