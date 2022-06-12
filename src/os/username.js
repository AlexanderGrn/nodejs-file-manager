import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const os = require('os');

export const username = () => {
    return os.userInfo(username)['username'];
}
