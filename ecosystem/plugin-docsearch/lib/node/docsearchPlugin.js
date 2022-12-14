import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const docsearchPlugin = (options) => ({
    name: '@vuepress/plugin-docsearch',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    define: {
        __DOCSEARCH_OPTIONS__: options,
    },
});
