import { Link } from 'react-router-dom';
import { InfoBox, MemberInfo, MyArticle, MyBoardList, ProfileImg } from './MypageStyle';
import { useState } from 'react';
import useFetch from './useFetch';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({});
  const randomVersionProfile = userInfo.profile_url + '?version=' + crypto.randomUUID();

  // 유저 정보 가져오기
  useFetch(setUserInfo);

  return (
    <div>
      Mypage
      {/* 회원 프로필 영역 */}
      <InfoBox>
        <ProfileImg>
          <img src={randomVersionProfile} alt="" />
        </ProfileImg>

        <MemberInfo>
          <h4 className="name">{userInfo.user_name}</h4>
          <span className="email">{userInfo.email}</span>
        </MemberInfo>

        <Link to="/mypage/mymodify">회원정보 수정</Link>
      </InfoBox>
      {/* 내가 작성한 게시글 */}
      <MyBoardList>
        <MyArticle></MyArticle>
      </MyBoardList>
    </div>
  );
};

export default Mypage;
