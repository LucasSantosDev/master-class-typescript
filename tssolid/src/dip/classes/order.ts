import { OrderStatus } from './interfaces/order-status';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _status: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrderProtocol,
  ) {}

  get status(): OrderStatus {
    return this._status;
  }

  set status(status: OrderStatus) {
    this._status = status;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this.status = 'closed';

    this.messaging.sendMessage(
      `Cliente: ${this.customer.getName()} | Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
  }
}
