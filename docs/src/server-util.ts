import fs from 'fs';
import path from 'path';

export const dirname = path.dirname(__filename)
export const rootPackageDir = path.join(dirname, '..', '..', 'packages');

export function readProjectDirs(): string[] {
  return fs.readdirSync(rootPackageDir, {encoding: 'utf-8'})
}

export function readFileFrom(project: string, file: string): string | undefined {
  return fs.readFileSync(path.join(rootPackageDir, project, file), {encoding: 'utf-8'})
}
