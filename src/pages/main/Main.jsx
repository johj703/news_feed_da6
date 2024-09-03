import { useNavigate } from 'react-router-dom';
import {
  BoardContainer,
  ImageCell,
  Table,
  TableRow,
  Button,
  PaginationContainer,
  PageButton,
  ButtonContainer,
  ProfileImage,
  TableData,
  ContentContainer,
  TitleRow,
  SubRow
} from './MainStyle';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from './../../supabase/supabase';
import noImage from '../../assets/no-image.png';

const Main = () => {
  // 게시물 데이터, 로딩 상태, 페이지 번호, 현재 페이지 그룹 번호 state 관리
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 하나당 포스트의 개수는 10개인 상수 생성, 한 번에 보여줄 페이지 버튼 상수 생성
  const postsPerPage = 10;
  const pagesPerGroup = 10;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 현재 페이지에 해당하는 게시물 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // 현재 페이지에 표시할 게시물 배열
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 현재 페이지 그룹 계산
  const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup);
  const startPage = currentGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  // 페이지 변경 하는 함수(페이지 번호 클릭하면 해당 페이지로 이동)
  const paginate = (pageNumber) => {
    sessionStorage.setItem('mainPage', pageNumber);
    setCurrentPage(pageNumber);
  };

  // 이전 페이지 그룹으로 이동
  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentPage(startPage - 1);
    }
  };

  // 다음 페이지 그룹으로 이동
  const handleNextGroup = () => {
    if (endPage < totalPages) {
      setCurrentPage(endPage + 1);
    }
  };

  const navigate = useNavigate();

  // navigate를 사용해서 write 페이지로 이동하도록 작성
  const toWrite = () => {
    navigate('/write');
  };

  // navigate를 사용해서 detail 페이지로 이동하도록 작성
  const toDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const nowPage = sessionStorage.getItem('mainPage');
  //nowPage && setCurrentPage(nowPage);
  useEffect(() => {
    nowPage ? setCurrentPage(Number(nowPage)) : setCurrentPage(1);
  }, [nowPage]);

  // 컴포넌트가 처음 렌더링 될 때, readData함수가 실행되도록 작성
  useEffect(() => {
    readData();
  }, []);

  // Supabase에서 Data를 읽어오는 API 함수 가지고 오기
  const readData = async () => {
    setLoading(true); /* 데이터를 불러올 때 로딩 상태로 전환 */
    const { data: post, error } = await supabase.from('post').select('*').order('created_at', { ascending: false });
    if (error) {
      console.error(error);
      return;
    }
    setPosts(post);
    setLoading(false);
  };

  const creationTimeConverter = useCallback((time) => {
    return new Date(time).toLocaleString();
  }, []);

  return (
    <BoardContainer>
      {loading ? (
        <p>Loading 중 입니다</p>
      ) : (
        <Table>
          <tbody>
            {/* 현재 페이지에 해당하는 게시물들을 테이블 행으로 표시 */}
            {currentPosts.map((post) => {
              return (
                <TableRow key={post.uuid} onClick={() => toDetail(post.uuid)}>
                  {/* 썸네일 나타내는 셀 */}
                  <ImageCell>
                    <ProfileImage src={post.thumbnail_url ?? noImage} alt="Profile" />
                  </ImageCell>

                  {/* 게시물 내용을 나타내는 셀 */}
                  <TableData>
                    <ContentContainer>
                      <TitleRow>{post.title}</TitleRow>
                      <SubRow>
                        <span>{post.author_name}</span>
                        <span>
                          {post.updated_at
                            ? creationTimeConverter(post.updated_at)
                            : creationTimeConverter(post.created_at)}
                        </span>
                      </SubRow>
                    </ContentContainer>
                  </TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      )}
      <ButtonContainer>
        <Button onClick={toWrite}>글쓰기</Button>
      </ButtonContainer>
      {/* 게시물이 10개 이상일 때 페이지네이션을 렌더링 */}
      {posts.length > postsPerPage && (
        <PaginationContainer>
          <PageButton onClick={handlePrevGroup} disabled={currentGroup === 0}>
            &lt; {/* 왼쪽 화살표 */}
          </PageButton>
          {[...Array(endPage - startPage + 1)].map((_, index) => {
            const pageNumber = startPage + index;
            return (
              <PageButton
                key={pageNumber}
                onClick={() => paginate(pageNumber)} /* 클릭 하면 해당 페이지로 이동 */
                $isActive={currentPage === pageNumber} /* 현재 페이지는 활성화 상태로 표시 */
              >
                {pageNumber} {/* 페이지 번호 */}
              </PageButton>
            );
          })}
          <PageButton onClick={handleNextGroup} disabled={endPage === totalPages}>
            &gt; {/* 오른쪽 화살표 */}
          </PageButton>
        </PaginationContainer>
      )}
    </BoardContainer>
  );
};

export default Main;
