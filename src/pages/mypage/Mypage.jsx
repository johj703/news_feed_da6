import { Link, useSearchParams } from 'react-router-dom';
import { InfoBox, MemberInfo, MyArticle, MyBoardList, ProfileImg } from './MypageStyle';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { supabase } from '../../supabase/supabase';

const maxPagingLength = 5; // 한 번에 보여 줄 페이징 개수
const maxBoardLength = 5; // 한 번에 보여 줄 게시글 개수

const initialBoard = {
  data: null,
  length: 1
};

const Mypage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nowBoardPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1; // 현재 게시글 페이징 번호

  const [pageOfPaging, setPageOfPaging] = useState(parseInt(nowBoardPage / maxPagingLength + 1)); // 페이징의 페이지..?

  const [userInfo, setUserInfo] = useState({}); // 사용자 정보
  const [myArticle, setMyArticle] = useState(initialBoard); // 내가 쓴 게시글

  const randomVersionProfile = userInfo.profile_url + '?version=' + crypto.randomUUID(); // 프로필 이미지 캐시이슈로 버전 랜덤으로 추가

  // 유저 정보 가져오기
  useFetch(setUserInfo);

  // 게시글 가져오기
  useEffect(() => {
    const fetchData = async () => {
      // 출력할 게시글 설정
      await supabase
        .from('post')
        .select()
        .eq('email', userInfo.email)
        .then((res) => {
          const length = res.data.length; // 게시글 개수
          const nowListLast = length - maxBoardLength * (nowBoardPage - 1); // 보여질 게시글 마지막 번호
          const nowListStart = nowListLast - maxBoardLength; // 보여질 게시글 시작 번호
          const data = res.data.slice(nowListStart < 0 ? 0 : nowListStart, nowListLast).reverse(); // 최신글이 위로 올라오게 reverse

          return { data, length: Math.ceil(length / maxBoardLength) };
        })
        .then((data) => {
          // 게시글 state에 저장
          data.length !== 0 && setMyArticle(data);
        });
    };
    fetchData();
  }, [userInfo, searchParams]);

  // 페이징 생성하기
  const makePaging = (num) => {
    let page = [];

    let pagingLength = maxPagingLength * num;

    const startPage = 1 + maxPagingLength * (num - 1); // 페이징 시작 번호
    const lastPage = pagingLength > myArticle.length ? myArticle.length : pagingLength; // 페이징 마지막 번호

    for (let i = startPage; i <= lastPage; i++) {
      page.push(
        <Link key={'page' + i} to={`/mypage?page=${i}`}>
          {i}
        </Link>
      );
    }
    return page;
  };

  // 페이징 이전 버튼 클릭 시
  const handleClickPrev = () => {
    if (nowBoardPage === 1) return false;

    if (nowBoardPage % maxPagingLength === 1) {
      setPageOfPaging(pageOfPaging - 1);
    }
    setSearchParams({ page: nowBoardPage - 1 });
  };

  // 페이징 다음 버튼 클릭 시
  const handleClickNext = () => {
    if (nowBoardPage === myArticle.length) return false;
    if (nowBoardPage === maxPagingLength * pageOfPaging) {
      setPageOfPaging(pageOfPaging + 1);
    }

    setSearchParams({ page: nowBoardPage + 1 });
  };

  return (
    <div>
      Mypage
      {/* 회원 프로필 영역 */}
      <InfoBox>
        <ProfileImg>
          <img src={randomVersionProfile} alt="" />
        </ProfileImg>

        <MemberInfo>
          <h4 className="name">{userInfo.display_name}</h4>
          <span className="email">{userInfo.email}</span>
        </MemberInfo>

        <Link to="/mypage/mymodify">회원정보 수정</Link>
      </InfoBox>
      {/* 내가 작성한 게시글 */}
      {myArticle.data && (
        <>
          <MyBoardList>
            {myArticle.data.map((item) => {
              const detailLink = `/detail/${item.uuid}`;
              return (
                <Link to={detailLink} key={item.uuid}>
                  <MyArticle>{item.title}</MyArticle>
                </Link>
              );
            })}
          </MyBoardList>
          <div className="paging">
            <div onClick={handleClickPrev}>이전</div>
            {makePaging(pageOfPaging)}
            <div onClick={handleClickNext}>다음</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Mypage;
