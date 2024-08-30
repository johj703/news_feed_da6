import { BoardContainer, Post, PostTitle, PostContent } from './MainStyle';

const Main = () => {
  const posts = [
    { id: 1, title: '첫 번째 게시물', content: '이건 첫 번째 게시물의 내용입니다!' },
    { id: 2, title: '두 번째 게시물', content: '이건 두 번째 게시물의 내용입니다!' }
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
