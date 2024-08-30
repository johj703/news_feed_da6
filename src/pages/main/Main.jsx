import { Navigate } from 'react-router-dom';
import { BoardContainer, Table, TableHeader, TableRow, TableData, Button } from './MainStyle';

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
    }
  ];

  const toWrite = () => {
    Navigate('/write');
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
          {posts.map((post) => {
            return (
              <TableRow key={post.id}>
                <TableData>{post.id}</TableData>
                <TableData>{post.title}</TableData>
                <TableData>{post.author}</TableData>
                <TableData>{post.date}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </BoardContainer>
  );
};

export default Main;
