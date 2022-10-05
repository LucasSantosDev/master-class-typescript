export class Employee {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

export class Company {
  readonly name: string;
  private readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setEmployee(...employee: Employee[]) {
    employee.forEach((emp) => {
      this.employees.push(emp);
    });
  }

  showEmployee() {
    this.employees.forEach((emp) => {
      console.log(emp);
    });
  }
}

const company1 = new Company("Facebook", "39.558.248/0001-08");

const employee1 = new Employee("Lucas", "Santos");
const employee2 = new Employee("Ana", "Giffoni");
const employee3 = new Employee("Samuel", "Santana");

company1.setEmployee(employee1, employee2, employee3);

console.log(company1);

company1.showEmployee();
