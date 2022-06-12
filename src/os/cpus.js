import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const os = require('os');

export const cpus = () => {
    const cpusData = os.cpus();
    console.log(`${os.EOL}Overall amount of CPUS ${cpusData.length}${os.EOL}`);
    cpusData.forEach(cpu => {
        console.log(cpu.model);
        console.log(`Clock rate ${cpu.speed/1000} GHz${os.EOL}`);
    });
}
