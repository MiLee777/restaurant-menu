import dishesData from "../../Data/DataDishes";

export const Dish = () => {
  return (
    <div>
      {dishesData.map(dish => {
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