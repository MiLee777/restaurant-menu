import { useDispatch } from "react-redux";
import { ChangeQuantuty } from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";

export const Dish = ({ dish }) => {

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <div>
      <img className="image" src={ `../images/${dish.img}.jpg`} alt="Meal" />
      <h1>{ dish.name }</h1>
      <p>${ dish.price }</p>
      <ChangeQuantuty quantity={ quantity } setQuantity={ setQuantity } />
      <button onClick={() => dispatch(addItemToCart({ dish, quantity }))}>
        Add to cart
      </button>
    </div>
  )
}