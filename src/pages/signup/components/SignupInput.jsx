import { useState } from 'react';
import { FormContainer, InputContainer, SigninButton } from './SignupInputStyle';
import { supabase } from '../../../supabase/supabase';
import { useNavigate } from 'react-router-dom';

const SignupInput = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    verifyPssword: '',
    verifyPsswordError: '',
    name: ''
  });

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
    setFormState((emailState) => ({
      ...emailState,
      email: newEmail,
      emailError: validateEmail(newEmail) ? '' : '이메일 형식으로 작성해주세요!'
    }));
  };

  // 패스워드를 입력받고 유효성 검사 함수
  const passwordCheck = (e) => {
    const newPassword = e.target.value;
    setFormState((passwordState) => ({
      ...passwordState,
      password: newPassword,
      passwordError: strongPassword(newPassword)
        ? ''
        : '비밀번호는 최소 8자 이상이어야 하며, 문자, 숫자, 특수 문자가 각각 하나 이상 포함되어야 합니다.'
    }));
  };

  // 입력한 패스워드 다시 확인하는 함수
  const VerifyPasswordCheck = (e) => {
    const newVerifyPssword = e.target.value;
    const newPassword = formState.password;
    setFormState((verifyPsswordState) => ({
      ...verifyPsswordState,
      verifyPssword: newVerifyPssword,
      verifyPsswordError: newVerifyPssword === newPassword ? '' : '비밀번호가 일치하지 않습니다.'
    }));
  };

  // 회원가입 버튼
  const handleSignup = async (e) => {
    e.preventDefault();

    if (formState.emailError || formState.passwordError || formState.verifyPsswordError) {
      // 셋 다 falsy한 값이 들어왔을 때 넘어갈 수 있다.(유효성 검사가 OK되면 회원가입 가능)
      alert('입력한 정보를 다시 확인해주세요!');
      return;
    }

    let { data, error } = await supabase.auth.signUp({
      email: formState.email,
      password: formState.password,
      options: {
        data: {
          display_name: formState.name,
          profile_url: null
        }
      }
    });
    if (error) {
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
      <InputContainer onSubmit={handleSignup}>
        <div>
          <span>이름</span>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFormState((nameState) => ({ ...nameState, name: e.target.value }))}
          />
        </div>
        <div>
          <span>아이디</span>
          <input type="text" value={formState.email} onChange={handleEmailCheck} />
          <p>{formState.emailError}</p>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" value={formState.password} autoComplete="off" onChange={passwordCheck} />
          <p>{formState.passwordError}</p>
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input type="password" value={formState.verifyPssword} autoComplete="off" onChange={VerifyPasswordCheck} />
          <p>{formState.verifyPsswordError}</p>
        </div>
        <SigninButton type="submit">가입하기</SigninButton>
      </InputContainer>
    </FormContainer>
  );
};

export default SignupInput;