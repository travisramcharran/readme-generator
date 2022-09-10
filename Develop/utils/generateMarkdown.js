// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === "MIT") {
    return `[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://choosealicense.com/licenses/mit/)`;
  }else if (License === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === "MIT") {
    return  `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (License === "Boost"){
    return `[Boost License](https://choosealicense.com/licenses/bsl-1.0/)`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== "None"){
    return `This app is licensed under the ${License} License.`
  } else {
    return ``;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  
  ## Description
  ${data.Description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributors
  ${data.Contributing}

  ## License
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}


  ## Tests
  To run this test please use:
  ${data.Tests}

  ## Questions
  
  If you have any questions/issues, please contact:
  
  GitHub: http://github.com/${data.GitHub}
  Email: ${data.Email}
`;
}

module.exports = generateMarkdown;
