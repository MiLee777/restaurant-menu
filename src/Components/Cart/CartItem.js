import { useDispatch } from "react-redux";
import dishesData from "../../Data/DataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";

export const CartItem = ({ cartItem }) => {

  const dishes = dishesData.find(item => item.id === cartItem.dishId);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>{ dishes.name }</h3>
      <p>{ cartItem.quantity } portion(s)</p>
      <p>Price: ${ dishes.price * cartItem.quantity }</p>
      <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='Trash' /> 
      </span>
    
    </div>
  )
}