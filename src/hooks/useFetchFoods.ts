import useSWR from "swr";

import { Food } from "../types";

type FoodsResponse = {
  foods: Food[];
};

const FOOD_API_URL =
  "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFetchFoods() {
  const { data, error, isLoading } = useSWR<FoodsResponse>(
    FOOD_API_URL,
    fetcher,
  );

  return {
    foods: data?.foods,
    isLoading,
    isError: error,
  };
}
