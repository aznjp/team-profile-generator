const Employee = require("../lib/Employee");

test("Testing employee class constructor type", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const testValue = "John"
    const testValue2 = 178;
    const testValue3 = "jpark103193@gmail.com";

    const a = new Employee(testValue);
    const b = new Employee("Foo", testValue2);
    const c = new Employee("Foo", 98, testValue3);

    expect(a.name).toBe(testValue);
    expect(b.id).toBe(testValue2);
    expect(c.email).toBe(testValue3);
});

test("Can get name via getName()", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "jpark103193@gmail.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Employee", () => {
    const testValue = "Employee";
    const e = new Employee("John", 1, "jpark103193@gmail.com");
    expect(e.getRole()).toBe(testValue);
});