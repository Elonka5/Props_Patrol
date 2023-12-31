import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsLoggedIn, selectUserIsRefresh } from 'redux/selectors';

const PrivateRoute = ({ children, redirectTo }) => {
  const userIsLogin = useSelector(selectUserIsLoggedIn);
  const userIsRefresh = useSelector(selectUserIsRefresh);
  const shouldRedirect = !userIsLogin && !userIsRefresh;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PrivateRoute;
