const Engineer = require("../lib/Engineer");

test("Testing engineer class constructor github details", () => {
    const testValue = "Aznjp";
    const e = new Engineer("Foo", 54, "jpark103193@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return Engineer role", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 564, "jpark103193@gmail.com", "Aznjp");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "Aznjp";
    const e = new Engineer("Foo", 1, "jpark103193@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});