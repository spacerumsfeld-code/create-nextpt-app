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

//create directory if no directory with same name exists
try {
  fs.mkdirSync(appPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      '\x1b[31m',
      `The directory '${folderName}' already exists; please choose another name`,
      '\x1b[0m'
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

//actually create the project!
async function setup() {
  try {
    console.log('\x1b[33m', 'Creating your project...', '\x1b[0m');
    await runCmd(`git clone --depth 1 ${repo} ${folderName}`);

    process.chdir(appPath);

    console.log('\x1b[34m', 'Installing dependencies...', '\x1b[0m');
    await runCmd('npm install');
    console.log();

    await runCmd('npx rimraf ./.git');

    fs.unlinkSync(path.join(appPath, 'LICENSE.MD'));
    fs.rmdirSync(path.join(appPath, 'bin'), { recursive: true });
    fs.unlinkSync(path.join(appPath, 'package.json'));

    buildPackageJson(packageJson, folderName);

    console.log(
      '\x1b[32m',
      'Your app is ready to build!',
      '\x1b[0m'
    );

  } catch (error) {
    console.log(error);
  }
}

setup();
