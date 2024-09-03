import { memo, useCallback, useContext, useState } from 'react';
import {
  CommentBox,
  CommentInfo,
  CommentLastInfoBox,
  CommentModifyButton,
  CommentProfile,
  CommentProfileImg,
  CommentsItemBox,
  CommentsListContainer
} from './CommentsStyle';
import CommentUpdateForm from './CommentUpdateForm';
import { supabase } from '../../../../supabase/supabase';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../context/UserConext';
import { useComments } from '../../hooks/useComments';

const CommentItem = ({ data }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const { user } = useContext(UserContext);
  const params = useParams();
  const { getComments } = useComments();

  /**댓글 생성 시간 바꿔주는 함수 */
  const commentCreationTimeConverter = useCallback((time) => {
    return new Date(time).toLocaleString();
  }, []);

  const handleUpdateComment = useCallback(async () => {
    setIsUpdate((prev) => !prev);
  }, []);

  const handleDeleteComment = useCallback(
    async (id) => {
      const { error } = await supabase.from('comment').delete().eq('uuid', id);
      if (error) {
        console.error(error);
      }
      getComments(params.id);
    },
    [getComments, params.id]
  );

  return (
    <CommentsListContainer>
      <CommentsItemBox>
        <CommentProfile>
          <CommentProfileImg src={data.comment_author_profile_url} />
        </CommentProfile>
        <CommentBox>
          <span>{data.content}</span>
          <CommentLastInfoBox>
            <div>
              <CommentInfo>{data.comment_author_name}</CommentInfo>
              <CommentInfo>{commentCreationTimeConverter(data.created_at)}</CommentInfo>
            </div>
            {data.comment_author_email === user?.email ? (
              <div>
                <CommentModifyButton onClick={() => handleUpdateComment()}>
                  {isUpdate ? '취소' : '수정'}
                </CommentModifyButton>
                <CommentModifyButton onClick={() => handleDeleteComment(data.uuid)}>삭제</CommentModifyButton>
              </div>
            ) : null}
          </CommentLastInfoBox>
        </CommentBox>
      </CommentsItemBox>
      {isUpdate && <CommentUpdateForm setIsUpdate={setIsUpdate} comment={data} $isUpdate={isUpdate} />}
    </CommentsListContainer>
  );
};

export default memo(CommentItem);
