import logo from '../../assets/logo.png';
import github from '../../assets/github.svg';
import velog from '../../assets/velog.svg';
import { Link } from 'react-router-dom';
import { ContactList, CopyRight, FooterInner } from './FooterStyle';

const Footer = () => {
  return (
    <FooterInner>
      <img src={logo} alt=" 로고" />

      <ContactList>
        <li>
          <span>조현준</span>
          <Link to="https://github.com/johj703">
            <img src={github} alt="깃허브" />
          </Link>
          <Link to="https://velog.io/@johj703/posts">
            <img src={velog} alt="velog" />
          </Link>
        </li>
        <li>
          <span>이기성</span>
          <Link to="https://github.com/Leekee0905">
            <img src={github} alt="깃허브" />
          </Link>
          <Link to="https://velog.io/@leekee0905/posts">
            <img src={velog} alt="velog" />
          </Link>
        </li>
        <li>
          <span>송진우</span>
          <Link to="https://github.com/hanamstarfield">
            <img src={github} alt="깃허브" />
          </Link>
          <Link to="https://velog.io/@qnfdmlto/">
            <img src={velog} alt="velog" />
          </Link>
        </li>
        <li>
          <span>박준호</span>
          <Link to="https://github.com/PJH-FE">
            <img src={github} alt="깃허브" />
          </Link>
          <Link to="https://velog.io/@sjrmd781">
            <img src={velog} alt="velog" />
          </Link>
        </li>
      </ContactList>

      <CopyRight>Copyright © 3계탕 All Rights Reserved</CopyRight>
    </FooterInner>
  );
};
export default Footer;
