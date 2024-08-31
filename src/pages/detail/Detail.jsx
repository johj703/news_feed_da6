import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, ModifyButton, Title, TitleContainer, UserInfoContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation, useNavigate } from 'react-router-dom';
import getPost from './hooks/getPost';

const Detail = () => {
  const [test, setTest] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const post = async () => {
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

  useEffect(() => {
    post();

    const testUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (user.user_metadata.display_name === test.author_name) {
        setIsAuthor(true);
      }
    };
    testUser();
  }, [test.author_name]);

  const handleModifyButton = () => {
    navigate(`${location.pathname}/modify`);
  };

  return (
    <DetailContainer>
      <button onClick={signUp}>회원가입</button>
      <button onClick={testLoginButton}>로그인</button>
      <ViewContainer className="view-container">
        <TitleContainer>
          <Title>{test.title}</Title>
          <span>{test.date}</span>
        </TitleContainer>
        <UserInfoContainer>{test.author_name}</UserInfoContainer>
        {test.content && <Viewer className="viewer" initialValue={test.content} />}
        {isAuthor && <ModifyButton onClick={() => handleModifyButton()}>수정</ModifyButton>}
      </ViewContainer>
    </DetailContainer>
  );
};

export default Detail;
