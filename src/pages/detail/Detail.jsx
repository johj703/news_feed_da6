import { useContext, useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, ModifyButton, Title, TitleContainer, UserInfoContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getPost from './components/getPost';
import { ButtonContainer } from '../components/Form/FormStyle';
import Comments from './components/comment/Comments';
import { UserContext } from '../../context/UserConext';

const Detail = () => {
  const [test, setTest] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { user } = useContext(UserContext);

  const getPostData = async () => {
    const response = await getPost();
    setTest(response);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleModifyButton = () => {
    navigate(`${location.pathname}/modify`);
  };

  const handleDeleteButton = async () => {
    const { error } = await supabase.from('post').delete().eq('uuid', params.id);
    if (error) {
      console.error(error);
    }
    alert('삭제되었습니다.');
    navigate('/');
  };

  return (
    <DetailContainer>
      <ViewContainer className="view-container">
        <TitleContainer>
          <Title>{test.title}</Title>
        </TitleContainer>

        <UserInfoContainer>
          <span>{test.author_name}</span>
          <span>{test.date}</span>
        </UserInfoContainer>

        {test.content && <Viewer className="viewer" initialValue={test.content} />}
        {user?.email === test.email && (
          <ButtonContainer>
            <ModifyButton onClick={() => handleModifyButton()} bgcolor="modify">
              수정
            </ModifyButton>
            <ModifyButton onClick={() => handleDeleteButton()} bgcolor="delete">
              삭제
            </ModifyButton>
          </ButtonContainer>
        )}
        <Comments />
      </ViewContainer>
    </DetailContainer>
  );
};

export default Detail;
