import React from 'react';
import { TitleLogo, WrapperLogo } from './Logo.styled';
import moneyGuardLogo from 'assets/images/moneyGuardLogo.svg';

export const Logo = () => {
  return (
    <WrapperLogo>
      <img src={moneyGuardLogo} alt="MoneyGuard Logo" />
      <TitleLogo>Money Guard</TitleLogo>
    </WrapperLogo>
  );
};
