import { useMemo } from "react";

import FoodCard from "../../components/FoodCard/FoodCard";
import { useFetchFoods } from "../../hooks/useFetchFoods";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import styles from "./Foods.module.css";
type FoodsProps = {
  categoryId?: string;
  searchQuery?: string;
};

const Foods = ({ categoryId, searchQuery }: FoodsProps) => {
  const { foods } = useFetchFoods();
  const filteredFoods = useMemo(
    () =>
      foods?.filter((food) => {
        if (categoryId && searchQuery) {
          return (
            food.categoryId === categoryId &&
            food.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        if (categoryId) {
          return food.categoryId === categoryId;
        }
        if (searchQuery) {
          return food.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
      }) ?? [],
    [foods, categoryId, searchQuery],
  );

  const { displayedData, hasMore, loadMore } = useInfiniteScroll({
    data: filteredFoods,
    itemsPerPage: 12,
  });

  return (
    <>
      <div className={styles.foods}>
        {foods
          ? displayedData.map((food, key) => <FoodCard food={food} key={key} />)
          : null}
      </div>
      {hasMore ? (
        <button className={styles["load-more-button"]} onClick={loadMore}>
          + Load More
        </button>
      ) : null}
    </>
  );
};

export default Foods;
