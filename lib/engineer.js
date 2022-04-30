// Creating class to extend Employee class to Engineer class

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, idNumber, email, gitHubUserName) {
    super(name, idNumber, email);
    this.gitHubUserName = gitHubUserName;
  }
  askGitHubName() {
    return this.gitHubUserName;
  }
  askEngineerRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
