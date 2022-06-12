import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const os = require('os');


export const homedir = () => {
    return os.homedir();
}
