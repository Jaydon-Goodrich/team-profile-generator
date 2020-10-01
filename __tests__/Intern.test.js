const Intern = require('../lib/Intern');

test('Creates an intern object', () => {
    const intern = new Intern('Sam', 2, 'sam@email.com', 'OSU');

    expect(intern.school).toEqual(expect.any(String));
})

test('Get school', () => {
    const intern = new Intern('Sam', 2, 'sam@email.com', 'OSU');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('Get role of intern', () => {
    const intern = new Intern('Sam', 2, 'sam@email.com', 'OSU');

    expect(intern.getRole()).toBe('Intern');
})