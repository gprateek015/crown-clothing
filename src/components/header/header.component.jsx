import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utlis';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';
import ContactPopup from './contact-popup';
import { useState } from 'react';

const Header = ({ currentUser, cartHidden }) => {
  const [contactPopupOpen, setContachPopupOpen] = useState(false);

  const handleContactClick = () => {
    setContachPopupOpen(curr => !curr);
  };

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <div className='contact-wrapper'>
          <div className='option' onClick={handleContactClick}>
            CONTACT
          </div>
          <ContactPopup open={contactPopupOpen} />
        </div>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden ? <CartDropdown /> : null}
    </div>
  );
};

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   cartHidden: selectCartHidden(state),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
