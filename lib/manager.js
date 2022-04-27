// Creating class to exend Employee class to Manager

const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, idNumber, email) {
        super(name, idNumber, email, officeNumber) 
            this.officeNumber = this.officeNumber; 
        }
        askOfficeNumber() {
            return this.officeNumber;
        }
        askManagerRole() {
            return "Manager";
        }
}

module.exports = Manager;