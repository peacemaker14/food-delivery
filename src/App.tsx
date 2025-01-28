import "./App.css";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import FoodCard from "./components/FoodCard/FoodCard";
import { useFetchCategories } from "./hooks/useFetchCategories";
import { useFetchFoods } from "./hooks/useFetchFoods";

function App() {
  const { categories } = useFetchCategories();
  const { foods } = useFetchFoods();

  console.log(foods);

  return (
    <>
      <h1>Food Delivery</h1>
      {categories ? <CategoryTabs categories={categories} /> : null}
      {foods ? <FoodCard food={foods[0]} /> : null}
      {foods ? <FoodCard food={foods[1]} /> : null}
      {foods ? <FoodCard food={foods[4]} /> : null}
      {foods ? <FoodCard food={foods[10]} /> : null}
    </>
  );
}

export default App;
