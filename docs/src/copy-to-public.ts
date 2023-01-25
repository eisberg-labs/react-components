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
const projectsStr = projects.map(project => {
  const pkgJson = JSON.parse(readFileFrom(project, 'package.json'));
  delete pkgJson['scripts'];
  delete pkgJson['gitHead'];
  return JSON.stringify(pkgJson);
});
fs.writeFileSync(path.join(dirname, 'projects.ts'), `export const projects = [${projectsStr}];`);

