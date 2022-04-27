// Creating class to extend Employee class to Engineer class

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, idNumber, email) {
        super(name, idNumber, email, gitHubUserName)
        this.gitHubUserName = this.gitHubUserName;
    }
    askGitHubName() {
        return this.gitHubUserName;
    }
    askEngineerRole() {
        return "Engineer";
    }
}

module.exports = Engineer;