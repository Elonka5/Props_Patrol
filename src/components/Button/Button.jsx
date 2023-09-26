import PropTypes from 'prop-types';
// import css from './Button.module.css';

export const Button = ({
  onClick = null,
  text,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <button type={type} onClick={onClick} variant={variant}>
      {text}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};
