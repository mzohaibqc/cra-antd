const lessToJs = require('less-vars-to-js');
const fs = require('fs');

module.exports = [
  ['use-babel-config', '.babelrc'],
  ['use-eslint-config', '.eslintrc'],
  config => {
    const newConfig = config;

    let rule = newConfig.module.rules.find(rule => rule.oneOf);
    // Read the less file in as string
    const paletteLess = fs.readFileSync('./src/styles/variables.less', 'utf8');
    
    const variables = lessToJs(paletteLess);
    rule.oneOf.unshift({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: variables
          }
        }
      ]
    });

    return newConfig;
  }
];
