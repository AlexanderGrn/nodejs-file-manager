import { argv } from "process";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readline = require('readline');

// import * as path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const os = require('os');
const homeDir = os.homedir();

import { chdir, cwd } from 'process';
chdir(homeDir);
let workingDir = cwd();

const username = argv[2].split('=')[1];
console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${workingDir}`);

const rl = readline.createInterface(process.stdin, process.stdout);
// rl.question(`Welcome to the File Manager, ${username}!\n`, (null) => {
 
rl.on('line', (command) => {
    rl.setPrompt(`${os.EOL}You are currently in ${workingDir}${os.EOL}`);
        if (command === '.exit') {
            rl.close();
        } else {
            console.log('command ' + command);
            rl.prompt();
        }
    });
// });

rl.on('close', () => {
    console.log(`${os.EOL}Thank you for using File Manager, ${username}!`)
});



