import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";

import { useInfiniteScroll } from "./useInfiniteScroll";

describe("useInfiniteScroll", () => {
  const mockData = Array.from({ length: 100 }, (_, i) => ({ id: i + 1 }));

  test("should initialize with correct number of items", () => {
    const { result } = renderHook(() =>
      useInfiniteScroll({ data: mockData, itemsPerPage: 20 }),
    );

    expect(result.current.displayedData.length).toBe(20);
    expect(result.current.hasMore).toBe(true);
  });

  test("should load more items when loadMore is called", () => {
    const { result } = renderHook(() =>
      useInfiniteScroll({ data: mockData, itemsPerPage: 20 }),
    );

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.displayedData.length).toBe(40);
    expect(result.current.hasMore).toBe(true);
  });

  test("should update hasMore correctly when reaching end of data", () => {
    const smallData = mockData.slice(0, 25);
    const { result } = renderHook(() =>
      useInfiniteScroll({ data: smallData, itemsPerPage: 20 }),
    );

    act(() => {
      result.current.loadMore();
    });

    expect(result.current.displayedData.length).toBe(25);
    expect(result.current.hasMore).toBe(false);
  });

  test("should reset when data changes", () => {
    const { result, rerender } = renderHook(
      ({ data, itemsPerPage }) => useInfiniteScroll({ data, itemsPerPage }),
      { initialProps: { data: mockData, itemsPerPage: 20 } },
    );

    act(() => {
      result.current.loadMore();
    });

    const newData = mockData.slice(0, 50);
    rerender({ data: newData, itemsPerPage: 20 });

    expect(result.current.displayedData.length).toBe(20);
    expect(result.current.hasMore).toBe(true);
  });
});
