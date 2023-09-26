import styled from 'styled-components';
import bgImage from 'assets/images/bgLoginPage.png';
import mobileLoginBack from 'assets/images/mobileLoginBack.png';

export const BgImage = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-repeat: no-repeat;

  background: #302e32;

  background-size: cover;
  background-image: url(${mobileLoginBack});
  @media (min-width: 768px) {
    background-image: url(${bgImage});
  }
`;
