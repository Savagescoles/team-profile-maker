// importing Employee  
const Employee = require('./Employee');

// getting manager info 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    //  manager 
    getRole () {
        return "Manager";
    }
}

//  new manager
module.exports = Manager; 