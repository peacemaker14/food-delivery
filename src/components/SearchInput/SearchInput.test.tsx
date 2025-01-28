import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, mock, test } from "bun:test";

import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  test("renders with default placeholder", () => {
    render(<SearchInput value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText("Enter food name...")).toBeDefined();
  });

  test("renders with custom placeholder", () => {
    render(
      <SearchInput
        value=""
        onChange={() => {}}
        placeholder="Search foods..."
      />,
    );
    expect(screen.getByPlaceholderText("Search foods...")).toBeDefined();
  });

  test("displays provided value", () => {
    render(<SearchInput value="Pizza" onChange={() => {}} />);
    expect(screen.getByDisplayValue("Pizza")).toBeDefined();
  });

  test("calls onChange when input value changes", () => {
    const handleChange = mock();
    render(<SearchInput value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Burger" } });

    expect(handleChange).toHaveBeenCalledWith("Burger");
  });
});
