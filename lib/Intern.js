// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school 
    getSchool () {
        return this.school;
    }

    //role to intern
    getRole () {
        return "Intern";
    }
}

//exported 
module.exports = Intern; 