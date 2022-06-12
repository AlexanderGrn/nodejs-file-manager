import { chdir, cwd } from 'process';

export const cd = (newPath) => {
    try {
        chdir(newPath);
    } catch (err) {
        // throw err;
        // throw new Error('Operation failed');
        if (err) throw  new Error(`FS operation failed`);
    }
    
};

// cd('C:\\Users');

// console.log(`Starting directory: ${cwd()}`);
// try {
//     chdir('/tmp');
//     console.log(`New directory: ${cwd()}`);
// } catch (err) {
//     console.error(`chdir: ${err}`);
// }