const Employee = require('../lib/Employee');
//tests for the object
test('creates a employee object', () => {
    const employee = new Employee('Sam', 2, 'sam@email.com');

    expect(employee.name).toBe('Sam');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})
//test for the name
test('gets employee name', () => {
    const employee = new Employee('Sam', 2, 'sam@email.com');

    expect(employee.getName()).toBe(employee.name);
})
//test for id number
test('gets employee id', () => {
    const employee = new Employee('Sam', 2, 'sam@email.com');

    expect(employee.getId()).toBe(employee.id);
})
//test for email
test('gets employee email', () => {
    const employee = new Employee('Sam', 2, 'sam@email.com');

    expect(employee.getEmail()).toBe(employee.email);
})
//test for employee role
test('gets employee role', () => {
    const employee = new Employee('Sam', 2, 'sam@email.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})