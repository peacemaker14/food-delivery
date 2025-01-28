import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, mock, test } from "bun:test";

import CategoryTabs from "./CategoryTabs";

mock.module("./CategoryTabs.module.css", () => ({
  default: {
    container: "container",
    tab: "tab",
    active: "active",
  },
}));

const categories = [
  "All",
  "Sushi",
  "Pizza",
  "Burgers",
  "Hot Meals",
  "Desserts",
  "Drinks",
];

describe("CategoryTabs", () => {
  test("renders all category buttons", () => {
    render(<CategoryTabs categories={categories} />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Sushi")).toBeInTheDocument();
    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(screen.getByText("Burgers")).toBeInTheDocument();
    expect(screen.getByText("Hot Meals")).toBeInTheDocument();
    expect(screen.getByText("Desserts")).toBeInTheDocument();
    expect(screen.getByText("Drinks")).toBeInTheDocument();
  });

  test('sets "All" as default selected category', () => {
    render(<CategoryTabs categories={categories} />);
    const allButton = screen.getByText("All");
    expect(allButton).toHaveClass("active");
  });

  test("changes selected category on click", () => {
    render(<CategoryTabs categories={categories} />);

    const pizzaButton = screen.getByText("Pizza");
    fireEvent.click(pizzaButton);

    expect(pizzaButton).toHaveClass("active");
    expect(screen.getByText("All")).not.toHaveClass("active");
  });

  test("calls onCategorySelect callback when category is selected", () => {
    const mockOnCategorySelect = mock();
    render(
      <CategoryTabs
        categories={categories}
        onCategorySelect={mockOnCategorySelect}
      />,
    );

    const sushiButton = screen.getByText("Sushi");
    fireEvent.click(sushiButton);

    expect(mockOnCategorySelect).toHaveBeenCalledWith("Sushi");
  });
});
