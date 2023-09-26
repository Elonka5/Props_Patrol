import styled from 'styled-components';
import bgImage from 'assets/images/GradientRegister.png';
import mobileLoginBack from 'assets/images/mobileLoginBack.png';
export const RegisterPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #302e32;
  background-image: url(${mobileLoginBack});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url(${bgImage});
  }
`;
