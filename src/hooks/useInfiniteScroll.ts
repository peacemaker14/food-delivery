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
