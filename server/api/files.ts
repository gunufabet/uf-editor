import fs from 'fs';
import path from 'path';

export default defineEventHandler(() => {
    const scriptDir = path.join(process.cwd(), 'assets', 'script');
    const files = fs.readdirSync(scriptDir).filter(file => file.endsWith('.json'));
    return files;
});
