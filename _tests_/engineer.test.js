const Engineer = require("../lib/engineer");

describe("Engineer", () => {

    describe("askEngineerRole", () => {
        it("Return the string Engineer", () => {
            const newEngineer = new Engineer("Alexander", 3, "macedoniaRules@aol.com", "babylonGit");

            expect(newEngineer.askEngineerRole()).toEqual("Engineer");
        });
    });
});