const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam-git');

    expect(engineer.github).toEqual(expect.any(String));
})

test('gets github username', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam-git');

    expect(engineer.getGithub()).toEqual(engineer.github);
})

test('get role of engineer', () => {
    const engineer = new Engineer('Sam', 2, 'sam@email.com', 'sam-git');

    expect(engineer.getRole()).toBe('Engineer');
})