import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(...items: CartItem[]): void {
    items.forEach((item) => this._items.push(item));
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, currentValue) => total + currentValue.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  clear(): void {
    console.log('Carrinho limpo');

    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}
