import { useEffect } from 'react';
import { supabase } from '../../supabase/supabase';
import { useLocation, useNavigate } from 'react-router-dom';

const useFetch = (setUserInfo) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        return navigate('/login', { replace: true, state: { redirectedFrom: pathname } });
      }

      const userMetaData = user.user_metadata;

      setUserInfo({
        display_name: userMetaData.display_name,
        email: userMetaData.email,
        profile_url:
          userMetaData.profile_url ??
          supabase.storage.from('profileImage').getPublicUrl('defaultImage/defaultImage').data.publicUrl
      });
    };

    fetchData();
  }, []);
};

export default useFetch;
