const Manager = require("../lib/Manager");

test("Testing manager class constructor details", () => {
    const testValue = 453;
    const e = new Manager("Foo", 1, "jpark103193@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return Manager role", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 153, "jpark103193@gmail.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 230;
    const e = new Manager("Foo", 987, "jpark103193@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});