import { useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import { InputContainer } from './LoginInputStyle';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼
  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      Swal.fire({
        text: '아이디, 비밀번호를 확인해주세요!',
        icon: 'error',
        confirmButtonText: '확인'
      });
    } else {
      navigate('/');
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
      <p>계정이 없으신가요?</p>
      <button
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </button>
    </InputContainer>
  );
};

export default LoginInput;
