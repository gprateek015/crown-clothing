import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleButton,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleButton ? 'google-button' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
