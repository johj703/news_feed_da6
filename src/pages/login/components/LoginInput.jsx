import { useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import { InputContainer } from './LoginInputStyle';

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.log('에러! =>', error);
    } else {
      console.log('로그인 성공! =>', data);
    }
  };

  return (
    <InputContainer>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </InputContainer>
  );
};

export default LoginInput;
