import GiftIcon from "../../assets/icons/gift.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";
import { Food, Promotion } from "../../types";
import { roundToOneDecimal } from "../../utils";
import styles from "./FoodCard.module.css";

const FoodCard = ({ food }: { food: Food }) => {
  return (
    <div className={styles.card}>
      {food.promotion && (
        <div
          className={`${styles.card__promotion} ${
            food.promotion === Promotion.Gift
              ? styles["card__promotion--gift"]
              : food.promotion === Promotion.Discount
                ? styles["card__promotion--discount"]
                : styles["card__promotion--freebies"]
          }`}
        >
          {food.promotion === Promotion.Gift && (
            <GiftIcon
              height="24px"
              width="24px"
              className={styles["card__promotion-icon"]}
              data-testid="gift-icon"
            />
          )}
          {food.promotion === Promotion.Discount && (
            <span className={styles["card__promotion-text"]}>%</span>
          )}
          {food.promotion === Promotion.Freebies && (
            <span className={styles["card__promotion-text"]}>1+1</span>
          )}
        </div>
      )}

      {/* Image */}
      <img src={food.imageUrl} alt={food.name} className={styles.card__image} />

      {/* Card Body */}
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{food.name}</h3>

        {/* Fields */}
        <div className={styles.card__fields}>
          <div className={styles["card__fields-field"]}>
            <StarIcon
              height="12px"
              width="12px"
              className={styles["card__fields-field-icon"]}
            />
            <span>{roundToOneDecimal(food.rating)}</span>
          </div>
          <div className={styles["card__fields-field"]}>
            <span>{`${food.minCookTime}-${food.maxCookTime} min`}</span>
          </div>
          {food.isNew && <span className={styles["card__new-label"]}>New</span>}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
