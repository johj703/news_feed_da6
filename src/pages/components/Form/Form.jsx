import { useContext, useEffect, useState } from 'react';
import TuiEditor from '../TuiEditor';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonContainer, FormContainer, RegisterButton, TitleInput } from './FormStyle';
import { supabase } from '../../../supabase/supabase';
import getPost from '../../detail/components/getPost';
import { UserContext } from '../../../context/UserConext';

const Form = ({ isModify }) => {
  const params = useParams();
  const [post, setPost] = useState({
    title: '',
    content: '',
    author_name: '',
    author_profile_url: '',
    date: '',
    email: '',
    uuid: ''
  });
  const { user } = useContext(UserContext);

  const today = new Date().toLocaleString();

  const navigate = useNavigate();

  const getPostData = async () => {
    if (isModify) {
      const response = await getPost(params.id);
      setPost({ ...response });
    }
  };

  const findThumbnailImage = () => {
    const regex = /!\[[^\]]*\]\(([^)]+)\)/;
    const match = regex.exec(post.content);
    if (match) {
      const firstMatch = match[1];
      return firstMatch;
    }
    return null;
  };

  const handleModifySubmit = async () => {
    if (post.title.length === 0) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (post.content.length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }
    const { error } = await supabase
      .from('post')
      .update([
        {
          author_name: user.user_metadata.display_name,
          author_profile_url: user.user_metadata.profile_url,
          date: today,
          title: post.title,
          content: post.content,
          email: user.email,
          thumbnail_url: findThumbnailImage()
        }
      ])
      .eq('uuid', post.uuid)
      .select();
    if (error) {
      console.error(error);
      return;
    }
    navigate(`/detail/${post.uuid}`);
  };

  const handleWriteSubmit = async () => {
    if (post.title.length === 0) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (post.content.length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }
    const { error } = await supabase
      .from('post')
      .insert([
        {
          author_name: user.user_metadata.display_name,
          author_profile_url: user.user_metadata.profile_url,
          date: today,
          title: post.title,
          content: post.content,
          email: user.email,
          thumbnail_url: findThumbnailImage()
        }
      ])
      .select();

    if (error) {
      alert(error.message);
      console.error(error);
      return;
    }
    navigate('/');
  };

  const handleCancelButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        isModify ? handleModifySubmit() : handleWriteSubmit();
      }}
    >
      <TitleInput value={post.title} placeholder="제목" onChange={(e) => setPost({ ...post, title: e.target.value })} />

      <TuiEditor setPost={setPost} post={post} />

      {isModify ? (
        <ButtonContainer>
          <RegisterButton type="submit" bgcolor="modify">
            수정 완료
          </RegisterButton>
          <RegisterButton type="button" onClick={handleCancelButton}>
            취소
          </RegisterButton>
        </ButtonContainer>
      ) : (
        <RegisterButton type="submit">작성 완료</RegisterButton>
      )}
    </FormContainer>
  );
};

export default Form;
