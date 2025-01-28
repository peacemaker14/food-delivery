import "./App.css";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";

const categories = [
  "All",
  "Sushi",
  "Pizza",
  "Burgers",
  "Hot Meals",
  "Desserts",
  "Drinks",
];

function App() {
  return (
    <>
      <h1>Food Delivery</h1>
      <CategoryTabs categories={categories} />
    </>
  );
}

export default App;
