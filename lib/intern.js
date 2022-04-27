// Creating class to extend Employee to Intern

const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, idNumber, email) {
        super(name, idNumber, email, schoolName)
        this.schoolName = this.schoolName;
    }
    askSchoolName() {
        return this.schoolName;
    }
    askInternRole() {
        return "Intern";
    }
}

module.exports = Intern;