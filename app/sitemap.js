import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.arcmeninterior.com';

function getRoutes(dir, baseRoute = '') {
    const routes = [];
    if (!fs.existsSync(dir)) {
        return routes;
    }

    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        if (item.name.startsWith('_') || item.name.startsWith('.') || item.name === 'api') {
            continue;
        }

        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
            const route = `${baseRoute}/${item.name}`;
            const pageTsx = path.join(fullPath, 'page.tsx');
            const pageJsx = path.join(fullPath, 'page.jsx');
            const pageJs = path.join(fullPath, 'page.js');
            if (fs.existsSync(pageTsx) || fs.existsSync(pageJsx) || fs.existsSync(pageJs)) {
                routes.push(route);
            }
            routes.push(...getRoutes(fullPath, route));
        }
    }
    return routes;
}

export default function sitemap() {
    const appDir = path.join(process.cwd(), 'app');
    const routes = getRoutes(appDir);
    const uniqueRoutes = Array.from(new Set(['', ...routes]));
    return uniqueRoutes.map((route) => ({
        url: `${BASE_URL}${route || '/'}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8
    }));
}
