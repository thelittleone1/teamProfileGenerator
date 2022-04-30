const Manager = require("../lib/manager");

describe("Manager", () => {

    describe("askManagerRole", () => {
        it("Return the string Manager", () => {
            const newManager = new Manager("Genghis Khan", 1206, "mongoliaRocks@aol.com", 1227);

            expect(newManager.askManagerRole()).toEqual("Manager");
        });
    });
});