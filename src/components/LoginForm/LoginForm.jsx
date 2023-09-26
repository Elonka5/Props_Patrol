import React from 'react';
import css from './LoginForm.module.css';

import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { logInThunk } from 'redux/authOperations';
import { usePasswordToggle } from 'hooks/usePasswordToggle';
import { FormError } from 'components/FormError/FormError';
import { loginSchema } from 'services/validation/validationLoginSchema';

const LoginForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
    'password2',
  ]);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInThunk(values))
      .unwrap()
      .then(data => {
        resetForm();
        toast.success(
          `Well done  ${data.user.username}! You have signed in successfully.`
        );
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className={css.loginform}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <form>
          <div>
            <div div className={css.wrappericon}>
              <input
                type="email"
                name="email"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
                placeholder="E-mail"
                autoComplete="off"
                required
              />
            </div>
            <ErrorMessage name="email" component={FormError} />
            <div className={css.wrappericon3}>
              <div className={css.wrappericon2}>
                <input
                  type={showPasswords.password1 ? 'text' : 'password'}
                  name="password"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
              </div>
              <togglePasswordIcon
                showPassword={showPasswords.password1}
                onToggle={() => togglePasswordVisibility('password1')}
              />
            </div>
            <ErrorMessage name="password" component={FormError} />
          </div>
          <Button type="submit" text="log in">
            <Link to="/registration">
              <Button text="registration" variant="secondary" />
            </Link>
          </Button>
        </form>
      </Formik>
    </div>
  );
};

export default LoginForm;
