import PropTypes from 'prop-types';
import { usePasswordStrength } from 'hooks/usePasswordStrength';
import {
  PasswordStrengthIndicator,
  PasswordStrengthText,
} from './IndicatorPasswordStrenght.styled';

export const IndicatorPasswordStrenght = ({ values }) => {
  const {
    getPasswordStrengthWidth,
    getPasswordStrengthColor,
    getPasswordStrengthText,
  } = usePasswordStrength();

  return (
    <>
      <PasswordStrengthIndicator
        width={getPasswordStrengthWidth(values.password)}
        color={getPasswordStrengthColor(values.password)}
      />
      <PasswordStrengthText color={getPasswordStrengthColor(values.password)}>
        {getPasswordStrengthText(values.password)}
      </PasswordStrengthText>
    </>
  );
};

IndicatorPasswordStrenght.propTypes = {
  values: PropTypes.shape({
    password: PropTypes.string,
  }).isRequired,
};
