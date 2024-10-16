import fs from 'fs';
import { H3Event, EventHandlerRequest } from 'h3';
import path from 'path';

export default defineEventHandler(async (event) => {
    const { name, content, duplicate } = await useBody(event);
    const filePath = path.join(process.cwd(), 'assets', 'script', `${name}.json`);
    
    if (duplicate) {
        const newFilePath = path.join(process.cwd(), 'assets', 'script', `${duplicate}.json`);
        if (fs.existsSync(newFilePath)) {
            throw createError({ statusCode: 409, statusMessage: 'Duplicate file already exists' });
        }
        fs.writeFileSync(newFilePath, JSON.stringify(content, null, 2));
        return { success: true, message: 'File duplicated successfully' };
    } else {
        if (!fs.existsSync(filePath)) {
            throw createError({ statusCode: 404, statusMessage: 'File not found' });
        }
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
        return { success: true, message: 'File saved successfully' };
    }
});

async function useBody(event: H3Event<EventHandlerRequest>): Promise<{ name: any; content: any; duplicate?: any; }> {
    const body = await readBody(event);
    return {
        name: body.name,
        content: body.content,
        duplicate: body.duplicate
    };
}