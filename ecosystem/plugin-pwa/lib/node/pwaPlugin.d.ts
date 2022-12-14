import type { Plugin } from '@vuepress/core';
import type { GenerateSWConfig } from './generateServiceWorker.js';
/**
 * Options for @vuepress/plugin-pwa
 */
export interface PwaPluginOptions extends GenerateSWConfig {
    /**
     * Filename of the generated service worker file
     *
     * If you put it into a sub directory, the `scope` of service worker
     * might be affected
     *
     * @default 'service-worker.js'
     */
    serviceWorkerFilename?: string;
}
export declare const pwaPlugin: ({ serviceWorkerFilename, ...generateSWConfig }?: PwaPluginOptions) => Plugin;
