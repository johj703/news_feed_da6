import { supabase } from '../../../supabase/supabase';

const getPost = async (uuid) => {
  const { data } = await supabase.from('post').select('*').eq('uuid', 'f1977aec-14a4-4391-af68-f579b69d72c4');
  return data[0];
};
export default getPost;
