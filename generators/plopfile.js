module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/component/Component.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/component/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.jsx',
        templateFile: 'templates/component/stories.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.jsx',
        templateFile: 'templates/component/test.jsx.hbs'
      }
    ]
  }),
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/pages/{{name}}/index.jsx',
          templateFile: 'templates/page/Page.jsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{name}}/styles.js',
          templateFile: 'templates/page/styles.js.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{name}}/stories.jsx',
          templateFile: 'templates/page/stories.jsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{name}}/test.jsx',
          templateFile: 'templates/page/test.jsx.hbs'
        }
      ]
    })
}
