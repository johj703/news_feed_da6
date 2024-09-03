import { useContext } from 'react';
import { UserContext } from '../../context/UserConext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (el) => {
  const { user } = useContext(UserContext);

  console.log('Current user:', user);

  return user ? el : <Navigate to="/login" />;
};

export default PrivateRoute;
