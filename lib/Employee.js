
class Employee     {
    constructor(name, id, email){
       this.name = aName
       this.id = getName
       this.email = email;
    }
    //this method is so named because of the section in page-template.js that corresponds to this function allowing the data resulting from this method to be displayed at that point of the rendered html file
       getName(){
return this.name;
       
       }
       getId(){
return this.id;

       }
       getEmail(){
return this.email;

       }
       getRole(){
        // this return value is different as we simply want to reurn the role value in this case that it is for an employee
        return "Employee";


       }

    }

    module.exports = Employee;