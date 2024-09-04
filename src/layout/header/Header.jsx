import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { HeaderInner, MemberLink } from './HeaderStyle';
import { useContext } from 'react';
import { UserContext } from '../../context/UserConext';
import { supabase } from '../../supabase/supabase';
import { SearchContext } from '../../context/SearchContext';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nowSearch = searchParams.get('search'); // 현재 검색어

  const userData = useContext(UserContext).user;
  const { setInputValue } = useContext(SearchContext);

  const handleClickLogo = () => {
    sessionStorage.removeItem('mainPage');
    sessionStorage.removeItem('myBoard');
    sessionStorage.removeItem('bookMark');
    if (nowSearch) {
      setInputValue('');
      setSearchParams(null);
    }
  };

  return (
    <HeaderInner>
      <Link to="/" onClick={() => handleClickLogo()}>
        <img src={logo} alt="로고" />
      </Link>

      <MemberLink>{userData?.id ? <WhenLogin /> : <WhenLogout />}</MemberLink>
    </HeaderInner>
  );
};
export default Header;

const WhenLogin = () => {
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();

    sessionStorage.removeItem('isLogin');
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
