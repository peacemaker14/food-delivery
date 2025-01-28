import { Food } from "../../types";
import styles from "./FoodCard.module.css";

type FoodCardProps = {
  food: Food;
};

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className={styles.card}>
      {/* Image */}
      <img src={food.imageUrl} alt={food.name} className={styles.cardImage} />

      {/* Card Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{food.name}</h3>

        <div>
          <span></span>
        </div>
        {/* <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardPrice}>${price}</p>
        <button className={styles.cardButton} onClick={onAddToCart}>
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default FoodCard;
