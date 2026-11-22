export type ProductAvailability = "available" | "on-request" | "unavailable";

export interface Product {
  id: string;
  name: string;
  description?: string;
  category?: string;
  photo?: string;
  presentation?: string;
  weight?: string;
  price?: number;
  availability?: ProductAvailability;
  featured?: boolean;
  order?: number;
  enabled?: boolean;
}

export const products: Product[] = [];
export const ENABLE_ONLINE_ORDERS = false;
