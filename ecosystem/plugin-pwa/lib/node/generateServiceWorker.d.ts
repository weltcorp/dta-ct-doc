import type { App } from '@vuepress/core';
import type { GenerateSWOptions } from 'workbox-build';
export type GenerateSWConfig = Omit<GenerateSWOptions, 'swDest' | 'globDirectory'>;
export declare const generateServiceWorker: (app: App, serviceWorkerFilename: string, generateSWConfig: GenerateSWConfig) => Promise<void>;
