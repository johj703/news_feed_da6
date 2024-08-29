import { useEffect, useState } from 'react';
import { supabase } from '../../../supabase/supabase';
import { useLocation, useNavigate } from 'react-router-dom';

const Mymodify = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const infoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    });
  };

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
        name: userMetaData.user_name,
        email: userMetaData.email,
        profile_url: userMetaData.profile_url
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <form action="">
        <div>
          <img src="" alt="" /> <button>이미지 등록</button> <button>이미지 삭제</button>
        </div>
        <div>
          <label htmlFor="">이름</label>
          <input id="name" type="text" onChange={infoChange} value={userInfo.name} />
        </div>
        <div>
          <label htmlFor="">이메일</label>
          <input
            id="email"
            type="email"
            required
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            onChange={infoChange}
            value={userInfo.email}
          />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="password" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="">비밀번호 확인</label>
          <input type="password" autoComplete="off" />
        </div>
      </form>
    </>
  );
};

export default Mymodify;
