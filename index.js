const Manager = require(`./lib/manager`)
const Intern = require(`./lib/intern`)
const Engineer = require(`./lib/engineer`)

const inquirer = require("inquirer")

const employees = []

inquirer.prompt([
    {type: "input", name:"name", message: "What's your name?"}, {type: "input", name: "id", message: "What's your ID?"}, {type:"input", name: "email", message: "What's your email?"}, {type:"input", name: "office_number", message: "What's your office number?"}
]) .then(function(answers){
    console.log(answers)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office_number);
    employees.push(manager)
    chooseEmployee()
})  

function chooseEmployee() {
    inquirer.prompt([
        {type:"list", name: "name", message: "Which employee do you want to add next?", choices: ["Intern", "Engineer", "Quit"]}
    ]) .then(function(answers){
        console.log(answers)
        if(answers.name === "Intern"){
            addIntern()
        }
    }) 
}

function addIntern(){
    inquirer.prompt([
        {type: "input", name:"name", message: "What's your name?"}, {type: "input", name: "id", message: "What's your ID?"}, {type:"input", name: "email", message: "What's your email?"}, {type:"input", name: "school", message: "What school did you go to?"}
    ]) .then(function(answers){
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern)
        chooseEmployee()
    })  
}

function addEngineer(){
    inquirer.prompt([
        {type: "input", name:"name", message: "What's your name?"}, {type: "input", name: "id", message: "What's your ID?"}, {type:"input", name: "email", message: "What's your email?"}, {type:"input", name: "github", message: "What is your GitHub?"}
    ]) .then(function(answers){
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.school);
        employees.push(engineer)
        chooseEmployee()
    })  
}