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

    ### Description 💡 <a name="description"></a>
    ${data.description} 

    ### Installation 💾 <a name="installation"></a>
    Here's how you setup this project:<br />
    ${data.installation}  

    ### Languages 🧰 <a name="languages"></a>
    ${data.languages}  

    ### Licensing ✨ <a name="licensing"></a> 
    This application is covered by the ${data.licensing} license. 

    ### Usage 💥 <a name="usage"></a> 
    ${data.usage} 

    ### Tests 💎  <a name="tests"></a> 
    ${data.tests} 

    ### Contributing 🤝 <a name="contributing"></a> 
    Resources and people who contributed include: ${data.credits} 

    <br />
    If you would like to contribute to the project further, then: ${data.contributing} 
    ### Questions 😊 <a name="questions"></a> 
    Get in touch with me on Github: [${data.username}](https://github.com/${data.username})
    <br />
    If you have any additional questions, please contact me at: ${data.email}
`;
}

module.exports = generateMarkdown;
