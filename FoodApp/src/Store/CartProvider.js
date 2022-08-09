
import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
const [items,updateItems] = useState([])

  const addItemToCartHandler = (item) => {
    updateItems([...items,item])
    console.log('inside addItemToCartHandler',CartContext)
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    // message: 'i am accessible anywhere'
  };
 return (
    <CartContext.Provider value={cartContext}>
    {console.log('Inside CartContext.Provider',CartContext)}
      {props.children}
    </CartContext.Provider>
 )
};
export default CartProvider;
