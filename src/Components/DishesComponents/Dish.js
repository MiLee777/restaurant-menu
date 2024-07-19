import { useSelector } from "react-redux";
import dishesData from "../../Data/DataDishes";
import { getSelectedCategory } from "../../redux/dishesSlice";

export const Dish = () => {

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
            <button>How many portions?</button>
            <button>Add to cart</button>
          </div>
        )
      })}
    </div>
  )
}