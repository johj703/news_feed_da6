import { supabase } from '../../../supabase/supabase';

const getPost = async (uuid) => {
  const { data } = await supabase.from('post').select('*').eq('uuid', uuid);
  return data[0];
};
export default getPost;
