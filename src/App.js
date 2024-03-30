import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>

  );
};

export default App;
