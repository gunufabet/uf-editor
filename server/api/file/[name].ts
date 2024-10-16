import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
    const params = event.context.params;
    if (!params || !params.name) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid parameters' });
    }
    const { name } = params;
    const filePath = path.join(process.cwd(), 'assets', 'script', `${name}.json`);
    if (!fs.existsSync(filePath)) {
        throw createError({ statusCode: 404, statusMessage: 'File not found' });
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
});
