import type { Plugin } from '@vuepress/core';
import type { DocsearchOptions } from '../shared/index.js';
export type DocsearchPluginOptions = DocsearchOptions;
export declare const docsearchPlugin: (options: DocsearchPluginOptions) => Plugin;
