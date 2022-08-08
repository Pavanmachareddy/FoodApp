import React, { Fragment ,useState}  from 'react';
import Cart from './Component/Chart/Cart';

import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';

function App() {
  const[cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }


  return (
    <Fragment>
    { cartIsShown &&  <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
    
  );
}

export default App;
