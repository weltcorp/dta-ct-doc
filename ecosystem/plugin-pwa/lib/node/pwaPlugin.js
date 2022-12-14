import { getDirname, path, withSpinner } from '@vuepress/utils';
import { generateServiceWorker } from './generateServiceWorker.js';
const __dirname = getDirname(import.meta.url);
export const pwaPlugin = ({ serviceWorkerFilename = 'service-worker.js', ...generateSWConfig } = {}) => (app) => {
    const plugin = {
        name: '@vuepress/plugin-pwa',
    };
    if (app.env.isDev) {
        return plugin;
    }
    return {
        ...plugin,
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        define: {
            __PWA_SW_FILENAME__: serviceWorkerFilename,
        },
        onGenerated: (app) => withSpinner('Generating service worker')(() => generateServiceWorker(app, serviceWorkerFilename, generateSWConfig)),
    };
};
