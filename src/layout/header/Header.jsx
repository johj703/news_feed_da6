import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { HeaderInner, MemberLink } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderInner>
      <img src={logo} alt="로고" />

      <MemberLink>
        <li>
          <Link to="/login">로그인</Link>
          <Link to="/login">로그아웃</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </MemberLink>
    </HeaderInner>
  );
};
export default Header;
