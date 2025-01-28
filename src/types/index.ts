export type Category = {
  id: string;
  name: string;
};

export enum Promotion {
  Gift = "gift",
  Discount = "discount",
  Freebies = "1+1",
}

export type Food = {
  id: string;
  index: number;
  rating: number;
  promotion: Promotion | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
};
