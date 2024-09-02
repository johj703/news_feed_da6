import { useState } from 'react';
import {
  CommentBox,
  CommentInfo,
  CommentLastInfoBox,
  CommentModifyButton,
  CommentProfile,
  CommentsItemBox
} from './CommentsStyle';
import CommentUpdateForm from './CommentUpdateForm';

const CommentItem = ({ data }) => {
  console.log(data);
  const [isUpdate, setIsUpdate] = useState(false);
  /**댓글 생성 시간 바꿔주는 함수 */
  const commentCreationTimeConverter = (time) => {
    return new Date(time).toLocaleString();
  };
  const handleUpdateComment = async () => {
    setIsUpdate(true);
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
  };

  const handleDeleteComment = async (id) => {
    console.log(id);
  };
  return (
    <CommentsItemBox>
      <CommentProfile>여긴 프로필 이미지</CommentProfile>
      <CommentBox>
        <span>{data.content}</span>
        <CommentLastInfoBox>
          <div>
            <CommentInfo>{data.comment_author_name}</CommentInfo>
            <CommentInfo>{commentCreationTimeConverter(data.created_at)}</CommentInfo>
          </div>

          <div>
            <CommentModifyButton onClick={() => handleUpdateComment(data.comments_id)}>수정</CommentModifyButton>
            <span>|</span>
            <CommentModifyButton onClick={() => handleDeleteComment(data.comments_id)}>삭제</CommentModifyButton>
          </div>
        </CommentLastInfoBox>
      </CommentBox>
      {isUpdate && <CommentUpdateForm setIsUpdate={setIsUpdate} />}
    </CommentsItemBox>
  );
};

export default CommentItem;
