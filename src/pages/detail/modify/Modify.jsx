import { useEffect } from 'react';
import { supabase } from '../../../supabase/supabase';
import Form from '../../components/Form/Form';
import { usePost } from '../../../hooks/usePost';

const Modify = () => {
  const { setPostData } = usePost();

  const getPost = async () => {
    const { data } = await supabase.from('post').select('*').eq('uuid', 'b420ecb0-9135-4761-95c0-f4e4ed57bf8c');
    setPostData(data[0]);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <Form isModify={true} />
    </>
  );
};

export default Modify;
