[![npm version](https://badge.fury.io/js/html-es6-template-loader.svg)](https://badge.fury.io/js/html-es6-template-loader)
![Dependencies status](https://david-dm.org/berardo/html-es6-template-loader/status.svg)
![devDependencies status](https://david-dm.org/berardo/html-es6-template-loader/dev-status.svg)

# WEBPACK - HTML ES6 TEMPLATE LOADER

Webpack loader to parse HTML as ES6 template strings

## Motivation

This loader is mostly indicated for vanilla Javascript projects
(no template engines), as it surrounds imported html file with
ES6 string templates operator (backticks: ``) and gives you
ability to load exported HTML / text files as local strings,
suporting interpolations.

## Usage

To add it as dev dependency:
```bash
npm install --save-dev html-es6-template-loader
```

To set this loader on **webpack.config.js**:
```javascript
module: {
  rules: [
    {
      test: /\.html$/,
      use: ['html-es6-template-loader']
    },
  ],
}
```

A template may look like this:
File: e.g. `template.html`
```html
<div>Every time you use ${this.avoid} a ${this.who} dies</div>
```

A javascript file may look like this:
 ```javascript
 import template from './template.html';

 document.getElementById('container').innerHTML = template({
   avoid: 'var',
   who: 'puppy'
 });
 ```

You might want to have the template exported as ES5 concatenated string.
To do that, just add a query parameter `transpile = true`:

```javascript
module: {
  rules: [
    {
      test: /\.html$/,
      use: ['html-es6-template-loader'],
      options: {
        transpile: true
      },
    },
  ],
}
```
