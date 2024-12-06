export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  salePrice?: number;
  isBestseller?: boolean;
  isOnSale?: boolean;
}