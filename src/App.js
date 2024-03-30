import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import store from './components/redux/store';

import { Provider } from'react-redux';

// import { useState } from 'react';

const App = () => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <Provider store={store}>
    <div>
      <ProductList />
      <Cart />
    </div>
    </Provider>

  );
};

export default App;
