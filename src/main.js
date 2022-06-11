import { argv } from "process";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const username = argv[2].split('=')[1];
console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in path_to_working_directory ${username}`);

// rl.question(`Welcome to the File Manager, ${username}!\n`, (null) => {
 
rl.on('line', (command) => {
    rl.setPrompt(`You are currently in path_to_working_directory\n`);
        if (command === '.exit') {
            rl.close();
        } else {
            console.log('command ' + command);
            rl.prompt();
        }
    });
// });

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}!`)
});



