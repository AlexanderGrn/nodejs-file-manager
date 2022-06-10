import { argv } from "process";

const userName = argv[2].split('=')[1];
console.log('hello ' + userName);