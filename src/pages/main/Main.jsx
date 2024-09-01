import { Navigate } from 'react-router-dom';
import {
  BoardContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  Button,
  PaginationContainer,
  PageButton
} from './MainStyle';
import { useEffect } from 'react';
import { supabase } from './../../supabase/supabase';

const Main = () => {
  const posts = [
    {
      id: 1,
      title: '첫 번째 게시물',
      content: '이건 첫 번째 게시물의 내용입니다!',
      author: '이상해씨',
      date: '24-08-30'
    },
    {
      id: 2,
      title: '두 번째 게시물',
      content: '이건 두 번째 게시물의 내용입니다!',
      author: '파이리',
      date: '24-08-30'
    },
    {
      id: 3,
      title: '세 번째 게시물',
      content: '이건 세 번째 게시물의 내용입니다!',
      author: '꼬북이',
      date: '24-08-30'
    },
    {
      id: 4,
      title: '네 번째 게시물',
      content: '이건 네 번째 게시물의 내용입니다!',
      author: '캐터피',
      date: '24-08-30'
    },
    {
      id: 5,
      title: '다섯 번째 게시물',
      content: '이건 다섯 번째 게시물의 내용입니다!',
      author: '뿔충이',
      date: '24-08-30'
    },
    {
      id: 6,
      title: '여섯 번째 게시물',
      content: '이건 여섯 번째 게시물의 내용입니다!',
      author: '구구',
      date: '24-08-30'
    },
    {
      id: 7,
      title: '일곱 번째 게시물',
      content: '이건 일곱 번째 게시물의 내용입니다!',
      author: '꼬렛',
      date: '24-09-01'
    },
    {
      id: 8,
      title: '여덟 번째 게시물',
      content: '이건 여덟 번째 게시물의 내용입니다!',
      author: '깨비참',
      date: '24-09-01'
    },
    {
      id: 9,
      title: '아홉 번째 게시물',
      content: '이건 아홉 번째 게시물의 내용입니다!',
      author: '아보',
      date: '24-09-01'
    },
    {
      id: 10,
      title: '열 번째 게시물',
      content: '이건 열 번째 게시물의 내용입니다!',
      author: '피카츄',
      date: '24-09-01'
    },
    {
      id: 11,
      title: '열 한 번째 게시물',
      content: '이건 열 한 번째 게시물의 내용입니다!',
      author: '모래두지',
      date: '24-09-01'
    },
    {
      id: 12,
      title: '열 두 번째 게시물',
      content: '이건 열 두 번째 게시물의 내용입니다!',
      author: '니드런(암)',
      date: '24-09-01'
    },
    {
      id: 13,
      title: '열 세 번째 게시물',
      content: '이건 열 세 번째 게시물의 내용입니다!',
      author: '니드런(수)',
      date: '24-09-01'
    },
    {
      id: 14,
      title: '열 네 번째 게시물',
      content: '이건 열 네 번째 게시물의 내용입니다!',
      author: '삐삐',
      date: '24-09-01'
    },
    {
      id: 15,
      title: '열 다섯 번째 게시물',
      content: '이건 열 다섯 번째 게시물의 내용입니다!',
      author: '식스테일',
      date: '24-09-01'
    },
    {
      id: 16,
      title: '열 여섯 번째 게시물',
      content: '이건 열 여섯 번째 게시물의 내용입니다!',
      author: '푸린',
      date: '24-09-01'
    },
    {
      id: 17,
      title: '열 일곱 번째 게시물',
      content: '이건 열 일곱 번째 게시물의 내용입니다!',
      author: '주뱃',
      date: '24-09-01'
    },
    {
      id: 18,
      title: '열 여덟 번째 게시물',
      content: '이건 열 여덟 번째 게시물의 내용입니다!',
      author: '뚜벅쵸',
      date: '24-09-01'
    },
    {
      id: 19,
      title: '열 아홉 번째 게시물',
      content: '이건 열 아홉 번째 게시물의 내용입니다!',
      author: '파라스',
      date: '24-09-01'
    },
    {
      id: 20,
      title: '스무 번째 게시물',
      content: '이건 스무 번째 게시물의 내용입니다!',
      author: '콘팡',
      date: '24-09-01'
    }
  ];

  const toWrite = () => {
    Navigate('/write');
  };

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    const { data: post, error } = await supabase.from('post').select('*');
    console.log(post);
  };

  return (
    <BoardContainer>
      <Button onClick={toWrite}>글쓰기</Button>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Author</TableHeader>
            <TableHeader>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {posts.map((posts) => {
            return (
              <TableRow key={posts.id}>
                <TableData>{posts.id}</TableData>
                <TableData>{posts.title}</TableData>
                <TableData>{posts.author}</TableData>
                <TableData>{posts.date}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>

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
