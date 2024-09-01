import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {
  // URL에서 postId 가지고 오기
  const { postId } = useParams();

  // State 선언: 댓글 목록과 새로운 댓글 입력값 관리
  const [comments, setComments] = useState([]);
  const [newComment, setNewComments] = useState('');

  return <div>Comment</div>;
};

export default Comment;
