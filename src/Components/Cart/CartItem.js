import dishesData from "../../Data/DataDishes"

export const CartItem = ({ cartItem }) => {

  console.log(cartItem)
  const dishes = dishesData.find(item => item.id === cartItem.dishId);
  return (
    <div>
      <h2>{ dishes.name }</h2>
      <p>{ cartItem.quantity } portion(s)</p>
      <p>Price: ${ dishes.price * cartItem.quantity }</p>
    
    </div>
  )
}