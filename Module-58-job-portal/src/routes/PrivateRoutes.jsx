import { useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoutes;
