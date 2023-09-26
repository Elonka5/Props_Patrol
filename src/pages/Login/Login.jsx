import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.logincontainer}>
      <LoginForm />
    </div>
  );
};

export default Login;
