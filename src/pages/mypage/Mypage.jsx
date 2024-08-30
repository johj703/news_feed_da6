import { Link } from 'react-router-dom';
import { InfoBox, MemberInfo, MyArticle, MyBoardList, ProfileImg } from './MypageStyle';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { supabase } from '../../supabase/supabase';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [myArticle, setMyArticle] = useState([]);
  const randomVersionProfile = userInfo.profile_url + '?version=' + crypto.randomUUID();

  // 유저 정보 가져오기
  useFetch(setUserInfo);

  // 게시글 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('post').select().eq('email', 'cj8928@gmail.com');

      setMyArticle(data);
    };
    fetchData();
  }, []);

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
        {myArticle.map((item) => {
          return <MyArticle key={item.uuid}>{item.title}</MyArticle>;
        })}
      </MyBoardList>
    </div>
  );
};

export default Mypage;
