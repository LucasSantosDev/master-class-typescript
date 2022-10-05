import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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
