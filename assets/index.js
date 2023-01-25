const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
      type: "list",
      name: "license",
      message: "Select a license for your project?",
      choices:["MIT", "Apache 2.0", "GPL 3.0"]
    },
    {
      type: "list",
      name: "badge",
      message: "What is the name of your project?",
      choices:["License-MIT-blue", "License-Apache2.0-red", "License-GBL3.0-yellow"]
    },
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your project?",
    },
    {
      type: "input",
      name: "credits",
      message: "Please provide any credits or references for your project:",
    },
    {
      type: "input",
      name: "license",
      message: "Please provide a license for your project:",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username:",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email:",
    },
  ])
  .then((answers) => {
    fs.writeFile("OUTPUTREADME.md",
    `# License: ${answers.license}
    ![${answers.license}](https://imgshields.io/badge/${answers.badge})
    # ${answers.projectName}
    
    ## Description
    ${answers.description}

    ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Credits
    ${answers.credits}

    ## Questions
    Please contact me if you have any questions
    Github: github.com/${answers.github}
    Email: ${answers.email}
    
    ## License
    ${answers.license}`,
     (err) => {
              if (err) {
                    console.log(err);
                  } else {
        console.log("README.md successfully generated!");
      }
    });
})
