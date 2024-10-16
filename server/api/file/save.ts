import fs from 'fs';
import { H3Event, EventHandlerRequest } from 'h3';
import path from 'path';

export default defineEventHandler(async (event) => {
    const { name, content } = await useBody(event);
    const filePath = path.join(process.cwd(), 'assets', 'script', `${name}.json`);
    if (!fs.existsSync(filePath)) {
        throw createError({ statusCode: 404, statusMessage: 'File not found' });
    }
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    return { success: true };
});

async function useBody(event: H3Event<EventHandlerRequest>): Promise<{ name: any; content: any; }> {
    const body = await readBody(event);
    return {
        name: body.name,
        content: body.content
    };
}

