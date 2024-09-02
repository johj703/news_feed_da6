import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { HeaderInner, MemberLink } from './HeaderStyle';
import { useContext } from 'react';
import { UserContext } from '../../context/UserConext';
import { supabase } from '../../supabase/supabase';

const Header = () => {
  const userData = useContext(UserContext).user;

  return (
    <HeaderInner>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>

      <MemberLink>{userData ? <WhenLogin /> : <WhenLogout />}</MemberLink>
    </HeaderInner>
  );
};
export default Header;

const WhenLogin = () => {
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    navigate('/', { replace: true });
  };

  return (
    <>
      <li>
        <a
          href="#none"
          onClick={(e) => {
            handleLogOut(e);
          }}
        >
          로그아웃
        </a>
      </li>
      <li>
        <Link to="/mypage">마이페이지</Link>
      </li>
    </>
  );
};

const WhenLogout = () => {
  return (
    <>
      <li>
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <Link to="/signup">회원가입</Link>
      </li>
    </>
  );
};
