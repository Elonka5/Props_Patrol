import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './TogglePasswordVisibility.module.css';

export const TogglePasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <div className={css.passwordicon}>
      {showPassword ? (
        <FaEye onClick={onToggle} />
      ) : (
        <FaEyeSlash onClick={onToggle} />
      )}
    </div>
  );
};

TogglePasswordIcon.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
