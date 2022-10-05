import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(...items: CartItem[]): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  clear(): void;
  isEmpty(): boolean;
}
