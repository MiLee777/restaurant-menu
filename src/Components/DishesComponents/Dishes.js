import { Dish } from "./Dish";
import { useSelector } from "react-redux";
import dishesData from "../../Data/DataDishes";
import { getSelectedCategory } from "../../redux/dishesSlice";


export const Dishes = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      {dishesData
      .filter(dish => {
        if(selectedCategory === 'ALL') return true;
        return selectedCategory === dish.category;
      })
      .map((dish, index) => <Dish dish={ dish } key={ index }/>)}
    </div>
  )
}