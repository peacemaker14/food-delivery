import { useState } from "react";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import SearchInput from "./components/SearchInput/SearchInput";
import Foods from "./containers/Foods/Foods";
import { useFetchCategories } from "./hooks/useFetchCategories";

function App() {
  const { categories } = useFetchCategories();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <h1>Food Delivery</h1>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />

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
        searchQuery={searchQuery}
        categoryId={activeCategory !== "all" ? activeCategory : undefined}
      />
    </>
  );
}

export default App;
