import { Filter } from "./Filter";

export const Categories = () => {
  return (
    <div>
      <h1>What kind of food do you like?</h1>
      {['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ALL'].map((category, index) => 
      <Filter category={ category } key={ index }/>
      )}
    </div>
  )
}