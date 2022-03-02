// employee constructor we will use this for Engineer, Intern and Manager
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // return name 
    getName () {
        return this.name;
    }

    // return ID 
    getId () {
        return this.id;
    }   

    // return email 
    getEmail () {
        return this.email;
    }

    // return employee 
    getRole () {
        return 'Employee'; 
    }
};

//exported 
module.exports = Employee; 