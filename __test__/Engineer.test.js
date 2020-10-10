const Engineer = require("../lib/Engineer");

test("Can set name via constructor arguments", () => {
    const testValue = "John"
    const testValue2 = 178;
    const testValue3 = "jpark103193@gmail.com";

    const a = new Engineer(testValue);
    const b = new Engineer("Foo", testValue2);
    const c = new Engineer("Foo", 98, testValue3);

    expect(a.name).toBe(testValue);
    expect(b.id).toBe(testValue2);
    expect(c.email).toBe(testValue3);
});

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