import "./App.css";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import categories from "./data/categories.json";

function App() {
  return (
    <>
      <h1>Food Delivery</h1>
      <CategoryTabs categories={categories} />
    </>
  );
}

export default App;
