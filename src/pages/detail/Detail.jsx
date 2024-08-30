import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, ModifyButton, Title, TitleContainer, UserInfoContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const [test, setTest] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const post = async () => {
    const { data } = await supabase.from('post').select('*').eq('uuid', 'b420ecb0-9135-4761-95c0-f4e4ed57bf8c');
    setTest(data[0]);
  };

  useEffect(() => {
    post();
    const testUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (user.user_metadata.name === test.author_name) {
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
