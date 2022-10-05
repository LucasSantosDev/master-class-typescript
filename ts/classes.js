"use strict";
exports.__esModule = true;
exports.Company = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    return Employee;
}());
exports.Employee = Employee;
var Company = /** @class */ (function () {
    function Company(name, cnpj) {
        this.employees = [];
        this.name = name;
        this.cnpj = cnpj;
    }
    Company.prototype.setEmployee = function () {
        var _this = this;
        var employee = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            employee[_i] = arguments[_i];
        }
        employee.forEach(function (emp) {
            _this.employees.push(emp);
        });
    };
    Company.prototype.showEmployee = function () {
        this.employees.forEach(function (emp) {
            console.log(emp);
        });
    };
    return Company;
}());
exports.Company = Company;
var company1 = new Company("Facebook", "39.558.248/0001-08");
var employee1 = new Employee("Lucas", "Santos");
var employee2 = new Employee("Ana", "Giffoni");
var employee3 = new Employee("Samuel", "Santana");
company1.setEmployee(employee1, employee2, employee3);
console.log(company1);
company1.showEmployee();
