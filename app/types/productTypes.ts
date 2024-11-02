export interface ProductTypes {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: Rate;
}

export type Rate = {
  rate: number;
  count: number;
};
