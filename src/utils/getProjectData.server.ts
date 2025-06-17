import fs from 'fs';
import path from 'path';

export function getProjectData(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src/Constants', `${slug}.json`);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return null;
  }
}
