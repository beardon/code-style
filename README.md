# Beardon's Code Style Guidelines

## EditorConfig
[EditorConfig](http://editorconfig.org/) helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

### Usage
Place the [.editorconfig](https://github.com/beardon/code-style/blob/master/.editorconfig) file in the root of your project and install the [relevant plugin](http://editorconfig.org/#download).

## ESLint
[ESLint](http://eslint.org/) is a pluggable linting utility for JavaScript and JSX to enforce consistent/custom styles/rules across a codebase.

### Usage
1. `npm i eslint eslint-config-beardon -D`
2. add `"extends": "beardon"` to your [.eslintrc](http://eslint.org/docs/user-guide/configuring) in the root of your project

For es6 support, extend `"beardon/es6"` instead.

If you have any complaints with any of the [rules](https://github.com/beardon/code-style/blob/master/eslint-config-beardon/rules) used, open an [issue](https://github.com/beardon/code-style/issues) and the other developers will discuss/vote.

[List](http://eslint.org/docs/rules/) of all rules and their meanings.
