import { useState } from "react";

import styles from "./CategoryTabs.module.css";

type CategoryTabsProps = {
  onCategorySelect?: (category: string) => void;
  categories: string[];
};

const CategoryTabs = ({ onCategorySelect, categories }: CategoryTabsProps) => {
  const [selected, setSelected] = useState("All");

  const handleSelect = (category: string) => {
    setSelected(category);
    onCategorySelect?.(category);
  };

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.tab} ${selected === category ? styles.active : ""}`}
          onClick={() => handleSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
