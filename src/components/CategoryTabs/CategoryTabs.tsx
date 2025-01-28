import { useState } from "react";
import { Category } from "../../types";
import styles from "./CategoryTabs.module.css";

type CategoryTabsProps = {
  onCategorySelect?: (categoryId: string) => void;
  categories: Category[];
};

const CategoryTabs = ({ onCategorySelect, categories }: CategoryTabsProps) => {
  const [selected, setSelected] = useState<Category>(categories[0]);

  const handleSelect = (category: Category) => {
    setSelected(category);
    onCategorySelect?.(category.id);
  };

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.tab} ${selected.id === category.id ? styles.active : ""}`}
          onClick={() => handleSelect(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
