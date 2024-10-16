import fs from 'fs';
import { H3Event, EventHandlerRequest } from 'h3';
import path from 'path';

export default defineEventHandler(async (event) => {
    const { oldName, newName } = await useBody(event);
    const oldFilePath = path.join(process.cwd(), 'assets', 'script', `${oldName}.json`);
    const newFilePath = path.join(process.cwd(), 'assets', 'script', `${newName}.json`);

    if (!fs.existsSync(oldFilePath)) {
        throw createError({ statusCode: 404, statusMessage: 'File not found' });
    }

    if (fs.existsSync(newFilePath)) {
        throw createError({ statusCode: 409, statusMessage: 'New file name already exists' });
    }

    try {
        fs.renameSync(oldFilePath, newFilePath);
        return { success: true, message: 'File renamed successfully' };
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: 'Failed to rename file' });
    }
});

async function useBody(event: H3Event<EventHandlerRequest>): Promise<{ oldName: string; newName: string; }> {
    const body = await readBody(event);
    return {
        oldName: body.oldName,
        newName: body.newName
    };
}