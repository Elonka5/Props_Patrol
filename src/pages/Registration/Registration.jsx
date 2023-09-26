import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './Registration.module.css';
// import { Formik } from 'formik';

const Registration = () => {
  return (
    <div className={css.registercontaner}>
      <RegisterForm />
    </div>
  );
};

export default Registration;
