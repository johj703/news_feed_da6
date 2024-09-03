import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import { Link, useSearchParams } from 'react-router-dom';
import { BlankBoard, MyArticle, MyBoardList, Paging } from '../MypageStyle';

import prev from '../../../assets/prev.png';
import next from '../../../assets/next.png';

const maxPagingLength = 5; // 한 번에 보여 줄 페이징 개수
const maxBoardLength = 8; // 한 번에 보여 줄 게시글 개수

const initialBoard = {
  data: null,
  length: 1
};

const MyBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nowBoardPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1; // 현재 게시글 페이징 번호

  const [pageOfPaging, setPageOfPaging] = useState(parseInt(nowBoardPage / maxPagingLength + 1)); // 페이징의 페이지..?

  const [myArticle, setMyArticle] = useState(initialBoard); // 내가 쓴 게시글

  const getUserData = JSON.parse(localStorage.getItem('userData'));
  const userInfo = getUserData?.user_metadata;

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
    getUserData && fetchData();
  }, [searchParams]);

  // 페이징 생성하기
  const makePaging = (num) => {
    let page = [];

    let pagingLength = maxPagingLength * num;

    const startPage = 1 + maxPagingLength * (num - 1); // 페이징 시작 번호
    const lastPage = pagingLength > myArticle.length ? myArticle.length : pagingLength; // 페이징 마지막 번호

    for (let i = startPage; i <= lastPage; i++) {
      page.push(
        <Link
          key={'page' + i}
          to={`/mypage?page=${i}`}
          onClick={() => {
            sessionStorage.setItem('myBoard', i);
          }}
          className={nowBoardPage === i ? 'nowPage' : undefined}
        >
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
    <>
      {myArticle.data && (
        <>
          <MyBoardList>
            {myArticle.data.map((item) => {
              const detailLink = `/detail/${item.uuid}`;
              return (
                <MyArticle key={item.uuid}>
                  <Link to={detailLink}>{item.title}</Link>
                </MyArticle>
              );
            })}
          </MyBoardList>

          <Paging>
            <div className="prev" onClick={handleClickPrev}>
              <img src={prev} alt="이전 버튼" />
            </div>
            {makePaging(pageOfPaging)}
            <div className="next" onClick={handleClickNext}>
              <img src={next} alt="다음 버튼" />
            </div>
          </Paging>
        </>
      )}
    </>
  );
};
export default MyBoard;
