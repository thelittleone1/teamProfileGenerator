const Employee = require("../lib/employee");

describe("Employee", () => {

    describe("askRole", () => {
        it("Return the string Employee", () => {
            const newEmployee = new Employee("Marco Polo", 1324, "theSilkRoad@aol.com");

            expect(newEmployee.askRole()).toEqual("Employee");
        });
    });
});