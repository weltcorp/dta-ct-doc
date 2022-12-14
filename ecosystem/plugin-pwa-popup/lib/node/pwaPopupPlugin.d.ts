import type { Plugin } from '@vuepress/core';
import type { LocaleConfig } from '@vuepress/shared';
/**
 * Options for @vuepress/plugin-pwa-popup
 */
export interface PwaPopupPluginOptions {
    /**
     * Locales config for PWA popup
     */
    locales?: LocaleConfig<{
        message: string;
        buttonText: string;
    }>;
}
export declare const pwaPopupPlugin: ({ locales }?: PwaPopupPluginOptions) => Plugin;
