import { useState } from "react";

import CategoryTabs from "../../components/CategoryTabs/CategoryTabs";
import SearchInput from "../../components/SearchInput/SearchInput";
import { Category } from "../../types";
import Foods from "../Foods/Foods";

type FoodsContainerProps = {
  categories: Category[];
};

const FoodsContainer = ({ categories }: FoodsContainerProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <CategoryTabs
        categories={[{ id: "all", name: "All" }, ...categories]}
        onCategorySelect={(categoryId) => setActiveCategory(categoryId)}
      />
      <Foods
        categoryId={activeCategory !== "all" ? activeCategory : undefined}
        searchQuery={searchQuery}
      />
    </>
  );
};

export default FoodsContainer;
