import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../../../supabase/supabase';
import { CommentInput, CommentInputButton, CommentInputForm, CommentsContainer, CommentTitle } from './CommentsStyle';
import CommentItem from './CommentItem';
import { UserContext } from '../../../../context/UserConext';
import { useComments } from '../../hooks/useComments';

const Comments = () => {
  const params = useParams();
  const [commentInput, setCommentInput] = useState('');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { comments, getComments, setComments } = useComments();

  const handleAddComment = async () => {
    if (commentInput.length === 0) {
      alert('댓글을 입력해주세요.');
      return;
    }
    if (!user) {
      alert('로그인하고 댓글을 작성해주세요!');
      navigate('/login');
      return;
    }

    const { error } = await supabase
      .from('comment')
      .insert([
        {
          post_id: params.id,
          content: commentInput,
          comment_author_name: user.user_metadata.display_name ?? user.user_metadata.user_name,
          comment_author_profile_url: user.user_metadata.profile_url ?? user.user_metadata.avatar_url,
          comment_author_email: user.email
        }
      ])
      .select();
    if (error) {
      console.log('댓글을 추가하는 중 오류가 발생 했습니다.', error);
      return;
    }
    setCommentInput('');
    getComments(params.id);
  };

  useEffect(() => {
    getComments(params.id);
  }, [getComments, params.id]);

  return (
    <div>
      <CommentsContainer>
        <CommentTitle>댓글</CommentTitle>
        {comments.map((comment) => (
          <CommentItem key={comment.uuid} data={comment} setComments={setComments} />
        ))}
      </CommentsContainer>
      <CommentInputForm
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment();
        }}
      >
        <CommentInput
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="댓글을 입력하세요"
        />
        <CommentInputButton type="submit">등록</CommentInputButton>
      </CommentInputForm>
    </div>
  );
};

export default Comments;
