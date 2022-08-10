import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
//   const [quant,setQant]=useState()
// console.log(quant,'----quant')

  const cartItemRemoveHandler = (id) => {
    console.log(id,'---------id')
    cartcntx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        
          <li className={classes['cart-item']}>
      <div >
       
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{item.price}</span>
          <span className={classes.quantity}>x {item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>cartItemRemoveHandler(item.id)}>−</button>
        <button onClick={item.onAdd}>+</button>
      </div>
    </li>
      ))}
    </ul>
  );

  const prices = cartcntx.items.map((item) => item.price);    // took prices in array
  let total = 0;
  for (var i = 0; i < prices.length; i++) {          // added prices for total
    total += prices[i];
  }

  const totalAmountt = total.toFixed(2);

  return (
    <Modal onclose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountt}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
