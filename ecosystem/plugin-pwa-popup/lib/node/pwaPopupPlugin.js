import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const pwaPopupPlugin = ({ locales = {} } = {}) => (app) => {
    const plugin = {
        name: '@vuepress/plugin-pwa-popup',
    };
    if (app.env.isDev) {
        return plugin;
    }
    return {
        ...plugin,
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        define: {
            __PWA_POPUP_LOCALES__: locales,
        },
    };
};
