import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

const SignInSignUp = props => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.currentUser) {
      navigate('/');
    }
  });
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
