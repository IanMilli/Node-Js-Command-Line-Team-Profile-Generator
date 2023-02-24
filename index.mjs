const Manager = import("./lib/Manager");
const Engineer = import("./lib/Engineer");
const Intern = import("./lib/Intern");
import inquirer from "inquirer";
import path from "path";
import fs from "fs/promises";

startProgram()
async function startProgram(){

team.push(newManager("", 1, ""))
let htmlDoc = render(team)
await fs.writeFile(outputPath,htmlDoc);


}







// Team members array
const teamMembers = [];


// Questions arrays
// Manager
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

// Engineer
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

// Intern
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

// Add team member?
const teamAdd =
{
  type: "list",
  message: "What type of team member would you like to add?",
  name: "team",
  choices: ["Engineer", "Intern", "None"]
}


// Create new team member
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
    teamMembers.push(newMember)
    createTeam()
  })
};

// Create team: add Engineer, Intern, or none?
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
        // if none, render team members array into file
        const finalHTML = render(teamMembers)
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