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


// function to allow the creation of a new team member based on the user inputs,
//give the function a value of questions and type. questions refers to the question array we need and type refers to Engineer, Intern.
function createTeamMember(questions, type) {
  let spec;
  inquirer.prompt(questions).then(response => {
    //use a switch statement to evaluate the expression , matching its value against a series of case clauses and to execute the first clause with a matching value
    // in this case if the value of spec is equal to the value of response.github then a value for newMember consisting of name id email and spec for the type engineer
    //will be pushed to the team array.
    switch (type) {
      //case clause is used to match against expression - the above pseudo coding explains what this is doing
      case Engineer:
        spec = response.github;
        //use break to break out of the switch
        break;
        //if the case above does not evaluate spec to equal response.github, then the switch will move on to the next case
      case Intern:
        // if in the case of Intern spec = response.school the switch will break and the code will jump to the point a newMember value is pushed
        //to the team array containing the type INTERN with the corresponding name, id, email and spec value of school
        spec = response.school;
        //use break to break out of the switch
        break;
        //if neither of the cases above validate as true the code needs a default value for spec, in this case it will determine has a spec= response.office
        //or to put it another way a manager who will be pushed to the team array
      default:
        spec = response.office;
    }
    const newMember = new type(response.name, response.id, response.email, spec)
    team.push(newMember)
    // initiate function createTeam - see below
    createTeam()
  })
};

// function to create the team and add extra engineers, interns or select no more

//function name
function createTeam() {
  //get the response from teamADD question  using the following
  inquirer.prompt(teamAdd).then(response => {
    //use switch to evaluate the response.team value
    switch (response.team) {
      case "Engineer":
        //if the value of the createTeamMember function is engineerQuestions, type = Engineer, end switch and render team 
        createTeamMember(engineerQuestions, Engineer);
        break;
      case "Intern":
         //if the value of the createTeamMember function is internQuestions, type = Intern, end switch and render team 
        createTeamMember(internQuestions, Intern);
        break;
      default:
        // default if the values above do not match the value of the expression make finalHtml = render the value of  team (ie no more team members)
        const finalHTML = render(team)
        //use fs.writeFile to write to the folder output the file team.html the value of finalHTML and run function(err)
        fs.writeFile("./output/team.html", finalHTML, function (err) {
          //function err is run and if there is no error a null value will occur and the console will log the phrase "file written", if there is an error the function
          //will cause the value of err (error ) to be console logged.
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
