import PropTypes from 'prop-types';
import React from 'react';
import { IndicatorWrapper } from './ConfirmPasswordIndicator.styled';

export const ConfirmPasswordIndicator = ({
  passwordsMatch,
  values: { confirmPassword },
}) => {
  const width = passwordsMatch ? '80%' : '50%';
  return (
    confirmPassword && (
      <IndicatorWrapper passwordsMatch={passwordsMatch} style={{ width }} />
    )
  );
};

ConfirmPasswordIndicator.propTypes = {
  passwordsMatch: PropTypes.bool.isRequired,
};
