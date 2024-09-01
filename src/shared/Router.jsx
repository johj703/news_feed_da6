import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Detail from '../pages/detail/Detail';
import Main from '../pages/main/Main';
import Login from '../pages/Login/Login';
import Signup from '../pages/signup/Signup';
import Write from '../pages/Write/Write';
import Mypage from '../pages/mypage/Mypage';
import Modify from '../pages/detail/modify/Modify';
import Mymodify from '../pages/mypage/mymodify/Mymodify';
import Comment from '../pages/comment/Comment';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/write" element={<Write />} />
          <Comment path="/comments/:postId" element={<Comment />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="mymodify" element={<Mymodify />} />
          </Route>

          <Route path="/detail/:id" element={<Detail />}>
            <Route path="modify" element={<Modify />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
