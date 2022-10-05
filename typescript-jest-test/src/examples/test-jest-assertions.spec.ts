describe('Primitive values', () => {
  it('should test jest assertions 1', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(null).toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
  });

  it('should test jest assertions 2', () => {
    const number = 10;

    expect(number).not.toBe('lucas');
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);
    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Lucas', age: 26 };

    const anotherPerson = { ...person };

    expect(person).not.toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 26);
    expect(person).not.toHaveProperty('lastName');
  });
});
