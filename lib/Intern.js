const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }

  // Extend methods
  getSchool() {
    return this.school
  };

  getRole() {
    return "Intern"
  };
};

// Export
module.exports = Intern;