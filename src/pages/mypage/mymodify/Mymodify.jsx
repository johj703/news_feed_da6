import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../../supabase/supabase';
import { PasswordChk } from './MymodifyStyle';
import useFetch from '../useFetch';

const Mymodify = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [userInfo, setUserInfo] = useState({}); // Input value에 따라 사용자 정보 저장
  const [passwordChk, setPasswordChk] = useState(false); // 비밀번호 안내문구 none/block
  const [profileImage, setProfileImage] = useState(null);

  // 유저 정보 가져오기
  useFetch(setUserInfo);

  // 비밀번호 유효성검사 규칙 (8글자 이상, 영문, 숫자, 특수문자 사용)
  const passwordRules = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  };

  // 인풋 value 변경 저장
  const infoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    });

    // 비밀번호 유효성검사
    if (!passwordRules(passwordRef.current.value)) {
      return setPasswordChk('공백없이 8글자 이상, 영문, 숫자, 특수문자(@$!%*#?&)를 사용해주세요.');
    } else if (passwordRef.current.value !== passwordChkRef.current.value) {
      return setPasswordChk('비밀번호가 일치하지 않습니다.');
    }

    setPasswordChk(false);
  };

  // 비밀번호 일치하는지 확인
  const passwordRef = useRef(null);
  const passwordChkRef = useRef(null);

  // Form 엔터로 Submit 전송되는거 방지
  const dependSubmit = (e) => {
    e.preventDefault();
    return false;
  };

  // 이미지 등록 했을 때
  const changeImage = async (e) => {
    setProfileImage(e.target.files[0]);

    // new_profile_url에 이미지 업로드
    await supabase.storage
      .from('profileImage')
      .upload(`${userInfo.email}/new_profile_url`, e.target.files[0], {
        cacheControl: '10',
        upsert: true
      })
      .then(() => {
        //new_profile_url 이미지 가져오기
        const { data } = supabase.storage.from('profileImage').getPublicUrl(`${userInfo.email}/new_profile_url`);

        setUserInfo({
          ...userInfo,
          profile_url: data.publicUrl
        });
      });
  };

  // 이미지 삭제
  const handleResetProfile = () => {
    const { data } = supabase.storage.from('profileImage').getPublicUrl('defaultImage/defaultImage');

    setUserInfo({
      ...userInfo,
      profile_url: data.publicUrl
    });
  };

  // 수정 완료 버튼 클릭 이벤트
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordChk) {
      // 유효성검사 실행
      alert('nono');
      return;
    }

    // 프로필 이미지 업로드
    if (profileImage) {
      await supabase.storage.from('profileImage').upload(`${userInfo.email}/profile_url`, profileImage, {
        cacheControl: '10',
        upsert: true
      });
    }

    // 유저 정보 업데이트
    await supabase.auth.updateUser({
      ...(passwordRef.current.value.length !== 0 && { password: passwordRef.current.value }),
      email: userInfo.email,
      data: {
        user_name: userInfo.user_name,
        profile_url: userInfo.profile_url
      }
    });

    alert('회원 정보가 수정되었습니다.');

    return navigate('/mypage', { replace: true, state: { redirectedFrom: pathname } });
  };

  return (
    <>
      <form onSubmit={dependSubmit}>
        <div>
          <img src={userInfo.profile_url + '?version=' + crypto.randomUUID()} alt="" />
          <input type="file" id="file" name="file" onChange={(e) => changeImage(e)} />
          <button onClick={handleResetProfile}>이미지 삭제</button>
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
          <span>변경하실 이메일에서, 확인 메일을 확인해주세요.</span>
        </div>

        <div>
          <label htmlFor="passWord">비밀번호</label>
          <input id="passWord" ref={passwordRef} onChange={infoChange} type="password" autoComplete="off" />
          {passwordChk && <PasswordChk>{passwordChk}</PasswordChk>}
        </div>

        <div>
          <label htmlFor="passwordChk">비밀번호 확인</label>
          <input id="passwordChk" ref={passwordChkRef} onChange={infoChange} type="password" autoComplete="off" />
        </div>

        <button type="submit" onClick={handleSubmit}>
          회원정보수정
        </button>
      </form>
    </>
  );
};

export default Mymodify;
