// Creating class to extend Employee to Intern

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, idNumber, email, schoolName) {
    super(name, idNumber, email);
    this.schoolName = schoolName;
  }
  askSchoolName() {
    return this.schoolName;
  }
  askInternRole() {
    return "Intern";
  }
}

module.exports = Intern;
