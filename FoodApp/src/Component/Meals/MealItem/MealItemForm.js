import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../Store/cart-context";

const MealItemForm = (props) => {
  const cartctx = useContext(CartContext);
  console.log('reintialized cartcntx',cartctx)
  const addItemToCart = (event)=>{
    event.preventDefault();
    //upDate the cartcntx.items
    // cartctx.items.push(props.item)
    // console.log(props.item,'----propsitem')
    const quantity = document.getElementById("amount_" +props.id).value
    console.log(quantity,'----quantity')
    cartctx.addItem({...props.item, quantity: quantity})
    
    console.log('after addItemToCart',cartctx);
   
  }
  return (
    <form className={classes.form}>
    {console.log('inside reder',cartctx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};
export default MealItemForm;
