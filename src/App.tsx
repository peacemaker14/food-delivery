import "./App.css";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";

const categories = [
  { id: "all", name: "All" },
  {
    id: "6288a89f1f0152b8c2cd512b",
    name: "Sushi",
  },
  {
    id: "6288a89f7338764f2071a8a8",
    name: "Pizza",
  },
  {
    id: "6288a89f70dc8cf93b71609b",
    name: "Hot Meals",
  },
  {
    id: "6288a89fe6c2fe0b758360fe",
    name: "Desserts",
  },
  {
    id: "6288a89fac9e970731bfaa7b",
    name: "Drinks",
  },
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
