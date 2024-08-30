import { BoardContainer, Table, TableHeader, TableRow, TableData } from './MainStyle';

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

  console.log(posts);
  return (
    <BoardContainer>
      {posts.map((post) => {
        return (
          <Post key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </Post>
        );
      })}
    </BoardContainer>
  );
};

export default Main;
