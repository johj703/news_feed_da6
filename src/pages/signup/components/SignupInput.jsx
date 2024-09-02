import { useState } from 'react';
import { FormContainer } from './SignupInputStyle';
import { supabase } from '../../../supabase/supabase';
import { useNavigate } from 'react-router-dom';

const SignupInput = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifyPssword, setVerifyPssword] = useState('');
  const [verifyPsswordError, setVerifyPsswordError] = useState('');
  const [name, setName] = useState('');

  // 이메일 형식으로 아이디가 작성됐는지 확인
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // 비밀번호 유효성 검사
  const strongPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  };

  // 이메일을 입력받고 유효성 검사 함수
  const handleEmailCheck = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 인라인으로 알려줄 부분
    if (!validateEmail(newEmail)) {
      setEmailError('이메일 형식으로 작성해주세요!');
    } else {
      setEmailError('');
    }
  };

  // 패스워드를 입력받고 유효성 검사 함수
  const passwordCheck = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 인라인으로 알려줄 부분
    if (!strongPassword(newPassword)) {
      setPasswordError(
        '비밀번호는 최소 8자 이상이어야 하며, 문자, 숫자, 특수 문자가 각각 하나 이상 포함되어야 합니다.'
      );
    } else {
      setPasswordError('');
    }
  };

  // 입력한 패스워드 다시 확인하는 함수
  const VerifyPasswordCheck = (e) => {
    const newVerifyPssword = e.target.value;
    setVerifyPssword(newVerifyPssword);

    // 인라인으로 알려줄 부분
    if (newVerifyPssword !== password) {
      setVerifyPsswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setVerifyPsswordError('');
    }
  };

  // 회원가입 버튼
  const handleSignup = async (e) => {
    e.preventDefault();

    if (emailError || passwordError || verifyPsswordError) {
      // 셋 다 falsy한 값이 들어왔을 때 넘어갈 수 있다.(유효성 검사가 OK되면 회원가입 가능)
      alert('입력한 정보를 다시 확인해주세요!');
      return;
    }

    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          profile_url: null
        }
      }
    });
    if (error) {
      console.log('에러 =>', error);
      if (error.message === 'User already registered') {
        alert('이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요!');
        return;
      }
    } else {
      console.log('성공!=>', data);
      navigate('/login');
    }
  };
  return (
    <FormContainer>
      <h1>회원 가입</h1>
      <form onSubmit={handleSignup}>
        <div>
          <p>이름</p>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <p>아이디</p>
          <input type="text" value={email} onChange={handleEmailCheck} />
          <p>{emailError}</p>
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" value={password} autoComplete="off" onChange={passwordCheck} />
          <p>{passwordError}</p>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <input type="password" value={verifyPssword} autoComplete="off" onChange={VerifyPasswordCheck} />
          <p>{verifyPsswordError}</p>
        </div>
        <button type="submit">가입하기</button>
      </form>
    </FormContainer>
  );
};

export default SignupInput;
