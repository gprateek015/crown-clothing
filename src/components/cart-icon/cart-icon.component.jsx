import { connect } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartDropdown}>
    <ShoppingBag className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = state => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
