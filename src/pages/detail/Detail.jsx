import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, Title, TitleContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';

const Detail = () => {
  const [test, setTest] = useState({});

  const post = async () => {
    const { data } = await supabase.from('post').select('*').eq('uuid', 'b420ecb0-9135-4761-95c0-f4e4ed57bf8c');
    console.log(data);
    setTest(data[0]);
  };

  useEffect(() => {
    post();
    const testUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      console.log(user);
    };
    testUser();
  }, []);
  console.log(test);
  return (
    <DetailContainer>
      <ViewContainer className="view-container">
        <TitleContainer>
          <Title>{test.title}</Title>
          <span>{test.date}</span>
        </TitleContainer>
        {test.content && <Viewer className="viewer" initialValue={test.content} />}
      </ViewContainer>
    </DetailContainer>
  );
};

export default Detail;
