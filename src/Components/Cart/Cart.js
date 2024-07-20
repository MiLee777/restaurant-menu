import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"

export const Cart = () => {

  const cartItems = useSelector(getCartItems);

  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="Cart"/> 
      <h2>Total: ${ totalPrice }</h2>
      {cartItems.map((cartItem, index) => <CartItem cartItem={ cartItem } key={ index } />)}
    </div>
  )
}