const Intern = require("../lib/Intern");

test("Can set name via constructor arguments", () => {
    const testValue = "John"
    const testValue2 = 178;
    const testValue3 = "jpark103193@gmail.com";

    const a = new Intern(testValue);
    const b = new Intern("Foo", testValue2);
    const c = new Intern("Foo", 98, testValue3);

    expect(a.name).toBe(testValue);
    expect(b.id).toBe(testValue2);
    expect(c.email).toBe(testValue3);
});

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