import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice"

export const Filter = ({ category }) => {

  const selectedCategory = useSelector(getSelectedCategory);
  const dispatch = useDispatch();

  return (
    <div>
      <p onClick={() => dispatch(filterCategory(category))}
      className={ selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton' } >
        { category }
        </p>
    </div>
  )
}