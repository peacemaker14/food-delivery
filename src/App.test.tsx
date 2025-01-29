import { render, screen } from "@testing-library/react";
import { describe, expect, mock, test } from "bun:test";

import App from "./App";

describe("App", () => {
  test("renders Food Delivery heading", () => {
    render(<App />);
    expect(screen.getByText("Food Delivery")).toBeInTheDocument();
  });

  test("shows loading state initially", () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows error message when categories fetch fails", async () => {
    // Mock SWR to return error
    mock.module("swr", () => ({
      default: () => ({
        data: null,
        error: new Error("Failed to fetch"),
        isLoading: false,
      }),
    }));

    render(<App />);
    expect(screen.getByText("Error loading categories")).toBeInTheDocument();
  });

  test("renders FoodsContainer when categories are loaded", async () => {
    // Mock SWR to return sample data
    mock.module("swr", () => ({
      default: () => ({
        data: [{ id: 1, name: "Test Category" }],
        error: null,
        isLoading: false,
      }),
    }));

    render(<App />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Error loading categories"),
    ).not.toBeInTheDocument();
  });
});
