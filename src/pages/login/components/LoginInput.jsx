import { useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import {
  GithubButton,
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
import Swal from 'sweetalert2';
import GitImg from '../../../assets/github-mark.png';

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
  // Github 로그인
  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        data: {
          profile_url: supabase.storage.from('profileImage').getPublicUrl('defaultImage/defaultImage').data.publicUrl
        }
      }
    });
    if (error) {
      Swal.fire({
        text: 'GitHub 로그인에 실패!',
        icon: 'error',
        confirmButtonText: '확인'
      });
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
      <GithubButton onClick={handleGithubLogin}>
        <img src={GitImg} />
      </GithubButton>
    </InputContainer>
  );
};

export default LoginInput;
