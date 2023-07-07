// prompt questions for logo creation
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Welcome to the Logo Creator! Please enter the name for your logo, up to only 3 characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter a color keyword or hexadecimal number for a color. This will be for the TEXT color.',
    },
    {
      type: 'list',
      name: 'shapes',
      message: 'Please choose a shape.',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter a color keyword or hexadecimal number for a color. This will be for the SHAPE color.'
    },
  ];