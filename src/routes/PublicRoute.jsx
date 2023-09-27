import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children, redirectTo }) => {
  const userIsLogin = useSelector(selectUserIsLoggedIn);
  return !userIsLogin ? children : <Navigate to={redirectTo} />;
};

export default PublicRoute;
