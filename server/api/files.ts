import fs from 'fs';
import path from 'path';

export default defineEventHandler(() => {
    const scriptDir = path.join(process.cwd(), 'assets', 'script');
    const files: string[] = [];

    interface ReadDirectoryRecursively {
        (dir: string, basePath?: string): void;
    }

    const readDirectoryRecursively: ReadDirectoryRecursively = (dir, basePath = '') => {
        const items: string[] = fs.readdirSync(dir);

        items.forEach((item: string) => {
            const fullPath: string = path.join(dir, item);
            const relativePath: string = path.join(basePath, item);

            if (fs.lstatSync(fullPath).isDirectory()) {
                // If the item is a directory, read it recursively
                readDirectoryRecursively(fullPath, relativePath);
            } else if (item.endsWith('.json')) {
                // If the item is a JSON file, add it to the list
                files.push(relativePath);
            }
        });
    };

    // Start reading from the root script directory
    readDirectoryRecursively(scriptDir);

    return files;
});
