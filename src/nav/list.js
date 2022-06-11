import { readdir } from 'fs/promises';

export const list = async (path) => {
    const files = await readdir(path);
    files.forEach(file => console.log(file));
};

//list('./');