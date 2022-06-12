import { argv } from 'process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readline = require('readline');

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { list } from './nav/list.js';
import { up } from './nav/up.js';
import { cd } from './nav/cd.js';
import { eol } from './os/eol.js';
import { cpus } from './os/cpus.js';
import { homedir } from './os/homedir.js';

const os = require('os');
// const homeDir = os.homedir();

import { chdir, cwd } from 'process';
chdir(homedir());
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
        // switch (command) {
        //     case 'list':
        //         list(workingDir);
        //         break;
        //     case 'up':
        //         workingDir = up(workingDir);
        //         break;
        //     case ((command.startsWith('cd ')) ? 'cd' : 'not'):
        //         console.log('right command ' + command);
        //         break;
        //     default: console.error('Invalid input');
        // }
        try {
            if (command === 'list') {
                list(workingDir);
            } else if (command === 'up') {
                workingDir = up(workingDir);
            } else if (command.startsWith('cd ')) {
                let input = command.split(' ');
                cd(input[1]);
                workingDir = cwd();
            } else if (command.startsWith('os ')) {
                let input = command.split(' ');
                switch (input[1]) {
                    case '--EOL':
                    console.log(JSON.stringify(eol()));
                        break;
                    case '--cpus':
                        cpus();
                        break;
                    case '--homedir':
                        console.log(homedir());
                        break;
                    default: console.error('Invalid input');
                }
            } else {
                console.error('Invalid input');
            }
        } catch (err) {
                console.error(err.message);
                rl.setPrompt(`${os.EOL}You are currently in ${workingDir}${os.EOL}`);
                setTimeout(() => rl.prompt(), 700);
        }
        rl.setPrompt(`${os.EOL}You are currently in ${workingDir}${os.EOL}`);
        setTimeout(() => rl.prompt(), 700);
    }
});
// });

rl.on('close', () => {
    console.log(`${os.EOL}Thank you for using File Manager, ${username}!`)
});
