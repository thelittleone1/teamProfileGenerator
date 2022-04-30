// Importing Intern Class
const Intern = require("../lib/intern");

// Tests whether Intern class returns "Intern"
describe("Intern", () => {

    describe("askInternRole", () => {
        it("Return the string Intern", () => {
            const newIntern = new Intern("Frank Herbert", "spiceWars@aol.com", "University of Dune");

            expect(newIntern.askInternRole()).toEqual("Intern");
        });
    });
});