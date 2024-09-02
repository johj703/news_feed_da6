import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, ModifyButton, Title, TitleContainer, UserInfoContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation, useNavigate } from 'react-router-dom';
import getPost from './hooks/getPost';
import { ButtonContainer } from '../components/Form/FormStyle';

const Detail = () => {
  const [test, setTest] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getPostData = async () => {
    const response = await getPost();
    setTest(response);
  };

  const testLoginButton = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: 'cj8928@gmail.com',
      password: '111111'
    });
    console.log(data);
  };

  const signUp = async () => {
    let { data, error } = await supabase.auth.signUp({
      email: 'cj8928@gmail.com',
      password: '111111',
      options: {
        data: {
          display_name: '이기성'
        }
      }
    });
  };

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
  };

  const handleUserInfo = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    console.log(user);
  };

  useEffect(() => {
    getPostData();
    const userInfo = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (!user) {
        return;
      }
      if (user.user_metadata.email === test.email) {
        setIsAuthor(true);
      }
    };
    userInfo();
  }, [test.email]);
  const handleModifyButton = () => {
    navigate(`${location.pathname}/modify`);
  };

  const handleDeleteButton = async () => {
    console.log('삭제할거임');
    // const { error } = await supabase.from('post').delete().eq('uuid', '');
    alert('삭제되었습니다.');
    navigate('/');
  };

  return (
    <DetailContainer>
      <button onClick={signUp}>회원가입</button>
      <button onClick={testLoginButton}>로그인</button>
      <button onClick={logout}>로그아웃</button>
      <button onClick={handleUserInfo}>유저정보</button>
      <ViewContainer className="view-container">
        <TitleContainer>
          <Title>{test.title}</Title>
          <span>{test.date}</span>
        </TitleContainer>
        <UserInfoContainer>{test.author_name}</UserInfoContainer>
        {test.content && <Viewer className="viewer" initialValue={test.content} />}
        {isAuthor && (
          <ButtonContainer>
            <ModifyButton onClick={() => handleModifyButton()}>수정</ModifyButton>
            <ModifyButton onClick={() => handleDeleteButton()}>삭제</ModifyButton>
          </ButtonContainer>
        )}
      </ViewContainer>
    </DetailContainer>
  );
};

export default Detail;
