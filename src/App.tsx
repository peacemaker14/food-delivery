import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Foods from "./containers/Foods/Foods";
import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const { categories } = useFetchCategories();

  return (
    <>
      <h1>Food Delivery</h1>
      {categories ? <CategoryTabs categories={categories} /> : null}
      <Foods />
    </>
  );
}

export default App;
