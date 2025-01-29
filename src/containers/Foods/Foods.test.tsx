import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, mock, test } from "bun:test";

import { createMockFoods } from "../../mocks/factories/food.factory";
import Foods from "./Foods";

describe("Foods Component", () => {
  const mockFoods = createMockFoods(20);

  const setupTest = (options = {}) => {
    const defaultProps = {
      categoryId: undefined,
      searchQuery: undefined,
    };

    return render(<Foods {...defaultProps} {...options} />);
  };

  beforeEach(() => {
    mock.module("../../hooks/useFetchFoods", () => ({
      useFetchFoods: () => ({
        foods: mockFoods,
        isLoading: false,
        error: null,
      }),
    }));
  });

  test("renders initial 12 food items", () => {
    setupTest();
    const foodItems = screen.getAllByTestId("food-item");
    expect(foodItems).toHaveLength(12); // Default itemsPerPage is 12
  });

  test("shows load more button when more items available", () => {
    setupTest();
    expect(screen.getByText("+ Show More")).toBeInTheDocument();
  });

  test("loads more items when clicking load more", () => {
    setupTest();
    const loadMoreButton = screen.getByText("+ Show More");
    fireEvent.click(loadMoreButton);
    const foodItems = screen.getAllByTestId("food-item");
    expect(foodItems).toHaveLength(20); // All items should be shown
  });

  test("filters foods by category", () => {
    const categoryId = mockFoods[0].categoryId;
    setupTest({ categoryId });
    const foodItems = screen.getAllByTestId("food-item");
    const categoryFoods = mockFoods.filter(
      (food) => food.categoryId === categoryId,
    );
    expect(foodItems).toHaveLength(Math.min(12, categoryFoods.length));
  });

  test("filters foods by search query", () => {
    const searchQuery = mockFoods[0].name.substring(0, 3);
    setupTest({ searchQuery });
    const foodItems = screen.getAllByTestId("food-item");
    const searchedFoods = mockFoods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    expect(foodItems).toHaveLength(Math.min(12, searchedFoods.length));
  });

  test("handles empty search results", () => {
    setupTest({ searchQuery: "nonexistent food item" });
    const foodItems = screen.queryAllByTestId("food-item");
    expect(foodItems).toHaveLength(0);
  });

  test("combines category and search filters", () => {
    const categoryId = mockFoods[0].categoryId;
    const searchQuery = mockFoods[0].name.substring(0, 3);
    setupTest({ categoryId, searchQuery });
    const foodItems = screen.getAllByTestId("food-item");
    const filteredFoods = mockFoods.filter(
      (food) =>
        food.categoryId === categoryId &&
        food.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    expect(foodItems).toHaveLength(Math.min(12, filteredFoods.length));
  });
});
