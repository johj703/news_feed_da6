import { useState } from 'react';
import TuiEditor from '../TuiEditor';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, FormContainer, RegisterButton, TitleInput } from './FormStyle';
import { supabase } from '../../../supabase/supabase';

const Form = ({ isModify }) => {
  const [post, setPost] = useState({
    title: '',
    contents: ''
  });

  const navigate = useNavigate();

  const handleWriteSubmit = async () => {
    const today = new Date().toLocaleDateString();

    const { error } = await supabase
      .from('post')
      .insert([
        {
          author_name: '이기성',
          author_profile_url: '',
          date: today,
          title: post.title,
          content: post.contents,
          img_url: '',
          email: 'cj8928@gmail.com'
        }
      ])
      .select();

    if (error) {
      console.error(error);
    }
    isModify ? navigate('/detail/1') : navigate('/');
  };
  const handleCancelButton = () => {
    navigate('/detail/1');
  };
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        handleWriteSubmit();
      }}
    >
      <TitleInput value={post.title} placeholder="제목" onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <TuiEditor setPost={setPost} post={post} />
      {isModify ? (
        <ButtonContainer>
          <RegisterButton type="submit">수정</RegisterButton>
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
