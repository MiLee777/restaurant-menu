import { useSelector } from "react-redux";
import dishesData from "../../Data/DataDishes";
import { getSelectedCategory } from "../../redux/dishesSlice";
import { ChangeQuantuty } from "../Cart/ChangeQuantity";
import { useState } from "react";

export const Dish = () => {

  const [quantity, setQuantity] = useState(1);

  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div>
      {dishesData
      .filter(dish => {
        if(selectedCategory === 'ALL') return true;
        return selectedCategory === dish.category;
      })
      .map(dish => {
        const { id, name, price, img } = dish;
        
        return (
          <div key={ id }>
            <img src={ `../images/${img}.jpg`} alt="Meal" />
            <h1>{ name }</h1>
            <p>${ price }</p>
            <ChangeQuantuty quantity={ quantity } setQuantity={ setQuantity } />
            <button>Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}