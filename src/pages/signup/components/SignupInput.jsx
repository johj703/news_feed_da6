import { useState } from 'react';
import { BackButton, ErrorBox, FormContainer, HeaderContainer, InputContainer, SigninButton } from './SignupInputStyle';
import { supabase } from '../../../supabase/supabase';
import { useNavigate } from 'react-router-dom';
import backBtn from '../../../assets/back-btn.png';
import Swal from 'sweetalert2';

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

    let { error } = await supabase.auth.signUp({
      email: formState.email,
      password: formState.password,
      options: {
        data: {
          display_name: formState.name,
          profile_url: supabase.storage.from('profileImage').getPublicUrl('defaultImage/defaultImage').data.publicUrl
        }
      }
    });
    if (error) {
      if (error.message === 'User already registered') {
        Swal.fire({
          text: '이미 존재하는 이메일입니다!',
          icon: 'error',
          confirmButtonText: '확인'
        });
        return;
      }
    } else {
      Swal.fire({
        text: '회원가입 완료!',
        icon: 'success',
        confirmButtonText: '확인'
      });
      navigate('/login');
    }
  };
  return (
    <FormContainer>
      <HeaderContainer>
        <BackButton
          onClick={() => {
            navigate('/login');
          }}
        >
          <img src={backBtn} alt="뒤로 가기" />
        </BackButton>
        <h1>회원 가입</h1>
      </HeaderContainer>
      <InputContainer onSubmit={handleSignup}>
        <div>
          <span>닉네임</span>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFormState((nameState) => ({ ...nameState, name: e.target.value }))}
          />
        </div>
        <div>
          <span>이메일</span>
          <input type="text" value={formState.email} onChange={handleEmailCheck} />
        </div>
        <ErrorBox>
          <p>{formState.emailError}</p>
        </ErrorBox>
        <div>
          <span>비밀번호</span>
          <input type="password" value={formState.password} autoComplete="off" onChange={passwordCheck} />
        </div>
        <ErrorBox>
          <p>{formState.passwordError}</p>
        </ErrorBox>
        <div>
          <span>비밀번호 확인</span>
          <input type="password" value={formState.verifyPssword} autoComplete="off" onChange={VerifyPasswordCheck} />
          <ErrorBox>
            <p>{formState.verifyPsswordError}</p>
          </ErrorBox>
        </div>
        <SigninButton type="submit">회원가입</SigninButton>
      </InputContainer>
    </FormContainer>
  );
};

export default SignupInput;
