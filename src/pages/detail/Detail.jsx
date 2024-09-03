import Swal from 'sweetalert2';
import { useCallback, useContext, useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import {
  BookMark,
  ContentArea,
  DetailContainer,
  ModifyButton,
  Title,
  TitleContainer,
  UserInfoContainer,
  ViewContainer
} from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getPost from './components/getPost';
import { ButtonContainer } from '../components/Form/FormStyle';
import Comments from './components/comment/Comments';
import { UserContext } from '../../context/UserConext';
import bookmarkOff from '../../assets/bookmark-off.png';
import bookmarkOn from '../../assets/bookmark-on.png';

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

  const userData = user?.user_metadata.bookMark;

  const handleAddBookMark = async () => {
    if (userData?.includes(params.id)) {
      Swal.fire({
        title: '북마크에서 삭제하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#407221',
        cancelButtonColor: '#36474F',
        confirmButtonText: '네',
        cancelButtonText: '아니요'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await supabase.auth.updateUser({
            data: {
              bookMark: [...userData.filter((item) => item !== params.id)]
            }
          });

          Swal.fire({
            title: '삭제 완료!',
            icon: 'success'
          });
        }
      });
    } else {
      await supabase.auth.updateUser({
        data: {
          bookMark: userData ? [...userData, params.id] : [params.id]
        }
      });
    }
  };

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

        <ContentArea>{contents.content && <Viewer className="viewer" initialValue={contents.content} />}</ContentArea>

        <ButtonContainer>
          {user && (
            <BookMark onClick={() => handleAddBookMark()}>
              {userData?.includes(params.id) ? (
                <img src={bookmarkOn} alt="북마크 된 상태" />
              ) : (
                <img src={bookmarkOff} alt="북마크 안 된 상태" />
              )}
            </BookMark>
          )}

          {user?.email === contents.email && (
            <>
              <ModifyButton onClick={() => handleModifyButton()} $bgcolor="modify">
                수정
              </ModifyButton>
              <ModifyButton onClick={() => handleDeleteButton()} $bgcolor="delete">
                삭제
              </ModifyButton>
            </>
          )}
        </ButtonContainer>
      </ViewContainer>

      <Comments />
    </DetailContainer>
  );
};

export default Detail;
