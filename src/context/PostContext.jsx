import { createContext, useState } from 'react';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postData, setPostData] = useState({});
  return <PostContext.Provider value={{ postData, setPostData }}>{children}</PostContext.Provider>;
};
export default PostContextProvider;
