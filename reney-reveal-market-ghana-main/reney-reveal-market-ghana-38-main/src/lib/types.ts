
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured?: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: number;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export type Category = 'clothing' | 'accessories' | 'jewelry' | 'bags' | 'all';

export type CartItemType = CartItem;
