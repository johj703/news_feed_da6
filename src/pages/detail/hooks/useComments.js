import { useContext } from 'react';
import { CommentsContext } from '../context/CommentContext';

export const useComments = () => {
  const context = useContext(CommentsContext);

  if (!context) {
    throw new Error('useComments는 CommentsProvider 내에서만 사용할 수 있습니다.');
  }

  return context;
};
