import { useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import {
  InputContainer,
  Title,
  LoginForm,
  InputWrapper,
  Input,
  LoginButton,
  JoinButton,
  JoinGuide
} from './LoginInputStyle';
import { useNavigate } from 'react-router-dom';

const LoginInput = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼
  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      alert('아이디, 비밀번호를 확인해주세요!');
    } else {
      navigate('/');
    }
  };

  return (
    <InputContainer>
      <Title>로그인</Title>

      <LoginForm onSubmit={handleLogin}>
        <InputWrapper>
          <label htmlFor="">이메일</label>
          <Input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">비밀번호</label>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputWrapper>
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
      <JoinButton
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </JoinButton>

      <JoinGuide>SNS 로그인</JoinGuide>
    </InputContainer>
  );
};

export default LoginInput;
