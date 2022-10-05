/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Order } from './order';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { CartItem } from './interfaces/cart-item';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(...items: CartItem[]): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 1;
  }
  clear(): void {}
  isEmpty(): boolean {
    return true;
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrderProtocol {
  getName(): string {
    return '';
  }

  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  };
};

describe('ShoppingCart', () => {
  afterEach(() => jest.clearAllMocks());

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.status).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.status).toBe('closed');
  });

  // it('should send a email to customer', () => {
  //   const { sut, messagingMock } = createSut();
  //   const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');

  //   sut.checkout();

  //   expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  // });

  // it('should persistency data', () => {
  //   const { sut, persistencyMock } = createSut();
  //   const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');

  //   sut.checkout();

  //   expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  // });

  // it('should clear cart', () => {
  //   const { sut, shoppingCartMock } = createSut();
  //   const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');

  //   sut.checkout();

  //   expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  // });
});
