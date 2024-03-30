import React from 'react';

// import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';

import addToCart from './redux/action';


const ProductList = () => {

  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 100 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (product) => dispatch(addToCart(product))
// })

// export default connect(null, mapDispatchToProps)(ProductList);
export default ProductList;