import useSWR from "swr";

import { Category } from "../types";
import { fetcher } from "../utils";

const CATEGORIES_API_URL =
  "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json";

export const useFetchCategories = () => {
  const { data, error, isLoading } = useSWR<Category[]>(
    CATEGORIES_API_URL,
    fetcher<Category[]>,
  );

  return {
    categories: data,
    isLoading,
    isError: error,
  };
};
