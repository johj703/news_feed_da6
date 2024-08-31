import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Detail from '../pages/detail/Detail';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Write from '../pages/write/Write';
import Mypage from '../pages/mypage/Mypage';
import Modify from '../pages/detail/modify/Modify';
import Mymodify from '../pages/mypage/mymodify/Mymodify';
import PostContextProvider from '../context/PostContext';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/write" element={<Write />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="mymodify" element={<Mymodify />} />
          </Route>

          <Route
            path="/detail/:id"
            element={
              <PostContextProvider>
                <Detail />
              </PostContextProvider>
            }
          />
          <Route
            path="/detail/:id/modify"
            element={
              <PostContextProvider>
                <Modify />
              </PostContextProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
