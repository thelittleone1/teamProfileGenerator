// Creating class to exend Employee class to Manager

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, idNumber, email, officeNumber) {
    super(name, idNumber, email);
    this.officeNumber = officeNumber;
  }
  askOfficeNumber() {
    return this.officeNumber;
  }
  askManagerRole() {
    return "Manager";
  }
}

module.exports = Manager;
