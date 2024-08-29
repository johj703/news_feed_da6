import { useEffect, useRef, useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import { useLocation, useNavigate } from 'react-router-dom';
import { PwdChk } from './MymodifyStyle';

const Mymodify = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [userInfo, setUserInfo] = useState({}); // Input value에 따라 사용자 정보 저장
  const [pwdChk, setPwdChk] = useState('none'); // 비밀번호 안내문구 none/block

  // 인풋 value 변경 저장
  const infoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    });
  };

  // 비밀번호 일치하는지 확인
  const pwdRef = useRef(null);
  const pwdChkRef = useRef(null);
  const chkPwd = () => {
    setPwdChk(pwdRef.current.value !== pwdChkRef.current.value ? 'block' : 'none');
  };

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
    if (pwdRef.current.value !== pwdChkRef.current.value) {
      alert('nono');
      return;
    }
    const { data, error } = await supabase.auth.updateUser({
      data: {
        ...userInfo
      }
    });

    alert('회원 정보가 수정되었습니다.');

    // return navigate('/mypage', { replace: true, state: { redirectedFrom: pathname } });
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
          <input
            id="passWord"
            ref={pwdRef}
            onChange={(e) => {
              infoChange(e);
              chkPwd();
            }}
            type="password"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="pwdChk">비밀번호 확인</label>
          <input id="pwdChk" ref={pwdChkRef} onChange={chkPwd} type="password" autoComplete="off" />
          <PwdChk display={pwdChk}>비밀번호가 일치하지 않습니다.</PwdChk>
        </div>

        <button type="submit" onClick={handleSubmit}>
          회원정보수정
        </button>
      </form>
    </>
  );
};

export default Mymodify;
