/**
 * A custom hook for implementing infinite scroll functionality.
 * This hook manages pagination of data and provides methods to load more items as needed.
 *
 * @template T - The type of items in the data array
 *
 * @param {Object} props - The hook parameters
 * @param {T[]} props.data - The complete array of items to be paginated
 * @param {number} props.itemsPerPage - Number of items to display per page
 *
 * @returns {Object} An object containing:
 *   - displayedData: The current subset of data being displayed
 *   - hasMore: Boolean indicating if there are more items to load
 *   - loadMore: Function to trigger loading the next page of items
 *
 * @example
 * ```typescript
 * const { displayedData, hasMore, loadMore } = useInfiniteScroll({
 *   data: items,
 *   itemsPerPage: 10
 * });
 * ```
 */
import { useCallback, useEffect, useMemo, useState } from "react";

interface UseInfiniteScrollProps<T> {
  data: T[];
  itemsPerPage: number;
}

export function useInfiniteScroll<T>({
  data,
  itemsPerPage,
}: UseInfiniteScrollProps<T>) {
  const [displayedData, setDisplayedData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
    const initialData = data.slice(0, itemsPerPage);
    setDisplayedData(initialData);
  }, [data, itemsPerPage]);

  const loadMore = useCallback(() => {
    const nextPage = currentPage + 1;
    const endIndex = nextPage * itemsPerPage;
    const newData = data.slice(0, endIndex);
    setDisplayedData(newData);
    setCurrentPage(nextPage);
  }, [currentPage, itemsPerPage, data]);

  const hasMore = useMemo(
    () => displayedData.length < data.length,
    [displayedData.length, data.length],
  );

  return {
    displayedData,
    hasMore,
    loadMore,
  };
}

export default useInfiniteScroll;
