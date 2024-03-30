import React from 'react';

// import {connect} from 'react-redux';

import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const mapStateToProps = state => ({
//   cart: state.cart
// });

// export default connect(mapStateToProps)(Cart);
export default Cart;