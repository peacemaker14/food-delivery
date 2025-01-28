import FoodCard from "../../components/FoodCard/FoodCard";
import { useFetchFoods } from "../../hooks/useFetchFoods";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import styles from "./Foods.module.css";

type FoodsProps = {
  categoryId?: string;
};

const Foods = ({ categoryId }: FoodsProps) => {
  const { foods } = useFetchFoods();
  const { displayedData, hasMore, loadMore } = useInfiniteScroll({
    data: categoryId
      ? (foods?.filter((food) => food.categoryId === categoryId) ?? [])
      : (foods ?? []),
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
