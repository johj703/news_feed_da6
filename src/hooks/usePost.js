import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

export const usePost = () => {
  return useContext(PostContext);
};
