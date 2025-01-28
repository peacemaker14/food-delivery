import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "bun:test";

import { Food, Promotion } from "../../types";
import FoodCard from "./FoodCard";

describe("FoodCard", () => {
  const mockFood: Food = {
    id: "1",
    name: "Pizza Margherita",
    imageUrl: "/images/pizza.jpg",
    rating: 4.5,
    minCookTime: 20,
    maxCookTime: 30,
    isNew: true,
    promotion: Promotion.Gift,
    categoryId: "1",
    restaurant: "Italiano",
    index: 0,
  };

  test("renders food card with basic information", () => {
    render(<FoodCard food={mockFood} />);

    expect(screen.getByText("Pizza Margherita")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("20-30 min")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  test("renders correct promotion icon for gift promotion", () => {
    render(<FoodCard food={mockFood} />);
    expect(screen.getByTestId("gift-icon")).toBeInTheDocument();
  });

  test("renders discount promotion correctly", () => {
    const discountFood = { ...mockFood, promotion: Promotion.Discount };
    render(<FoodCard food={discountFood} />);
    expect(screen.getByText("%")).toBeInTheDocument();
  });

  test("renders freebies promotion correctly", () => {
    const freebiesFood = { ...mockFood, promotion: Promotion.Freebies };
    render(<FoodCard food={freebiesFood} />);
    expect(screen.getByText("1+1")).toBeInTheDocument();
  });

  test("doesn't render promotion when there isn't one", () => {
    const noPromotionFood = { ...mockFood, promotion: null };
    render(<FoodCard food={noPromotionFood} />);
    expect(screen.queryByTestId("gift-icon")).not.toBeInTheDocument();
    expect(screen.queryByText("%")).not.toBeInTheDocument();
    expect(screen.queryByText("1+1")).not.toBeInTheDocument();
  });

  test("renders food image with correct alt text", () => {
    render(<FoodCard food={mockFood} />);
    const image = screen.getByAltText("Pizza Margherita");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/pizza.jpg");
  });
});
