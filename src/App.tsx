import FoodsContainer from "./containers/FoodsContainer/FoodsContainer";
import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const { categories, isLoading, isError } = useFetchCategories();

  return (
    <>
      <h1>Food Delivery</h1>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Error loading categories"
      ) : categories ? (
        <FoodsContainer categories={categories} />
      ) : null}
    </>
  );
}

export default App;
