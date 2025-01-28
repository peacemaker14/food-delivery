import "./App.css";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
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
    </>
  );
}

export default App;
