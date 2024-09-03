import { useContext } from 'react';
import { UserContext } from '../../context/UserConext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = (page) => {
  const { user } = useContext(UserContext);
  const navigete = useNavigate();

  if (user) {
    return page;
  } else {
    Swal.fire({
      text: '먼저 로그인 해주세요!',
      icon: 'error',
      confirmButtonText: '확인'
    }).then(() => {
      // then을 이용해 alert 확인 버튼 클릭 후 로그인 페이지 이동하도록 구현
      navigete('/login');
    });
  }

  return null;
};

export default PrivateRoute;
