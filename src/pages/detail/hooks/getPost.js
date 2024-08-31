import { supabase } from '../../../supabase/supabase';

const getPost = async (uuid) => {
  const { data } = await supabase.from('post').select('*').eq('uuid', '7124c53c-7736-46b3-ae45-8ab8755ecc62');
  return data[0];
};
export default getPost;
