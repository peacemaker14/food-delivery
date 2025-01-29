export const roundToOneDecimal = (value: number): number => {
  return Math.round(value * 10) / 10;
};

export interface FetchError extends Error {
  info?: unknown;
  status?: number;
}

export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error: FetchError = new Error(
        "An error occurred while fetching the data.",
      );
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
    return response.json() as Promise<T>;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Network error: " + error.message);
    }
    throw new Error("An unknown error occurred");
  }
};
