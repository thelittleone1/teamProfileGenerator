// Creating a class to define an Employee

class Employee {
    constructor(name, idNumber, email) {
        this.name = name;
        this.idNumber = idNumber;
        this.email = email;
    }
    askName() {
        return this.name;
    }
    askIdNumber() {
        return this.idNumber;
    }
    askEmail() {
        return this.email;
    }
    askRole() {
        return "Employee";
    }
}

module.exports = Employee;