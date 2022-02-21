//<i class="fa fa-google" aria-hidden="true"></i>
// Creating a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " ";
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GPL-v3") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  return licenseString;
};

// function to Generate Readme Markdown
function generateMarkdown(data) {
  return `
  Professional README.md Generator
  ## ${data.Title}
  https://github.com/${data.username}/${data.Title}
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#usage)  
  3. [Contributors](#Contributors)
  4. [Tests](#Tests)
  5. [License](#License)
  6. [GitHub](#GitHub)
  7. [E-mail](#E-mail)
  ## Description
  ${data.description} 
  ## Installation
  The following dependencies needed to be installed to run the application are ${data.installation}
  ## Usage
  The user need to know to use this app ,${data.usage}
  ## Contributors
  Contributors: ${data.contributors}
  ## Tests
  The following needed to run the test:${data.Tests}
  ## License
  The Project is licensed under: ${renderLicenseBadge(data)}
  ## GitHub
  ${data.username}
  ## E-mail
  ${data.Email}
  ## Questions:
  If you have any questions about the repo, open an issue or contact at ${data.username}/${data.Email}

 `;
}

module.exports = generateMarkdown;
