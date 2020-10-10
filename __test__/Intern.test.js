const Intern = require("../lib/Intern");

test("Testing intern class constructor school details", () => {
    const testValue = "UCF";
    const e = new Intern("Foo", 1, "jpark103193@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern role", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "jpark103193@gmail.com", "UCF");
    expect(e.getRole()).toBe(testValue);
});

test("Can get School name via getSchool()", () => {
    const testValue = "UCF";
    const e = new Intern("Foo", 1, "jpark103193@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});