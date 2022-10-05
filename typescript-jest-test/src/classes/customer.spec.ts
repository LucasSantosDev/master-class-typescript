import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have some properties', () => {
    const sut = createIndividualCustomer('Lucas', 'Santos', '476.473.419-28');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Santos');
  });

  it('should have some functions', () => {
    const sut = createIndividualCustomer('Lucas', 'Santos', '476.473.419-28');
    expect(sut.getName()).toBe('Lucas Santos');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have some properties', () => {
    const sut = createEnterpriseCustomer('Think So!', '69.966.863/0001-14');
    expect(sut.getIDN()).toBe('69.966.863/0001-14');
  });
});
