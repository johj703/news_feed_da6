import { useNavigate } from 'react-router-dom';
import {
  BoardContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  Button,
  PaginationContainer,
  PageButton,
  ButtonContainer
} from './MainStyle';
import { useEffect, useState } from 'react';
import { supabase } from './../../supabase/supabase';

const Main = () => {
  const [posts, setPosts] = useState([]);

  // 하드코딩 한 데이터들
  // const posts = [
  //   {
  //     id: 1,
  //     title: '첫 번째 게시물',
  //     content: '이건 첫 번째 게시물의 내용입니다!',
  //     author: '이상해씨',
  //     date: '24-08-30'
  //   },
  //   {
  //     id: 2,
  //     title: '두 번째 게시물',
  //     content: '이건 두 번째 게시물의 내용입니다!',
  //     author: '파이리',
  //     date: '24-08-30'
  //   },
  //   {
  //     id: 3,
  //     title: '세 번째 게시물',
  //     content: '이건 세 번째 게시물의 내용입니다!',
  //     author: '꼬북이',
  //     date: '24-08-30'
  //   },
  //   {
  //     id: 4,
  //     title: '네 번째 게시물',
  //     content: '이건 네 번째 게시물의 내용입니다!',
  //     author: '캐터피',
  //     date: '24-08-30'
  //   },
  //   {
  //     id: 5,
  //     title: '다섯 번째 게시물',
  //     content: '이건 다섯 번째 게시물의 내용입니다!',
  //     author: '뿔충이',
  //     date: '24-08-30'
  //   },
  //   {
  //     id: 6,
  //     title: '여섯 번째 게시물',
  //     content: '이건 여섯 번째 게시물의 내용입니다!',
  //     author: '구구',
  //     date: '24-08-30'
  //   },
  //   {
  //     id: 7,
  //     title: '일곱 번째 게시물',
  //     content: '이건 일곱 번째 게시물의 내용입니다!',
  //     author: '꼬렛',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 8,
  //     title: '여덟 번째 게시물',
  //     content: '이건 여덟 번째 게시물의 내용입니다!',
  //     author: '깨비참',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 9,
  //     title: '아홉 번째 게시물',
  //     content: '이건 아홉 번째 게시물의 내용입니다!',
  //     author: '아보',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 10,
  //     title: '열 번째 게시물',
  //     content: '이건 열 번째 게시물의 내용입니다!',
  //     author: '피카츄',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 11,
  //     title: '열 한 번째 게시물',
  //     content: '이건 열 한 번째 게시물의 내용입니다!',
  //     author: '모래두지',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 12,
  //     title: '열 두 번째 게시물',
  //     content: '이건 열 두 번째 게시물의 내용입니다!',
  //     author: '니드런(암)',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 13,
  //     title: '열 세 번째 게시물',
  //     content: '이건 열 세 번째 게시물의 내용입니다!',
  //     author: '니드런(수)',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 14,
  //     title: '열 네 번째 게시물',
  //     content: '이건 열 네 번째 게시물의 내용입니다!',
  //     author: '삐삐',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 15,
  //     title: '열 다섯 번째 게시물',
  //     content: '이건 열 다섯 번째 게시물의 내용입니다!',
  //     author: '식스테일',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 16,
  //     title: '열 여섯 번째 게시물',
  //     content: '이건 열 여섯 번째 게시물의 내용입니다!',
  //     author: '푸린',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 17,
  //     title: '열 일곱 번째 게시물',
  //     content: '이건 열 일곱 번째 게시물의 내용입니다!',
  //     author: '주뱃',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 18,
  //     title: '열 여덟 번째 게시물',
  //     content: '이건 열 여덟 번째 게시물의 내용입니다!',
  //     author: '뚜벅쵸',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 19,
  //     title: '열 아홉 번째 게시물',
  //     content: '이건 열 아홉 번째 게시물의 내용입니다!',
  //     author: '파라스',
  //     date: '24-09-01'
  //   },
  //   {
  //     id: 20,
  //     title: '스무 번째 게시물',
  //     content: '이건 스무 번째 게시물의 내용입니다!',
  //     author: '콘팡',
  //     date: '24-09-01'
  //   }
  // ];

  // 페이지네이션 상태 관리
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 하나당 포스트의 개수는 10개인 상수 생성
  const postsPerPage = 10;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 현재 페이지에 해당하는 게시물 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 하는 함수
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
    const { data: post, error } = await supabase.from('post').select('*');
    console.log(post);
    setPosts(post);
  };

  return (
    <BoardContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Title</TableHeader>
            <TableHeader>Author</TableHeader>
            <TableHeader>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <TableRow key={post.uuid} onClick={() => toDetail(post.uuid)}>
                <TableData>{post.title}</TableData>
                <TableData>{post.author_name}</TableData>
                <TableData>{post.date}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={toWrite}>글쓰기</Button>
      </ButtonContainer>
      {/* 게시물이 10개 이상일 때 페이지네이션을 렌더링 */}
      {posts.length > 10 && (
        <PaginationContainer>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton key={index + 1} onClick={() => paginate(index + 1)} isActive={currentPage === index + 1}>
              {index + 1}
            </PageButton>
          ))}
        </PaginationContainer>
      )}
    </BoardContainer>
  );
};

export default Main;
