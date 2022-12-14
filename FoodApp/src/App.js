import React, { useState}  from 'react';
import Cart from './Component/Chart/Cart';

import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
import CartProvider from './Store/CartProvider';
// import CartContext from './Store/cart-context';

function App() {
  const[cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }


  return (
    <CartProvider>
    { cartIsShown &&  <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
    
  );
}

export default App;
