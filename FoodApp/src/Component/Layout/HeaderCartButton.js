import { useContext } from "react";

import CartIcon from "../Chart/CartIcon";
import CartContext from "../../Store/cart-context";
import classes from "./HeaderCartButton.module.css";
// import Cart from "../Chart/Cart";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx, "-------header cart");
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    console.log(item, "----item");
    quantity = quantity + Number(item.quantity);
  });
  console.log(quantity, "----quantity");

  // const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
  //   return curNumber + item.amount;
  // },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span>{cartCtx.message}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
