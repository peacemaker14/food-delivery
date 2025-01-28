import useSWR from "swr";

import { Category } from "../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchCategories = () => {
  const { data, error, isLoading } = useSWR<Category[]>(
    "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json",
    fetcher,
  );

  return {
    categories: data,
    isLoading,
    isError: error,
  };
};
