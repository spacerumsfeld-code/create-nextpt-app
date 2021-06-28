#! /usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

//necessary imports, eslint ignore for node module importation /w require statement
const path = require('path');
const util = require('util');
const packageJson = require('../package.json');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

async function runCmd(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.log(stderr);
  } catch {
    (error) => {
      console.log('\x1b[31m', error, '\x1b[0m');
    };
  }
}

//ensure app name provided along with create-npt-app command
if (process.argv.length < 3) {
  console.log('Please provide a name for your application');
  process.exit(1);
}

const ownPath = process.cwd();
const folderName = process.argv[2];
const appPath = path.join(ownPath, folderName);
const repo = 'https://github.com/spacerumsfeld-code/create-npt-app.git';
