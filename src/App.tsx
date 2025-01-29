import FoodsContainer from "./containers/FoodsContainer/FoodsContainer";
import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const { categories } = useFetchCategories();

  return (
    <>
      <h1>Food Delivery</h1>
      {categories ? <FoodsContainer categories={categories} /> : null}
    </>
  );
}

export default App;
