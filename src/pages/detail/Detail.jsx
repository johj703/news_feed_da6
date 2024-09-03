import { useCallback, useContext, useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, ModifyButton, Title, TitleContainer, UserInfoContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getPost from './components/getPost';
import { ButtonContainer } from '../components/Form/FormStyle';
import Comments from './components/comment/Comments';
import { UserContext } from '../../context/UserConext';

const Detail = () => {
  const [contents, setContents] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { user } = useContext(UserContext);

  const getPostData = async () => {
    const response = await getPost(params.id);
    setContents(response);
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

  const creationTimeConverter = useCallback((time) => {
    return new Date(time).toLocaleString();
  }, []);

  return (
    <DetailContainer>
      <ViewContainer className="view-container">
        <TitleContainer>
          <Title>{contents.title}</Title>
        </TitleContainer>

        <UserInfoContainer>
          <span>{contents.author_name}</span>
          <span>
            {contents.updated_at
              ? creationTimeConverter(contents.updated_at)
              : creationTimeConverter(contents.created_at)}
          </span>
        </UserInfoContainer>

        {contents.content && <Viewer className="viewer" initialValue={contents.content} />}
        {user?.email === contents.email && (
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
