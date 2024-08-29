import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase';
import { InfoBox, MemberInfo, MyArticle, MyBoardList, ProfileImg } from './MypageStyle';
import { useEffect, useState } from 'react';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      // 테스트계정 로그인을 위한 소스
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'test@test.com',
        password: '1q2w3e4r%'
      });

      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        return navigate('/login', { replace: true, state: { redirectedFrom: pathname } });
      }

      const userMetaData = user.user_metadata;
      setUserInfo({
        user_name: userMetaData.user_name,
        email: userMetaData.email,
        profile_url: userMetaData.profile_url
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      Mypage
      {/* 회원 프로필 영역 */}
      <InfoBox>
        <ProfileImg>
          <img
            src={
              userInfo.profile_url === ''
                ? 'https://png.pngtree.com/png-clipart/20230917/original/pngtree-succulent-plant-icon-design-vector-png-image_12286228.png'
                : userInfo.profile_url
            }
            alt=""
          />
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
