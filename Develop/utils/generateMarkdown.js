// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {    
  if(license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'IBM') {
      return  `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'ISC') {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (license === 'IBM') {
      return  `[IBM](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'ISC') {
      return `[ISC](https://opensource.org/licenses/ISC)`
  } else {
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'N/A'){
    return `Licensed under the ${renderLicenseLink(license)}  license`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.projectName}
## Table of Contents ${renderLicenseBadge(data.licensing)}

- [Description](#description)
- [Installation](#installation)
- [Licensing](#licensing)
- [Usage](#usage)
- [Languages](#languages)
- [Testing](#tests)
- [Contributing](#contributing)
- [Licensing](#license)
- [Questions](#questions)
    
## Description <a name="description"></a>
${data.description} 

## Installation <a name="installation"></a>
Here's how you setup this project:<br />
${data.installation}  

## Languages <a name="languages"></a>
${data.languages}  

## Licensing <a name="licensing"></a> 
This application is covered by the ${data.licensing} license. 

## Usage <a name="usage"></a> 
${data.usage} 

## Tests  <a name="tests"></a> 
${data.tests} 

## Contributing <a name="contributing"></a> 
Resources and people who contributed include: ${data.credits} 

If you would like to contribute to the project further, then: ${data.contributing} 
<br /> 

## license <a name="license"></a> 
${renderLicenseSection(data.licensing)} 


## Questions 😊 <a name="questions"></a> 
Get in touch with me on Github: [${data.githubName}](https://github.com/${data.githubName})
<br />
If you have any additional questions, please contact me at: ${data.email}
`;
}

module.exports = generateMarkdown;
