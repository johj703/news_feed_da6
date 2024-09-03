import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { CommentInput, CommentInputButton, CommentInputForm } from './CommentsStyle';
import { UserContext } from '../../../../context/UserConext';
import { supabase } from '../../../../supabase/supabase';
import { useParams } from 'react-router-dom';
import { useComments } from '../../hooks/useComments';

const CommentUpdateForm = ({ setIsUpdate, comment, $isUpdate }) => {
  const [updateComment, setUpdateComment] = useState('');
  const { user } = useContext(UserContext);
  const params = useParams();
  const { getComments } = useComments();

  const handleUpdateComment = useCallback(async () => {
    if (updateComment.length === 0) {
      alert('댓글을 입력해주세요.');
      return;
    }
    const { error } = await supabase
      .from('comment')
      .update([
        {
          content: updateComment,
          comment_author_name: user.user_metadata.display_name ?? user.user_metadata.user_name,
          comment_author_profile_url: user.user_metadata.profile_url ?? user.user_metadata.avatar_url
        }
      ])
      .eq('uuid', comment.uuid)
      .select();
    if (error) {
      console.error(error);
      return;
    }
    setIsUpdate(false);
    getComments(params.id);
  }, [updateComment, user, setIsUpdate, getComments, params.id, comment.uuid]);

  useEffect(() => {
    setUpdateComment(comment.content);
  }, [comment.content]);

  return (
    <CommentInputForm
      $isUpdate={$isUpdate}
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateComment();
      }}
    >
      <CommentInput
        $isUpdate={$isUpdate}
        type="text"
        value={updateComment}
        onChange={(e) => setUpdateComment(e.target.value)}
        placeholder="댓글을 입력하세요"
      />
      <CommentInputButton $isUpdate={$isUpdate} type="submit">
        수정
      </CommentInputButton>
    </CommentInputForm>
  );
};

export default memo(CommentUpdateForm);
