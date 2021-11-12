// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const choices = {
  MIT: {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  }, 
  Mozilla: {
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: '[Mozilla](https://opensource.org/licenses/MPL-2.0)',
  },
  Apache: {
    badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: '[Apache](https://opensource.org/licenses/Apache-2.0)',
  },
  BSD: {
    badge: '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)',
  },
  None: {
    badge: 'None',
    link: '',
  },
}

function renderLicenseBadge(license) {
  // console.log('license: ', license);
  return choices[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return choices[license].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge(data.license);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
