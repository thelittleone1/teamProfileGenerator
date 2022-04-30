// Importing Employee Classs
const Employee = require("../lib/employee");

// Test to show Employee returns "Employee"
describe("Employee", () => {

    describe("askRole", () => {
        it("Return the string Employee", () => {
            const newEmployee = new Employee("Marco Polo", 1324, "theSilkRoad@aol.com");

            expect(newEmployee.askRole()).toEqual("Employee");
        });
    });
});