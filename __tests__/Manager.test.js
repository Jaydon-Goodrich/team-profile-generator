const Manager = require('../lib/Manager');
//test for object
test('Creates a manager object', () => {
    const manager = new Manager('Sam', 2, 'sam@email.com', 203);

    expect(manager.office).toEqual(expect.any(Number));
})
//test for role
test('Get role of manager', () => {
    const manager = new Manager('Sam', 2, 'sam@email.com', 203);

    expect(manager.getRole()).toBe('Manager');
})