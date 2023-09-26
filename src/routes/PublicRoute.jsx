import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const userIsLogin = useSelector(selectUserIsLoggedIn);
  return !userIsLogin ? children : <Navigate to="/" />;
};

export default PublicRoute;
