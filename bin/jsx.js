#!/usr/bin/env node
const path = require('path')
const cliHtml = require('cli-html');
const cliJSX = require('../');

const jsxFile = path.resolve(process.cwd(), process.argv[2])
const rootPath = path.dirname(jsxFile)

require("@babel/register")({
  extends: __dirname+'/../.babelrc',
  root: rootPath,
  only: [rootPath],
  "compact": true
});

const JSXVal = require(jsxFile);

console.log(cliJSX(cliJSX(JSXVal.default)))