import { useEffect } from 'react';
import { supabase } from '../../supabase/supabase';
import { useLocation, useNavigate } from 'react-router-dom';

const useFetch = (setUserInfo) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      // await supabase.auth.signUp({
      //   email: 'test@test.com',
      //   password: '1q2w3e4r%',
      //   options: {
      //     data: {
      //       user_name: '이름',
      //       profile_url: null
      //     }
      //   }
      // });

      // 테스트계정 로그인을 위한 소스
      await supabase.auth.signInWithPassword({
        email: 'test@test.com',
        password: '1q2w3e4r%'
      });

      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        return navigate('/login', { replace: true, state: { redirectedFrom: pathname } });
      }

      const userMetaData = user.user_metadata;

      setUserInfo({
        user_name: userMetaData.user_name,
        email: userMetaData.email,
        profile_url: userMetaData.profile_url
      });
    };

    fetchData();
  }, []);
};

export default useFetch;
