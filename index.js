const Manager = require("./assets/library/Manager");
const Engineer = require("./assets/library/Engineer");
const Intern = require("./assets/library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./assets/src/page-template");
const { POINT_CONVERSION_COMPRESSED } = require("constants");


// create an array for the team that is empty ready for populating
const team = [];


// Questions arrays
//Create the question array for the manager
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office"
  }
];

//Create the question array for the engineer
const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your engineer's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "github"
  }
];

//Create the question array for the intern
const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your intern's ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "school"
  }
];

//create a question allowing you to add a new team member or stop there
const teamAdd =
{
  type: "list",
  message: "What type of team member would you like to add?",
  name: "team",
  choices: ["Engineer", "Intern", "No more - Finish"]
}


// function to allow the creation of a new team member based on the user inputs
function createTeamMember(questions, type) {
  let spec;
  inquirer.prompt(questions).then(response => {
    switch (type) {
      case Engineer:
        spec = response.github;
        break;
      case Intern:
        spec = response.school;
        break;
      default:
        spec = response.office;
    }
    const newMember = new type(response.name, response.id, response.email, spec)
    team.push(newMember)
    createTeam()
  })
};

// function to create the team and add extra engineers, interns or select no more
function createTeam() {
  inquirer.prompt(teamAdd).then(response => {
    switch (response.team) {
      case "Engineer":
        createTeamMember(engineerQuestions, Engineer);
        break;
      case "Intern":
        createTeamMember(internQuestions, Intern);
        break;
      default:
        // if no more is selected render the details entered into the team array
        const finalHTML = render(team)
        fs.writeFile("./output/team.html", finalHTML, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("File written!");
        });
    }
  })
};


// Begin building team
createTeamMember(managerQuestions, Manager);
