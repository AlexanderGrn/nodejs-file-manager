import * as path from 'path';

export const up = (workingDir) => {
    const root = workingDir.split(path.sep).slice(0, 1) + path.sep;
    workingDir = workingDir.split(path.sep).slice(0, -1).join(path.sep);

    return workingDir.includes(path.sep) ? workingDir : root;
};

// up();