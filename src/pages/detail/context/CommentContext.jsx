import { createContext, useCallback, useState } from 'react';
import { supabase } from '../../../supabase/supabase';

export const CommentsContext = createContext();
export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const getComments = useCallback(async (postId) => {
    const { data, error } = await supabase
      .from('comment')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('댓글을 불러오는 중에 오류가 발생했습니다.', error);
    } else {
      setComments(data);
    }
  }, []);
  return <CommentsContext.Provider value={{ comments, setComments, getComments }}>{children}</CommentsContext.Provider>;
};