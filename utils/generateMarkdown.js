// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-green)
![badge](https://img.shields.io/github/last-commit/${data.username}/${data.repo})
- [instalation](#instalation)
- [usage](#usage)
- [contribution](#contribution)
- [tests](#tests)


  ## description 
  ${data.description}
  
  ## instalation
  ${data.instalation}

  ## usage
  ${data.usage}

  ## license
  ${data.license}

  ## contribution
  ${data.contribution}

  ## tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
