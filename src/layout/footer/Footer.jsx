import logo from '../../assets/logo.png';
import github from '../../assets/github.svg';
import velog from '../../assets/velog.svg';
import upBtn from '../../assets/up.png';
import downBtn from '../../assets/down.png';
import { Link } from 'react-router-dom';
import { ContactList, CopyRight, FixedBtn, FooterInner } from './FooterStyle';

const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleGoToBottom = () => {
    window.scrollTo({
      top: document.getElementById('root').scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <FixedBtn>
        <img src={upBtn} alt="상단으로" onClick={() => handleGoToTop()} />
        <img src={downBtn} alt="하단으로" onClick={() => handleGoToBottom()} />
      </FixedBtn>

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
    </>
  );
};
export default Footer;
