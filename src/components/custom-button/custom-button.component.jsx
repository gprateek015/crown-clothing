import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleButton, ...otherProps }) => (
  <button
    className={`${isGoogleButton ? 'google-button' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
