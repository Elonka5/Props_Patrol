import React from 'react';
import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { signUpThunk } from '../../redux/authOperations';
import { toast } from 'react-toastify';
import { ErrorMessage, Formik, useFormikContext } from 'formik';
import { registerSchema } from '../../services/validation/validationRegisterSchema';
import { TogglePasswordIcon } from '../TogglePasswordVisibility/TogglePasswordVisibility';
import { IndicatorPasswordStrenght } from '../IndicatorPasswordStrenght/IndicatorPasswordStrenght';
import { FormError } from '../FormError/FormError';
import { ConfirmPasswordIndicator } from '../ConfirmPasswordIndicator/ConfirmPasswordIndicator';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { usePasswordToggle } from '../../hooks/usePasswordToggle';

const RegisterForm = () => {
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
    const { email, password } = values;
    dispatch(signUpThunk({ email, password }))
      .unwrap()
      .then(data => {
        resetForm();
        toast.success(
          `${data.user.username}, thanks for signing up. Welcome to Money Guard! We are happy to have you on board.`
        );
      })
      .catch(error => {
        toast.error(error.message);
      });
    resetForm();
  };
  const formik = useFormikContext();
  return (
    <div className={css.registerform}>
      <Formik
        initialValues={initialValues}
        registerSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <form autoComplete="off">
          <div>
            <div>
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="First name"
                required
              />
            </div>
            <TogglePasswordIcon
              showPassword={showPasswords.password1}
              onToggle={() => togglePasswordVisibility('password1')}
            />
            <IndicatorPasswordStrenght password={formik.values.password} />
            <ErrorMessage name="password" component={FormError} />
            <div>
              <div>
                <input
                  type={showPasswords.password2 ? 'text' : 'password'}
                  name="confirmPassword"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                />
              </div>
              <TogglePasswordIcon
                showPassword={showPasswords.password2}
                onToggle={() => togglePasswordVisibility('password2')}
              />
            </div>
            <ConfirmPasswordIndicator
              password={formik.values.password}
              confirmPassword={formik.values.confirmPassword}
            />
            <ErrorMessage name="confirmPassword" component={FormError} />
          </div>
          <div>
            <Button type="submit" text="register" />
            <Link to="/login">Log in</Link>
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
