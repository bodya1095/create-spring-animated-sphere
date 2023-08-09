#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(`${ command }`, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed to execute  ${ command }`, error);

        return false;
    }

    return true;
};

const repoName = process.argv[ 2 ];
const gitCheckoutCommand = `git clone https://github.com/bodya1095/${ repoName }`;
const installDepsComand = `cd ${ repoName } && npm install`;

console.log(`Clonning ${ repoName }`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) { process.exit(-1); }

console.log(`Intalling dependencies for ${repoName}`);
const installDeps = runCommand(installDepsComand);
if (!installDeps) { process.exit(-1); }

console.log('All installed and ready for work!');
