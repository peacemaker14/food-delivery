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
  { id: "all", name: "All" },

  {
    id: "6288a89f1f0152b8c2cd512b",
    name: "Sushi",
  },
  {
    id: "6288a89f7338764f2071a8a8",
    name: "Pizza",
  },
  {
    id: "6288a89f70dc8cf93b71609b",
    name: "Hot Meals",
  },
  {
    id: "6288a89fe6c2fe0b758360fe",
    name: "Desserts",
  },
  {
    id: "6288a89fac9e970731bfaa7b",
    name: "Drinks",
  },
];

describe("CategoryTabs", () => {
  test("renders all category buttons", () => {
    render(<CategoryTabs categories={categories} />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Sushi")).toBeInTheDocument();
    expect(screen.getByText("Pizza")).toBeInTheDocument();
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

    const sushiButton = screen.getByText(categories[0].name);
    fireEvent.click(sushiButton);

    expect(mockOnCategorySelect).toHaveBeenCalledWith(categories[0].id);
  });
});
