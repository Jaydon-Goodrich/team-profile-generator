const Engineer = require('../lib/Engineer');
//test for object
test('creates a engineer object', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam-git');

    expect(engineer.github).toEqual(expect.any(String));
})
//test for username
test('gets github username', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam-git');

    expect(engineer.getGithub()).toEqual(engineer.github);
})
//test for role
test('get role of engineer', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam-git');

    expect(engineer.getRole()).toBe('Engineer');
})