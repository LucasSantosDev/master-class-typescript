/**
 * Open/Closed principle
 * Entidades devem estar abertas para extensão, mas fechada para modificação
 */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';

const shoppingCart = new ShoppingCart(new FiftyPercentDiscount());
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(
  new Product('Camiseta', 49.9),
  new Product('Camiseta', 49.9),
  new Product('Camiseta', 49.9),
);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
