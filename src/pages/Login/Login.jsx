import { LoginForm } from 'components/LoginForm/LoginForm';
import { BgImage } from './Login.styled';

const Login = () => {
  return (
    <BgImage>
      {/* <div style={{ overflowY: 'auto', height: '100%' }}> */}
      <LoginForm />
      {/* </div> */}
    </BgImage>
  );
};

export default Login;
