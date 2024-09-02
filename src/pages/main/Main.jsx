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
import { useEffect, useState } from 'react';
import { supabase } from './../../supabase/supabase';

const Main = () => {
  const [posts, setPosts] = useState([]);
  // 로딩 데이터 상태 관리
  const [loading, setLoading] = useState(true);
  // 현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 하나당 포스트의 개수는 10개인 상수 생성
  const postsPerPage = 10;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 현재 페이지에 해당하는 게시물 계산
  // 1. 현재 페이지의 마지막 게시물 인덱스
  const indexOfLastPost = currentPage * postsPerPage;
  // 2. 현재 페이지의 첫 번째 게시물 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // 3. 현재 페이지에 표시할 게시물 배열
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 하는 함수(페이지 번호 클릭하면 해당 페이지로 이동)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useNavegate 함수를 navigate 변수에 담기
  const navigate = useNavigate();

  // navigate를 사용해서 toWrite를 사용해서 write 페이지로 이동하도록 작성
  const toWrite = () => {
    navigate('/write');
  };

  // navigate를 사용해서 detail 페이지로 이동하도록 작성
  const toDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  // 컴포넌트가 처음 렌더링 될 때, readData함수가 실행되도록 작성
  useEffect(() => {
    readData();
  }, []);

  // Supabase에서 Data를 읽어오는 API 함수 가지고 오기

  const readData = async () => {
    setLoading(true); /* 데이터를 불러올 때 로딩 상태로 전환 */
    const { data: post, error } = await supabase.from('post').select('*');
    console.log(post);
    setPosts(post.reverse());
    setLoading(false); /* 데이터를 로딩 완료 후 로딩 상태 해제 */
  };

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
                  {/* 프로필 이미지를 나타내는 셀 */}
                  <ImageCell>
                    <ProfileImage src={post.thumbnail_url} alt="Profile" />
                  </ImageCell>

                  {/* 게시물 내용을 나타내는 셀 */}
                  <TableData>
                    <ContentContainer>
                      <TitleRow>{post.title}</TitleRow>
                      <SubRow>
                        <span>{post.author_name}</span>
                        <span>{post.date}</span>
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
      {posts.length > 10 && (
        <PaginationContainer>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index + 1}
              onClick={() => paginate(index + 1)} /* 클릭 하면 해당 페이지로 이동 */
              isActive={currentPage === index + 1} /* 현재 페이지는 활성화 상태로 표시 */
            >
              {index + 1} {/* 페이지 번호 */}
            </PageButton>
          ))}
        </PaginationContainer>
      )}
    </BoardContainer>
  );
};

export default Main;
