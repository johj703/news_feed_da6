import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { DetailContainer, Title, TitleContainer, ViewContainer } from './DetailStyle';
import { Viewer } from '@toast-ui/react-editor';

const Detail = () => {
  const [test, setTest] = useState('');

  const post = async () => {
    const { data } = await supabase.from('post').select('content').eq('uuid', '1d9bcb10-c706-4a42-99fb-ebfa8591b1f9');
    setTest(data[0].content);
  };

  useEffect(() => {
    post();
  }, []);
  console.log(test);
  return (
    <DetailContainer>
      <ViewContainer className="view-container">
        <TitleContainer>
          <Title>title</Title>
          <span>time</span>
        </TitleContainer>
        {test && <Viewer className="viewer" initialValue={test} />}
      </ViewContainer>
    </DetailContainer>
  );
};

export default Detail;
