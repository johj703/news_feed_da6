import { useEffect, useState } from 'react';
import TuiEditor from '../TuiEditor';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, FormContainer, RegisterButton, TitleInput } from './FormStyle';
import { supabase } from '../../../supabase/supabase';
import getPost from '../../detail/components/getPost';

const Form = ({ isModify }) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    author_name: '',
    author_profile_url: '',
    date: '',
    email: '',
    uuid: ''
  });
  const today = new Date().toLocaleString();

  const navigate = useNavigate();

  const getPostData = async () => {
    if (isModify) {
      const response = await getPost();
      setPost({ ...response });
    }
  };
  useEffect(() => {
    getPostData();
    const userInfo = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      console.log(user);
    };
    userInfo();
  }, []);
  const handleModifySubmit = async () => {
    const { error } = await supabase
      .from('post')
      .update([
        {
          author_name: '이기성',
          author_profile_url: '',
          date: today,
          title: post.title,
          content: post.content,
          email: 'cj8928@gmail.com'
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
    const { error } = await supabase
      .from('post')
      .insert([
        {
          author_name: '이기성',
          author_profile_url: '',
          date: today,
          title: post.title,
          content: post.content,
          email: 'cj8928@gmail.com'
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
            수정
          </RegisterButton>
          <RegisterButton type="button" onClick={handleCancelButton}>
            취소
          </RegisterButton>
        </ButtonContainer>
      ) : (
        <RegisterButton type="submit">등록</RegisterButton>
      )}
    </FormContainer>
  );
};

export default Form;
