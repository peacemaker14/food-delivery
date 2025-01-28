import { useState } from "react";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import Foods from "./containers/Foods/Foods";
import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const { categories } = useFetchCategories();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <>
      <h1>Food Delivery</h1>
      {categories ? (
        <CategoryTabs
          categories={[
            {
              id: "all",
              name: "All",
            },
            ...categories,
          ]}
          onCategorySelect={(categoryId) => setActiveCategory(categoryId)}
        />
      ) : null}
      <Foods
        categoryId={activeCategory !== "all" ? activeCategory : undefined}
      />
    </>
  );
}

export default App;
