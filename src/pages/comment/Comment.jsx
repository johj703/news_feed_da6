import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './../../supabase/supabase';

const Comment = () => {
  // URL에서 postId 가지고 오기
  const { postId } = useParams();

  // State 선언: 댓글 목록과 새로운 댓글 입력값 관리
  const [comments, setComments] = useState([]);
  const [newComment, setNewComments] = useState('');

  // 컴포넌트가 처음 렌더링될 때 댓글 데이터를 가지고 오는 함수
  useEffect(() => {
    const fetchcomments = async () => {
      // Supabase에서 특정 postId에 해당하는 댓글 데이터를 가지고 옴
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true }); // 시간순으로 정렬

      // 에러 처리
      if (error) {
        console.log('댓글을 불러오는 중에 오류가 발생했습니다.', error);
      } else {
        // 가지고온 데이터를 상태 변수에 저장
        setComments(data);
      }
    };

    // 댓글 데이터 가져오기 함수 호출
    fetchcomments();
  }, [postId]);

  return (
    <div>
      <h3>{postId}번 포스트의 댓글</h3> {/* postId 표시 */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.content} {/* 댓글 내용 */}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComments(e.target.value)}
        placeholder="댓글을 입력하세요"
      />
      <button>댓글 추가</button>
    </div>
  );
};

export default Comment;
