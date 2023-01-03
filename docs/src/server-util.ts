import fs from 'fs';
import path from 'path';

export function readProjectDirs(): string[] {
  return fs.readdirSync(path.join(__dirname, '..', '..', '..', '..', 'packages'), {encoding: 'utf-8'})
}

export function readFileFrom(project: string, file: string): string | undefined {
  return fs.readFileSync(path.join(__dirname, '..', '..', '..', '..', 'packages', project, file), {encoding: 'utf-8'})
}
