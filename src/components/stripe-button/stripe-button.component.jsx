import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      panelLabel='Pay Now'
      name='Crown Clothing'
      image='https://svgshare.com/i/CUz.svg'
      amount={priceForStripe}
      description={`Your total price is $${price}`}
      shippingAddress
      billingAddress
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
