import { useState } from 'react';
import { FormContainer } from './SignupInputStyle';
import { supabase } from '../../../supabase/supabase';
import { useNavigate } from 'react-router-dom';

// let { data, error } = await supabase.auth.signUp({
//   email: 'someone@email.com',
//   password: 'dRQuNeXFDhRdqAUaZyOQ'
// })

const SignupInput = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [verifyPssword, setverifyPssword] = useState('');
  const [verifyPsswordError, setverifyPsswordError] = useState('');
  const [name, setName] = useState('');

  const strongPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  };

  const passwordCheck = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!strongPassword(newPassword)) {
      setpasswordError(
        '비밀번호는 최소 8자 이상이어야 하며, 문자, 숫자, 특수 문자가 각각 하나 이상 포함되어야 합니다.'
      );
    } else {
      setpasswordError('');
    }
  };

  const VerifyPasswordCheck = (e) => {
    const newVerifyPssword = e.target.value;
    setverifyPssword(newVerifyPssword);

    if (newVerifyPssword !== password) {
      setverifyPsswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setverifyPsswordError('');
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (passwordError || verifyPsswordError) {
      // 둘 다 falsy한 값이 들어왔을 때 넘어갈 수 있다.
      alert('비밀번호를 확인해주세요!');
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
    } else {
      console.log('성공!=>', data);
      navigate('/login');
    }
  };
  return (
    <FormContainer>
      <h1>회원 가입</h1>
      <form onSubmit={handleAdd}>
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
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
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
// on aurthstate change 유저가 무언가 변경하는 상황이 생겼을 때 사용
// user에 권한 바꼇을 때 사용 , 로그인 됨, 로그아웃, 비밀번호 복구, 사용자 정보 업데이트, 세션 토큰?은 나중에 수업
