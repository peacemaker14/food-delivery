import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, mock, test } from "bun:test";

import { createMockCategories } from "../../mocks/factories/category.factory";
import { createMockFoods } from "../../mocks/factories/food.factory";
import FoodsContainer from "./FoodsContainer";

const mockCategories = createMockCategories();
const mockFoods = createMockFoods(20);

describe("FoodsContainer", () => {
  beforeEach(() => {
    mock.module("../../hooks/useFetchCategories", () => ({
      useFetchCategories: () => ({
        categories: mockCategories,
        isLoading: false,
        isError: null,
      }),
    }));

    mock.module("../../hooks/useFetchFoods", () => ({
      useFetchFoods: () => ({
        foods: mockFoods,
        isLoading: false,
        isError: null,
      }),
    }));
  });

  test("updates search query when typing in search input", async () => {
    render(<FoodsContainer categories={mockCategories} />);
    const searchInput = screen.getByPlaceholderText("Enter food name...");
    await userEvent.type(searchInput, "pizza");
    expect(searchInput).toHaveValue("pizza");
  });

  test("filters foods by search query", async () => {
    render(<FoodsContainer categories={mockCategories} />);
    const searchInput = screen.getByPlaceholderText("Enter food name...");
    await userEvent.type(searchInput, "Food item");
    const foodItems = await screen.findAllByTestId("food-item");
    const searchedFoods = mockFoods.filter((food) =>
      food.name.toLowerCase().includes("food item"),
    );
    expect(foodItems).toHaveLength(Math.min(12, searchedFoods.length));
  });

  test("filters foods by category", async () => {
    render(<FoodsContainer categories={mockCategories} />);
    await userEvent.click(screen.getByText(mockCategories[0].name));
    const foodItems = await screen.findAllByTestId("food-item");
    const categoryFoods = mockFoods.filter(
      (food) => food.categoryId === mockCategories[0].id,
    );
    expect(foodItems).toHaveLength(Math.min(12, categoryFoods.length));
  });
});
