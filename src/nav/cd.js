import { chdir } from 'process';

export const cd = (newPath) => {
    try {
        chdir(newPath);
    } catch {
     throw new Error('Operation failed');
    }
    
};
