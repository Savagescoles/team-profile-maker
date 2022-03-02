// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // github 
    getGithub () {
        return this.github;
    }

     //role to engineer
    getRole () {
        return "Engineer";
    }
}

//exported 
module.exports = Engineer; 