import { Link, useNavigate } from 'react-router-dom';
import { BoardArea, BoardTab, InfoBox, MemberInfo, MyPageWrap, ProfileImg } from './MypageStyle';

import BookMark from './board/BookMark';
import { useEffect, useState } from 'react';
import MyBoard from './board/MyBoard';

const Mypage = () => {
  const navigate = useNavigate();

  const [showBoard, setShowBoard] = useState(<MyBoard />);

  const getUserData = JSON.parse(localStorage.getItem('userData'));
  const userInfo = getUserData?.user_metadata;
  const randomVersionProfile = userInfo?.profile_url ?? userInfo?.avatar_url; // 프로필 이미지 캐시이슈로 버전 랜덤으로 추가

  useEffect(() => {
    if (!getUserData) {
      return navigate('/login', { replace: true });
    }
  }, []);

  const handleMyBoard = () => {
    setShowBoard(<MyBoard />);
    let nowPage = sessionStorage.getItem('myBoard') ?? 1;
    navigate('/mypage?page=' + nowPage);
  };
  const handleBookMark = () => {
    setShowBoard(<BookMark />);
    let nowPage = sessionStorage.getItem('bookMark') ?? 1;
    navigate('/mypage?page=' + nowPage);
  };

  return (
    <MyPageWrap>
      {/* 회원 프로필 영역 */}
      <InfoBox>
        <ProfileImg>
          <img src={randomVersionProfile} alt="" />
        </ProfileImg>

        <MemberInfo>
          <h4 className="name">{userInfo?.display_name}</h4>
          <span className="email">email : {userInfo?.email}</span>
        </MemberInfo>

        <Link to="/mypage/mymodify">회원정보 수정</Link>
      </InfoBox>

      <BoardArea>
        <BoardTab className={showBoard.type.name === 'BookMark' && 'bookmark'}>
          <span
            onClick={() => {
              handleMyBoard();
            }}
          >
            내가 작성한 게시글
          </span>
          <span
            onClick={() => {
              handleBookMark();
            }}
          >
            북마크 게시글
          </span>
        </BoardTab>

        {showBoard}
      </BoardArea>
    </MyPageWrap>
  );
};

export default Mypage;
