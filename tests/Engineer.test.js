//Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Any', 100, 'any@any.com', 'Githubname');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github 
test('gets engineer github value', () => {
    const engineer = new Engineer('Ben', 100, 'bensavage100@gmail.com', 'Savagescoles');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Ben', 100, 'bensavage100@gmail.com', 'Savagescoles');

    expect(engineer.getRole()).toEqual("Engineer");
});