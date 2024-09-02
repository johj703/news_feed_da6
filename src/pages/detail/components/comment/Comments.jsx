import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../../supabase/supabase';
import {
  CommentBox,
  CommentInfo,
  CommentInput,
  CommentInputButton,
  CommentInputForm,
  CommentLastInfoBox,
  CommentModifyButton,
  CommentProfile,
  CommentsContainer,
  CommentsItemBox,
  CommentTitle
} from './CommentsStyle';
import CommentUpdateForm from './CommentUpdateForm';
import CommentItem from './CommentItem';

const Comments = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [testUser, setTestUser] = useState({ name: '', profile_url: '' });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const userInfo = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (!user) {
        return;
      }
      console.log(user.user_metadata.display_name, user.profile_url);
      setTestUser({ name: user.user_metadata.display_name, profile_url: user.profile_url });
    };
    userInfo();
  }, []);

  const getComments = async () => {
    const { data, error } = await supabase
      .from('comment')
      .select('*')
      .eq('post_id', params.id)
      .order('created_at', { ascending: true });
    console.log(data);
    if (error) {
      console.log('댓글을 불러오는 중에 오류가 발생했습니다.', error);
    } else {
      setComments(data);
    }
  };
  const handleAddComment = async () => {
    const { error } = await supabase
      .from('comment')
      .insert([
        {
          post_id: params.id,
          content: commentInput,
          comment_author_name: testUser.name,
          comment_author_profile_url: testUser.profile_url
        }
      ])
      .select();
    if (error) {
      console.log('댓글을 추가하는 중 오류가 발생 했습니다.', error);
      return;
    }
    setCommentInput('');
    getComments();
  };

  const handleUpdateComment = async (id) => {
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

  /**댓글 생성 시간 바꿔주는 함수 */
  const commentCreationTimeConverter = (time) => {
    return new Date(time).toLocaleString();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <CommentsContainer>
        <CommentTitle>댓글</CommentTitle>
        {comments.map((comment) => (
          <CommentItem key={comment.comments_id} data={comment} />
          // <CommentsItemBox key={comment.comments_id}>
          //   <CommentProfile>여긴 프로필 이미지</CommentProfile>
          //   <CommentBox>
          //     <span>{comment.content}</span>
          //     <CommentLastInfoBox>
          //       <div>
          //         <CommentInfo>{comment.comment_author_name}</CommentInfo>
          //         <CommentInfo>{commentCreationTimeConverter(comment.created_at)}</CommentInfo>
          //       </div>

          //       <div>
          //         <CommentModifyButton onClick={() => handleUpdateComment(comment.comments_id)}>
          //           수정
          //         </CommentModifyButton>
          //         <span>|</span>
          //         <CommentModifyButton onClick={() => handleDeleteComment(comment.comments_id)}>
          //           삭제
          //         </CommentModifyButton>
          //       </div>
          //     </CommentLastInfoBox>
          //   </CommentBox>
          //   {isUpdate && <CommentUpdateForm setIsUpdate={setIsUpdate} />}
          // </CommentsItemBox>
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
