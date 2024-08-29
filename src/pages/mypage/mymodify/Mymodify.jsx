import { useEffect, useRef, useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import { useLocation, useNavigate } from 'react-router-dom';
import { PwdChk } from './MymodifyStyle';

const Mymodify = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [userInfo, setUserInfo] = useState({}); // Input value에 따라 사용자 정보 저장
  const [pwdChk, setPwdChk] = useState(false); // 비밀번호 안내문구 none/block

  // 비밀번호 규칙 유효성검사 (8글자 이상, 영문, 숫자, 특수문자 사용)
  const strongPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  };

  // 인풋 value 변경 저장
  const infoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    });

    if (!strongPassword(pwdRef.current.value)) {
      return setPwdChk('공백없이 8글자 이상, 영문, 숫자, 특수문자(@$!%*#?&)를 사용해주세요.');
    } else if (pwdRef.current.value !== pwdChkRef.current.value) {
      return setPwdChk('비밀번호가 일치하지 않습니다.');
    }

    setPwdChk(false);
  };

  // 비밀번호 일치하는지 확인
  const pwdRef = useRef(null);
  const pwdChkRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // 로그인 유저 정보 가져오기
      const {
        data: { user }
      } = await supabase.auth.getUser();

      // 비로그인시에 로그인페이지로 이동
      if (!user) {
        return navigate('/login', { replace: true, state: { redirectedFrom: pathname } });
      }

      // 로그인 회원 정보 받아와서 useState에 저장
      const userMetaData = user.user_metadata;
      setUserInfo({
        user_name: userMetaData.user_name,
        email: userMetaData.email,
        profile_url: userMetaData.profile_url
      });
    };

    fetchData();
  }, []);

  const dependSubmit = (e) => {
    e.preventDefault();
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pwdChk) {
      alert('nono');
      return;
    }
    const { data, error } = await supabase.auth.updateUser({
      password: pwdRef.current.value,
      data: {
        ...userInfo
      }
    });

    alert('회원 정보가 수정되었습니다.');

    //return navigate('/mypage', { replace: true, state: { redirectedFrom: pathname } });
  };

  return (
    <>
      <form onSubmit={dependSubmit}>
        <div>
          <img src="" alt="" /> <button>이미지 등록</button> <button>이미지 삭제</button>
        </div>
        <div>
          <label htmlFor="user_name">이름</label>
          <input id="user_name" type="text" onChange={infoChange} value={userInfo.user_name || ''} />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            required
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            onChange={infoChange}
            value={userInfo.email || ''}
          />
        </div>
        <div>
          <label htmlFor="passWord">비밀번호</label>
          <input id="passWord" ref={pwdRef} onChange={infoChange} type="password" autoComplete="off" />
          {pwdChk && <PwdChk>{pwdChk}</PwdChk>}
        </div>
        <div>
          <label htmlFor="pwdChk">비밀번호 확인</label>
          <input id="pwdChk" ref={pwdChkRef} onChange={infoChange} type="password" autoComplete="off" />
        </div>

        <button type="submit" onClick={handleSubmit}>
          회원정보수정
        </button>
      </form>
    </>
  );
};

export default Mymodify;
