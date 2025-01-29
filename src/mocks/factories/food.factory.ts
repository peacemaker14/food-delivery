import { Food, Promotion } from "../../types";

export const createMockFood = (overrides: Partial<Food> = {}): Food => ({
  id: "628b5decc94a27754f30e6f1",
  index: 0,
  rating: 3.9508,
  promotion: Promotion.Gift,
  isNew: false,
  categoryId: "6288a89fac9e970731bfaa7b",
  minCookTime: 80,
  maxCookTime: 100,
  restaurant: "Niquent",
  name: "Niquent Drinks",
  imageUrl:
    "https://zen.wego.com/cdn-cgi/image/width=600/web/mock/exam/drink.jpg",
  ...overrides,
});

export const createMockFoods = (count = 20): Food[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `food-${index}`,
    name: `Food Item ${index}`,
    description: `Description for food item ${index}`,
    price: 10 + index,
    imageUrl: `https://example.com/food-${index}.jpg`,
    categoryId: `category-${Math.floor(index / 4)}`, // 4 items per category
    isNew: index % 5 === 0,
    promotion: index % 3 === 0 ? Promotion.Discount : null,
    index: 0,
    rating: 3.9508,
    minCookTime: 80,
    maxCookTime: 100,
    restaurant: "Niquent",
  }));
};
