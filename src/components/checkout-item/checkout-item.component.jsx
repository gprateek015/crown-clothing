import { connect } from 'react-redux';

import {
  removeItem,
  addItem,
  decreaseQuantity,
} from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseQuantity }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span
          className='quantity-update'
          onClick={() => decreaseQuantity(cartItem)}
        >
          &#10094;
        </span>
        <span className='values'>{quantity}</span>
        <span className='quantity-update' onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </div>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
