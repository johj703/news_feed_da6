import { useState } from 'react';
import { CommentInput, CommentInputButton, CommentInputForm } from './CommentsStyle';

const CommentUpdateForm = ({ setIsUpdate }) => {
  const [updateComment, setUpdateComment] = useState('');
  const handleUpdateComment = async (id) => {
    // const { error } = await supabase
    //   .from('comment')
    //   .update([
    //     {
    //       post_id: params.id,
    //       content: commentInput,
    //       comment_author_name: testUser.name,
    //       comment_author_profile_url: testUser.profile_url
    //     }
    //   ])
    //   .eq('comments_id', id)
    //   .select();
    // if (error) {
    //   console.error(error);
    //   return;
    // }
    console.log('update');
    setIsUpdate(false);
  };
  return (
    <CommentInputForm
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateComment();
      }}
    >
      <CommentInput
        type="text"
        value={updateComment}
        onChange={(e) => setUpdateComment(e.target.value)}
        placeholder="댓글을 입력하세요"
      />
      <CommentInputButton type="submit">수정</CommentInputButton>
    </CommentInputForm>
  );
};

export default CommentUpdateForm;
