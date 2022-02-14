import './cart-item.styles.scss';

const CartItem = ({ name, imageUrl, price, quantity }) => (
  <div className='cart-item'>
    <img src={imageUrl} />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
