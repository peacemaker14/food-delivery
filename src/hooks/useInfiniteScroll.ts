import { useEffect, useState } from "react";

interface UseInfiniteScrollProps<T> {
  data: T[];
  itemsPerPage: number;
}

interface UseInfiniteScrollReturn<T> {
  displayedData: T[];
  hasMore: boolean;
  loadMore: () => void;
}

export function useInfiniteScroll<T>({
  data,
  itemsPerPage,
}: UseInfiniteScrollProps<T>): UseInfiniteScrollReturn<T> {
  const [displayedData, setDisplayedData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const initialData = data.slice(0, itemsPerPage);
    setDisplayedData(initialData);
  }, [data, itemsPerPage]);

  const loadMore = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const newData = data.slice(0, endIndex);
    setDisplayedData(newData);
    setCurrentPage((prev) => prev + 1);
  };

  const hasMore = displayedData.length < data.length;

  return {
    displayedData,
    hasMore,
    loadMore,
  };
}

export default useInfiniteScroll;
