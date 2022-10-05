/**
 * Interface segregation principle
 * Os clientes não devem ser forçados a depender de interfaces que não utilizam
 */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoPercentDiscount } from './classes/discount';
import { IndividualCustomer, EnterpriseCustomer } from './classes/customer';

const shoppingCart = new ShoppingCart(new NoPercentDiscount());
const messaging = new Messaging();
const persistency = new Persistency();
// const customer1 = new IndividualCustomer('Lucas', 'Dev', '365.439.227-02');
const customer2 = new EnterpriseCustomer('Think So!', '90.881.235/0001-22');
const order = new Order(shoppingCart, messaging, persistency, customer2);

shoppingCart.addItem(
  new Product('Camiseta', 49.9),
  new Product('Camiseta', 49.9),
  new Product('Camiseta', 49.9),
);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
