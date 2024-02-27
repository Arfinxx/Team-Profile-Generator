// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role = "Employee"){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }

    getName() {
        if(typeof this.name === "string"){
            return this.name;
        } else{
            console.log(`Error: Please correctly enter a name`)
        }
    }

    getId() {
        if(typeof this.id === "number"){
            return this.id;
        } else{
            console.log(`Error: Please correctly enter a name`)
        }
    }

    getEmail() {
        if(typeof this.email == "string"){
            return this.email;
        } else{
            console.log(`Error: Please correctly enter a name`)
        }
    }

    getRole() {
        return this.role
    }

}

module.exports = Employee;