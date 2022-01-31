// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.projectName} 🏆 
    ## Table of Contents ![badge](https://img.shields.io/badge/license-${data.licensing}-blue)

    - [Description](#description)
    - [Installation](#installation)
    - [Licensing](#licensing)
    - [Usage](#usage)
    - [Languages](#languages)
    - [Licensing](#tests)
    - [Contributing](#contributing)
    - [Questions](#questions)
    
`;
}

module.exports = generateMarkdown;
