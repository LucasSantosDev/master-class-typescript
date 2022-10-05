/**
 * Liskov substitution principle
 * Se para cada objeto O1 do tipo S existe um objeto O2 do tipo T, tal que,
 * para todos os programas P definidos em termos de T, o comportamento de P fica
 * inalterado quando O1 é substituído por O2, então S é um subtipo de T.
 *
 * - Mais simples: Subtipos precisam ser substitutiveis por seus tipos de base.
 * -- Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro
 * (que herda de Animal) deve servir como qualquer outro Animal.
 */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoPercentDiscount } from './classes/discount';

const shoppingCart = new ShoppingCart(new NoPercentDiscount());
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
