// Importing Employee Classs
const Employee = require("../lib/employee");

// Test to show Employee returns "theSilkRoad@aol.com"
describe("Employee", () => {
  describe("askRole", () => {
    it("Return the string theSilkRoad@aol.com", () => {
      const newEmployee = new Employee(
        "Marco Polo",
        1324,
        "theSilkRoad@aol.com"
      );

      expect(newEmployee.askEmail()).toEqual("theSilkRoad@aol.com");
    });
  });
});
