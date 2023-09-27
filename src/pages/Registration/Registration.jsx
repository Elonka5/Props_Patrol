import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterPageWrapper } from './Registration.styled';

const Registration = () => {
  return (
    <RegisterPageWrapper>
      {/* <div style={{ overflowY: 'auto', height: '100%' }}> */}
      <RegisterForm />
      {/* </div> */}
    </RegisterPageWrapper>
  );
};

export default Registration;
