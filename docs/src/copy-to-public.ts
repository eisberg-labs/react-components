import {dirname, readFileFrom, readProjectDirs, rootPackageDir} from './server-util';
import fs from 'fs';
import path from 'path';

export const projects = readProjectDirs()
for (const dirName of projects) {
  fs.cpSync(
    path.join(rootPackageDir, dirName, 'docs'),
    path.join(dirname, '..', 'public', 'packages', dirName, 'docs'), {
      force: true,
      recursive: true
    })

}
const projectsStr = projects.map(project => readFileFrom(project, 'package.json'));
fs.writeFileSync(path.join(dirname, 'projects.ts'), `export const projects = [${projectsStr}];`);

