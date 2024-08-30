import { useState } from 'react';
import { FormContainer } from './SignupInputStyle';
import { supabase } from '../../../supabase/supabase';

// let { data, error } = await supabase.auth.signUp({
//   email: 'someone@email.com',
//   password: 'dRQuNeXFDhRdqAUaZyOQ'
// })

const SignupInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifypssword, Setverifypssword] = useState('');
  const [name, setName] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    if (password !== verifypssword) {
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
          <input
            type="password"
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <p>비밀번호 확인</p>
          <input
            type="password"
            value={verifypssword}
            autoComplete="off"
            onChange={(e) => {
              Setverifypssword(e.target.value);
            }}
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </FormContainer>
  );
};

export default SignupInput;
